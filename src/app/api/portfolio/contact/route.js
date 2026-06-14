import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      name,
      email,
      message,
      ownerEmail,
    } = await request.json();

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family:sans-serif">
          <h2>New Portfolio Inquiry</h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    const portfolio =
      await Portfolio.findOne({
        user: decoded.userId,
      });

    if (!portfolio) {
      return Response.json(
        {
          contact: null,
        },
        {
          status: 200,
        }
      );
    }

    return Response.json({
      contact:
        portfolio.contact || {},
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    const {
      email,
      phone,
      location,
    } = await request.json();

    const portfolio =
      await Portfolio.findOne({
        user: decoded.userId,
      });

    if (!portfolio) {
      return Response.json(
        {
          message:
            "Portfolio not found",
        },
        {
          status: 404,
        }
      );
    }

    portfolio.contact = {
      email,
      phone,
      location,
    };

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Contact information updated successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}