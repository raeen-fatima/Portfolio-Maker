import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendResetEmail(
  email,
  resetLink
) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: email,

    subject: "Reset Your Password",

    html: `
      <h2>FolioForge Password Reset</h2>

      <p>Click the link below to reset your password:</p>

      <a href="${resetLink}">
        Reset Password
      </a>
    `,
  });
}