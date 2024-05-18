"use client";

import toast from "react-hot-toast";
import Card from "./Card";
import Link from "next/link";
import { useState } from "react";
import Loader from "@/elements/Loader";
import { useRouter } from "next/navigation";
import FormButton from "@/elements/FormButton";

function CardDashboard({ data, role }) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingPublish, setIsLoadingPublish] = useState(false);
  const router = useRouter();

  const { _id } = data;

  const deleteHandler = async () => {
    setIsLoadingDelete(true);
    const res = await fetch(`/api/profile/delete/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setIsLoadingDelete(false);
    if (!data.error) {
      router.refresh();
      return toast.success(data.message);
    } else {
      return toast.error(data.error);
    }
  };

  const publishedHandler = async () => {
    setIsLoadingPublish(true);
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const data = await res.json();
    setIsLoadingPublish(false);
    if (!data.error) {
      router.refresh();
      return toast.success(data.message);
    } else {
      return toast.error(data.error);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-4 border-2 border-blue-300 rounded-md p-5">
      <div className="w-full md:max-w-64">
        <Card data={data} />
      </div>
      <div className="w-full *:p-2 *:rounded-md *:w-full flex items-end gap-3">
        {role === "ADMIN" ? (
          isLoadingPublish ? (
            <div className="h-10 flex justify-center">
              <Loader color="#F97D3C" />
            </div>
          ) : (
            <FormButton
              bgColor="bg-orange-100"
              color="text-orange-500"
              event={publishedHandler}
            >
              تایید
            </FormButton>
          )
        ) : (
          <Link
            href={`/dashboard/edit/${_id}`}
            className="bg-green-100 text-green-500 font-semibold text-center"
          >
            ویرایش
          </Link>
        )}
        {isLoadingDelete ? (
          <div className="h-10 flex justify-center">
            <Loader color="#EF5A58" />
          </div>
        ) : (
          <FormButton
            bgColor="bg-red-100"
            color="text-red-500"
            event={deleteHandler}
          >
            حذف
          </FormButton>
        )}
      </div>
      <div className="absolute left-7 top-9 md:left-5 md:top-6">
        {!data.published ? (
          <span className="font-medium bg-orange-100 text-orange-500 p-2 rounded-md">
            در انتظار تایید
          </span>
        ) : (
          <span className="font-medium bg-blue-100 text-blue-500 p-2 rounded-md">
            منتشر شد
          </span>
        )}
      </div>
    </div>
  );
}

export default CardDashboard;
