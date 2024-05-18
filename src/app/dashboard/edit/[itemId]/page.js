import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";
import FormAdvertisingPage from "src/components/templates/FormAdvertisingPage";

async function EditAdvertising(req) {
  await connectDB();
  const id = req.params.itemId;

  const advertising = await Profile.findOne({ _id: id });

  return (
    <div>
      <FormAdvertisingPage data={JSON.parse(JSON.stringify(advertising))} />
    </div>
  );
}

export default EditAdvertising;
