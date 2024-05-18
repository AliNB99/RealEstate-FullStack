"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../elements/Loader";
import { useRouter } from "next/navigation";
import FormInput from "../modules/FormInput";
import { useSession } from "next-auth/react";
import FormButton from "../elements/FormButton";

function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const router = useRouter();
  const session = useSession();
  if (session.status === "authenticated") {
    router.push("/");
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setIsLoading(false);
    if (!data.error) {
      router.push("/signin");
      return toast.success(data.message);
    } else {
      return toast.error(data.error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="w-96 sm:shadow-normal px-7 py-10 rounded-md flex flex-col gap-6"
      >
        <h1 className="text-blue-500 text-3xl font-semibold text-center">
          ثبت نام
        </h1>
        <FormInput
          type="text"
          name="email"
          placeholder="لطفا ایمیل خود را وارد نمایید"
          form={form}
          setForm={setForm}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="لطفا رمز عبور خود را وارد نمایید"
          form={form}
          setForm={setForm}
        />
        <FormInput
          type="password"
          name="repeatPassword"
          placeholder="لطفا تکرار رمز عبور خود را وارد نمایید"
          form={form}
          setForm={setForm}
        />
        {isLoading ? (
          <Loader color="#3B82F6" />
        ) : (
          <FormButton bgColor="bg-blue-500" color="text-white">
            ثبت نام
          </FormButton>
        )}
        <div className="flex gap-2">
          <span>آیا قبلا حساب ایجاد کرده اید؟</span>
          <Link
            className="text-blue-500 inline-block hover:underline transition-all"
            href="/signin"
          >
            ورود
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
