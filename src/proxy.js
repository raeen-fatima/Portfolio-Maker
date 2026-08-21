import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

async function verifyJWT(token) {
  try {
    if (!JWT_SECRET || !token) {
      return false;
    }

    const [encodedHeader, encodedPayload, encodedSignature] =
      token.split(".");

    if (!encodedHeader || !encodedPayload || !encodedSignature) {
      return false;
    }

    const encoder = new TextEncoder();

    const data = `${encodedHeader}.${encodedPayload}`;

    const secretKey = await crypto.subtle.importKey(
      "raw",
      encoder.encode(JWT_SECRET),
      {
        name: "HMAC",
        hash: "SHA-256",
      },
      false,
      ["verify"]
    );

    const signature = Uint8Array.from(
      atob(encodedSignature.replace(/-/g, "+").replace(/_/g, "/")),
      (char) => char.charCodeAt(0)
    );

    const isValid = await crypto.subtle.verify(
      "HMAC",
      secretKey,
      signature,
      encoder.encode(data)
    );

    if (!isValid) {
      return false;
    }

    const payload = JSON.parse(
      atob(encodedPayload.replace(/-/g, "+").replace(/_/g, "/"))
    );

    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const isDashboardRoute = pathname.startsWith("/dashboard");

  if (!isDashboardRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  const isValidToken = await verifyJWT(token);

  if (!isValidToken) {
    const loginUrl = new URL("/auth/login", request.url);

    loginUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};