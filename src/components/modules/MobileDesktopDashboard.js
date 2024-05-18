import Link from "next/link";

function MobileDesktopDashboard({ role, email, deleteHandler }) {
  return (
    <sidebar className="z-50 flex sm:hidden justify-center shadow-normal fixed left-0 bottom-0 w-full p-3 bg-blue-100">
      <div className="w-full grid grid-cols-4 gap-5 *:text-center *:p-1 *:rounded-lg *:text-sm *:font-semibold *:text-blue-500 *:border-2 *:border-blue-500">
        <Link className="active:bg-blue-600" href="/dashboard">
          حساب کاربری
        </Link>
        <Link
          className="active:bg-blue-600"
          href="/dashboard/my-advertisements"
        >
          آگهی های من
        </Link>
        <Link className="active:bg-blue-600" href="/dashboard/add">
          ثبت آگهی
        </Link>
        {role === "ADMIN" && (
          <Link className="active:bg-blue-600" href="/admin">
            در انتظار تایید
          </Link>
        )}
      </div>
    </sidebar>
  );
}

export default MobileDesktopDashboard;
