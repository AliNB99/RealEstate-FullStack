"use client";

import Link from "next/link";
import { MdLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useSession } from "next-auth/react";
import findUrlRole from "@/helper/FindUrlRole";

function Header() {
  const session = useSession();
  const url = findUrlRole();

  return (
    <header className="bg-blue-500 text-white flex items-center justify-between h-14 px-5 rounded-md my-2 mx-4">
      <div className="flex gap-5 *:font-medium">
        <Link href="/">صفحه اصلی</Link>
        <Link href="/advertisements">آگهی ها</Link>
      </div>
      <div className="flex gap-3">
        {session.status === "authenticated" ? (
          <Link
            className={`${
              url ? "hidden" : "flex"
            } md:flex items-center gap-2 border-2 py-2 px-4 rounded-full hover:shadow-sm hover:shadow-cyan-50 transition-all`}
            href="/dashboard"
          >
            <FaUser size={20} />
          </Link>
        ) : (
          <Link
            className="flex items-center gap-1 border-2 px-4 py-1 hover:shadow-sm hover:shadow-cyan-50 rounded-full"
            href="/signin"
          >
            <MdLogin size={20} />
            ورود
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
