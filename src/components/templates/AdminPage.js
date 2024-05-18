import MainTitle from "@/elements/MainTitle";
import CardDashboard from "@/modules/CardDashboard";

async function AdminPage({ advertisements, role }) {
  return (
    <div>
      {!advertisements.length ? (
        <MainTitle bgColor="bg-blue-100" color="text-blue-500">
          هیچ آگهی در انتظار تایید نیست!!
        </MainTitle>
      ) : (
        <div className="space-y-6">
          <MainTitle bgColor="bg-blue-100" color="text-blue-500">
            در انتظار تایید...
          </MainTitle>
          {advertisements.map((data) => (
            <CardDashboard role={role} key={data._id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
