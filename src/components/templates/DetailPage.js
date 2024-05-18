import Title from "@/elements/Title";
import ItemList from "@/modules/ItemList";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "@/modules/ShareButton";
import { icons } from "@/constants/icons";
import { categoryList } from "@/constants/formValue";

function DetailPage({ data }) {
  const {
    title,
    location,
    description,
    amenities,
    rules,
    realEstate,
    phone,
    price,
    category,
    constructionDate,
  } = data;
  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <div className="space-y-8 flex-grow">
        <div className="space-y-2">
          <h1 className="text-blue-600 text-2xl font-semibold">{title}</h1>
          <div className="flex items-center gap-1 text-zinc-500">
            <HiOutlineLocationMarker />
            <span>{location}</span>
          </div>
        </div>
        <div>
          <Title color="text-blue-600">توضیحات</Title>
          <p className="text-justify leading-8">{description}</p>
        </div>
        <div>
          <Title color="text-blue-600">امکانات</Title>
          <ItemList data={amenities} />
        </div>
        <div>
          <Title color="text-blue-600">قوانین</Title>
          <ItemList data={rules} />
        </div>
      </div>
      <sidebar className="space-y-5 min-w-48">
        <div className="shadow-normal p-5 flex flex-col gap-3 rounded-md items-center">
          <SiHomebridge className="text-blue-600" size={40} />
          <p className="font-semibold">املاک {realEstate}</p>
          <div className="flex items-center gap-1 text-zinc-500">
            <AiOutlinePhone />
            <span>{e2p(phone)}</span>
          </div>
        </div>
        <ShareButton />
        <div className="flex flex-col gap-3 p-5 items-center shadow-normal rounded-md">
          <div className="flex items-center gap-2 font-medium">
            <p className="text-blue-600 text-3xl">{icons[category]}</p>
            <p className="font-medium">{categoryList[category]}</p>
          </div>
          <p className="font-medium">{sp(price)} تومان</p>
          <div className="flex items-center gap-1">
            <BiCalendarCheck className="text-color-600" />
            <p className="font-medium">
              {new Date(constructionDate).toLocaleDateString("fa-IR")}
            </p>
          </div>
        </div>
      </sidebar>
    </div>
  );
}

export default DetailPage;
