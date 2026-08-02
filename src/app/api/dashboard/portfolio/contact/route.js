import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      name,
      email,
      message,
      ownerEmail,
    } = await request.json();

    if (
      !name ||
      !email ||
      !message ||
      !ownerEmail
    ) {
      return Response.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

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

      replyTo: email,

      subject: `New Portfolio Message from ${name}`,

      html: `
        <div style="font-family:sans-serif">
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
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