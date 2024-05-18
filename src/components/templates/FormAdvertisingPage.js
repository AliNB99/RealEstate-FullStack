"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/elements/Loader";
import FormList from "../modules/FormList";
import { useParams, useRouter } from "next/navigation";
import FormInput from "../modules/FormInput";
import MainTitle from "@/elements/MainTitle";
import FormButton from "@/elements/FormButton";
import RadioButton from "../modules/RadioButton";
import CustomDatePicker from "../modules/CustomDatePicker";
import { categoryList, formValue } from "@/constants/formValue";

function FormAdvertisingPage({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    phone: "",
    realEstate: "",
    category: "",
    constructionDate: new Date(),
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  const router = useRouter();
  const { itemId } = useParams();

  const addAdvertisingHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setIsLoading(false);
    if (!data.error) {
      setForm({
        title: "",
        description: "",
        location: "",
        price: "",
        phone: "",
        realEstate: "",
        category: "",
        constructionDate: new Date(),
        amenities: [],
        rules: [],
      });
      router.refresh();
      return toast.success("آگهی شما ثبت شد و منتظر تایید آدمین می باشد");
    } else {
      return toast.error(data.error);
    }
  };

  const editAdvertisingHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/profile`, {
      method: "PATCH",
      body: JSON.stringify({ ...form, _id: itemId }),
      headers: { "Content-Type": "application/json" },
    });
    setIsLoading(false);
    const data = await res.json();
    if (!data.error) {
      toast.success(data.message);
      router.refresh();
      return router.push("/dashboard/my-advertisements");
    } else {
      return toast.error(data.error);
    }
  };

  return (
    <form className="space-y-8 w-full">
      {data ? (
        <MainTitle color="text-orange-500" bgColor="bg-orange-100">
          ویرایش آگهی
        </MainTitle>
      ) : (
        <MainTitle color="text-blue-500" bgColor="bg-blue-100">
          ثبت آگهی
        </MainTitle>
      )}
      {formValue.map((item) => (
        <FormInput
          key={item.id}
          title={item.title}
          textarea={item.textarea}
          type={item.type}
          name={item.name}
          form={form}
          setForm={setForm}
        />
      ))}
      <div className="grid grid-cols-4 sm:grid-cols-2 lg:flex gap-1 sm:gap-3">
        {Object.keys(categoryList).map((item, index) => (
          <RadioButton
            key={index}
            name="category"
            value={item}
            form={form}
            setForm={setForm}
          >
            {categoryList[item]}
          </RadioButton>
        ))}
      </div>
      <FormList
        title="امکانات رفاهی"
        form={form}
        setForm={setForm}
        name="amenities"
      />
      <FormList title="قوانین" form={form} setForm={setForm} name="rules" />
      <CustomDatePicker form={form} setForm={setForm} title="تاریخ ساخت" />
      {isLoading ? (
        <Loader color="#CECFD0" />
      ) : data ? (
        <FormButton
          event={(e) => editAdvertisingHandler(e)}
          type="submit"
          color="text-white"
          bgColor="bg-orange-400"
        >
          ویرایش آگهی
        </FormButton>
      ) : (
        <FormButton
          event={(e) => addAdvertisingHandler(e)}
          type="submit"
          color="text-white"
          bgColor="bg-blue-500"
        >
          ثبت آگهی
        </FormButton>
      )}
    </form>
  );
}

export default FormAdvertisingPage;
