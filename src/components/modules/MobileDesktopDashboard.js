import Link from "next/link";
import { PiUserList } from "react-icons/pi";
import { LuListRestart } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";

function MobileDesktopDashboard({ role, deleteHandler }) {
  return (
    <sidebar className="z-50 flex sm:hidden justify-center shadow-normal fixed left-0 bottom-0 w-full p-1 bg-white">
      <div
        className={`w-full grid ${
          role === "ADMIN" ? "grid-cols-5" : "grid-cols-4"
        } gap-5 *:text-center *:p-1 *:rounded-lg *:text-sm *:font-semibold *:text-blue-500`}
      >
        <Link className="flex items-center justify-center" href="/dashboard">
          <HiOutlineUserCircle size={30} />
        </Link>
        <Link
          className="flex items-center justify-center"
          href="/dashboard/my-advertisements"
        >
          <PiUserList size={30} />
        </Link>
        <Link
          className="flex items-center justify-center"
          href="/dashboard/add"
        >
          <MdOutlineAddBox size={30} />
        </Link>
        {role === "ADMIN" && (
          <Link className="flex items-center justify-center" href="/admin">
            <LuListRestart size={30} />
          </Link>
        )}
        <button
          onClick={deleteHandler}
          className="text-red-500 flex items-center justify-center gap-2 *:font-medium"
        >
          <AiOutlinePoweroff size={30} className="text-red-500" />
        </button>
      </div>
    </sidebar>
  );
}

export default MobileDesktopDashboard;
