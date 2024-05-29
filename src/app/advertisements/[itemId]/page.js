import Profile from "@/models/Profile";
import DetailPage from "@/templates/DetailPage";
import connectDB from "@/utils/connectDB";
import { redirect } from "next/dist/server/api-utils";

async function advertisingDetail({ params: { itemId } }) {
  await connectDB();
  const advertising = await Profile.findOne({ _id: itemId });

  if (!advertising) return redirect("/");
  return (
    <div>
      <DetailPage data={advertising} />
    </div>
  );
}

export default advertisingDetail;

export const generateMetadata = async ({ params: { itemId } }) => {
  await connectDB();
  const advertising = await Profile.findOne({ _id: itemId });
  return {
    title: advertising.title,
    description: advertising.description,
    author: { author: advertising.realEstate },
  };
};
