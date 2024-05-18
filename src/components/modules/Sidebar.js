import { categoryList } from "@/constants/formValue";
import { HiFilter } from "react-icons/hi";
import Link from "next/link";
import React from "react";

function Sidebar({ category }) {
  return (
    <sidebar className="absolute md:relative flex items-center justify-center md:justify-start bg-white w-full md:w-60 h-fit space-y-3 shadow-normal p-2 md:p-6 rounded-md">
      <ul className="flex md:flex-col gap-10 md:gap-5">
        <h4 className="font-semibold hidden md:flex">
          <HiFilter className="text-blue-500" />
          دسته بندی
        </h4>
        <li className=" *:hover:font-medium">
          <Link
            className={!category && "text-blue-500 text-xl font-medium"}
            href="/advertisements"
          >
            همه
          </Link>
        </li>
        {Object.keys(categoryList).map((i, index) => (
          <li className="*:hover:font-medium" key={index}>
            <Link
              className={category === i && "text-blue-500 text-xl font-medium"}
              href={{ pathname: "/advertisements", query: { category: i } }}
            >
              {categoryList[i]}
            </Link>
          </li>
        ))}
      </ul>
    </sidebar>
  );
}

export default Sidebar;
