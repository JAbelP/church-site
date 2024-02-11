// [IMPROVE] :  try implementing this https://www.youtube.com/watch?v=dDpZfOQBMaU&ab_channel=LeeRobinson

// import type { NextApiRequest, NextApiResponse } from 'next'
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("handler")
//   const data = req.body
//   const id = await (data)
//   console.log(id)
//   res.status(200).json({ id })
// }

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

async function sendMail(  body) {
  console.log("this is the body",body)
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to:SMTP_EMAIL,
      subject:"New Member",
      text:JSON.stringify(body)
      // html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }

}
export async function POST(request) {
  const body = await request.json();
  console.log(body);
  sendMail(body)
  return NextResponse.json({ status: 200 });
}
