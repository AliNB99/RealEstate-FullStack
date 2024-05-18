import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashingPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password, repeatPassword } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "لطفا اطلاعات معتبر وارد کنید",
        status: 422,
      });
    }

    if (password !== repeatPassword) {
      return NextResponse.json({
        error: "تکرار رمز با رمز اصلی مطابقت ندارد",
        status: 422,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        error: "این حساب کاربری وجود دارد",
        status: 422,
      });
    }

    const hashedPassword = await hashingPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "حساب کاربری ایجاد شد", status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
