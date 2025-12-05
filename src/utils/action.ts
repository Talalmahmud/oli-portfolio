"use server";

import nodemailer from "nodemailer";

export const sendEmail = async ({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: email, // sender address
      to: ["mahmudtalal2@gmail.com", "talalmahmud.duet@gmail.com"], // list of receivers
      subject: `Mr. ${name} want to contact with you. `, // Subject line
      text: message, // plain text body
      html: `<p>${message}</p>`, // html body
    });
    if (info) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
