function DashboardPage({ createAt }) {
  return (
    <div className="h-64 flex flex-col justify-between">
      <div className="space-y-3">
        <h1 className="text-2xl text-blue-500 font-semibold">سلام 👋</h1>
        <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      </div>
      <div className="flex gap-2 items-center bg-blue-100 w-fit p-1 rounded-md">
        <span>تاریخ عضویت</span>
        <div className="text-blue-500">
          {new Date(createAt).toLocaleDateString("fa-IR")}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
