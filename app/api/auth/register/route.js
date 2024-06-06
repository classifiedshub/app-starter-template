// import { Resend } from "resend";
import db from "@/lib/database/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
// import base64url from "base64url";

export async function POST(req, res) {
  try {
    // const resend = new Resend(process.env.RESEND_API_KEY);
    const {
      firstName,
      lastName,
      email,
      password,
      // role
    } = await req.json();
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        // role,
      },
    });
    console.log(newUser);
     // Generate token
    //  const rawToken = uuidv4();
    //  console.log(rawToken);
    //  const token = base64url.encode(rawToken);
 
    //  const verificationCode = generateVerificationCode();
    //  const expiryTime = new Date(Date.now() + 3600 * 1000); 
    //  const newToken = await db.verificationToken.create({
    //   data: {
    //     token,
    //     verificationCode,
    //     expiryTime,
    //     userId: newUser.id,
    //   },
    // });
    // console.log(newToken);

    // SEND EMAIL IF ROLE = VENDOR
    // if (role === "VENDOR") {
    //   const userId = newUser.id;
    //   const redirectUrl = `onboarding/${userId}?token=${token}`;
    //   const sendMail = await resend.emails.send({
    //     from: "ClassifiedsHub <info@classifiedshub.co.ke>",
    //     to: email,
    //     subject: "Verify Your Email Address - ClassifiedsHub",
    //     react: EmailConfirmation({ firstName, redirectUrl, verificationCode }),
    //   });
    //   console.log(sendMail);
    // }
    return NextResponse.json(
      {
        data: newUser,
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {}
}
