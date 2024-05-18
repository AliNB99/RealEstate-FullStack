import Profile from "@/models/Profile";
import DetailPage from "@/templates/DetailPage";
import connectDB from "@/utils/connectDB";
import { redirect } from "next/dist/server/api-utils";

async function advertisingDetail(context) {
  await connectDB();
  const id = context.params.itemId;
  const advertising = await Profile.findOne({ _id: id });

  if (!advertising) return redirect("/");
  return (
    <div>
      <DetailPage data={advertising} />
    </div>
  );
}

export default advertisingDetail;
