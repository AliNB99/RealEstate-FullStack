import Profile from "@/models/Profile";
import AllAdvertisementsPage from "@/templates/AllAdvertisementsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

async function AllAdvertisements(context) {
  await connectDB();
  const category = context.searchParams.category;
  let advertisements = await Profile.find({ published: true });

  if (!advertisements)
    return (
      <h1 className="text-red-500 bg-red-100 p-2 text-2xl font-semibold text-center">
        مشکلی در سمت سرور پیش آمده است
      </h1>
    );

  if (category) {
    advertisements = advertisements.filter((i) => i.category === category);
  }

  return (
    <div>
      <AllAdvertisementsPage category={category} data={advertisements} />
    </div>
  );
}

export default AllAdvertisements;
