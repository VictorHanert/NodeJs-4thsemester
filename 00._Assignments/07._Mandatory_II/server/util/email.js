import { Resend } from "resend";

const resend = new Resend(process.env.KEY_RESEND);

export const resetPasswordEmail = async (to, html) => {
  try {
    const data = await resend.emails.send({
      from: process.env.NOREPLY_EMAIL,
      to: to,
      subject: "Reset your password!",
      html: html,
      headers: {
        "X-Entity-Ref-ID": process.env.KEY_RESEND,
      },
      tags: [
        {
          name: "category",
          value: "reset_password",
        },
      ],
    });
    console.log("Email data: ", data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const welcomeEmail = async (to, html) => {
  try {
    const data = await resend.emails.send({
      from: process.env.NOREPLY_EMAIL,
      to: to,
      subject: "Welcome to our platform!",
      html: html,
      headers: {
        "X-Entity-Ref-ID": process.env.KEY_RESEND,
      },
      tags: [
        {
          name: "category",
          value: "welcome",
        },
      ],
    });
    console.log("Email data: ", data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
