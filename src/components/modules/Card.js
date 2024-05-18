import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { icons } from "@/constants/icons";

function Card({ data }) {
  const { title, price, location, category, _id } = data;
  return (
    <div className="space-y-5 shadow-normal w-full h-fit p-3 rounded-md">
      <div className="bg-blue-100 text-blue-500 w-fit text-3xl p-1 rounded-md">
        {icons[category]}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium">{title}</h1>
        <div className="flex gap-1 text-zinc-400">
          <HiOutlineLocationMarker />
          <span>{location}</span>
        </div>
        <span className="font-medium">
          {sp(price)}
          تومان
        </span>
      </div>
      <div className="flex justify-between items-center text-blue-600 *:font-semibold">
        <Link href={`/advertisements/${_id}`}>مشاهده آگهی</Link>
        <FaArrowLeftLong />
      </div>
    </div>
  );
}

export default Card;
