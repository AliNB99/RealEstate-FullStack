import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";
import MyAdvertisementsPage from "src/components/templates/MyAdvertisementsPage";

async function MyAdvertisements() {
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
    <div>
      <MyAdvertisementsPage user={user} />
    </div>
  );
}

export default MyAdvertisements;
