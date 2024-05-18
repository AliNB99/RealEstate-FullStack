import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";
import CardDashboard from "@/modules/CardDashboard";
import MainTitle from "@/elements/MainTitle";

async function MyAdvertisementsPage() {
  await connectDB();
  const {
    user: { email },
  } = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    {
      $match: { email },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "myAdvertisements",
      },
    },
  ]);

  return (
    <div className="space-y-8">
      {!user.myAdvertisements.length ? (
        <MainTitle bgColor="bg-blue-100" color="text-blue-500">
          هیچ آگهی ثبت نکرده اید!!
        </MainTitle>
      ) : (
        <div className="space-y-6">
          <MainTitle bgColor="bg-blue-100" color="text-blue-500">
            آگهی های من
          </MainTitle>
          {JSON.parse(JSON.stringify(user.myAdvertisements)).map((item) => (
            <CardDashboard key={item._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyAdvertisementsPage;
