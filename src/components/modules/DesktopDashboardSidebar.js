import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

function DesktopDashboardSidebar({ deleteHandler, role, email }) {
  return (
    <sidebar className="hidden sm:block shadow-normal bg-white w-64 h-fit p-5 rounded-md space-y-8">
      <div className="flex flex-col items-center gap-3 border-b-2 py-2">
        <FaRegUserCircle size={40} className="text-blue-600" />
        <div className="text-center text-zinc-400">
          {role === "ADMIN" && <span>ادمین</span>}
          <p>{email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 *:text-black *:font-medium">
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-advertisements">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" && <Link href="/admin">در انتظار تایید</Link>}
      </div>
      <button
        onClick={deleteHandler}
        className="text-red-500 flex items-center gap-2 *:font-medium"
      >
        <LuLogOut />
        <span>خروج</span>
      </button>
    </sidebar>
  );
}

export default DesktopDashboardSidebar;
