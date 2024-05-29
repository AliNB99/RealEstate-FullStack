import React from "react";
import CardDashboard from "@/modules/CardDashboard";
import MainTitle from "@/elements/MainTitle";

async function MyAdvertisementsPage({user}) {
  

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
