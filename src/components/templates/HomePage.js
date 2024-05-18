import { FiCircle } from "react-icons/fi";
import { FaHashtag } from "react-icons/fa";
import { categoryList, cities, services } from "@/constants/formValue";
import CardCategory from "@/modules/CardCategory";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-4xl sm:text-5xl text-blue-500 font-bold text-center">
          سامانه خرید و اجاره ملک
        </h1>
        <div>
          <ul className="flex justify-center items-center gap-4">
            {services.map((i, index) => (
              <li
                key={index}
                className="flex items-center text-sm font-medium gap-2 px-3 py-1 bg-blue-100 text-blue-500 rounded-md"
              >
                <FiCircle />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.keys(categoryList).map((i, index) => (
          <CardCategory key={index} name={i} title={categoryList[i]} />
        ))}
      </div>
      <div className=" mt-16">
        <h1 className="text-blue-500 font-semibold text-2xl text-center mb-6">
          شهر های پربازدید
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((i, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-2 bg-blue-200 text-blue-600 font-semibold w-40 py-2 rounded-md"
            >
              <FaHashtag />
              <span>{i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
