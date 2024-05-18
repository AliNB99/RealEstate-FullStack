import MainTitle from "@/elements/MainTitle";
import Card from "@/modules/Card";
import Sidebar from "@/modules/Sidebar";

async function AllAdvertisementsPage({ data, category }) {
  return (
    <div>
      <div className="flex gap-8">
        <Sidebar category={category} />

        {!data.length ? (
          <MainTitle color="text-red-500" bgColor="bg-red-100">
            هیچ آگهی پیدا نشد!!
          </MainTitle>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((i, index) => (
              <Card key={index} data={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllAdvertisementsPage;
