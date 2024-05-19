"use client";

import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DesktopDashboardSidebar from "@/modules/DesktopDashboardSidebar";
import MobileDesktopDashboard from "@/modules/MobileDesktopDashboard";
import FindUrlRole from "@/helper/FindUrlRole";

function DashboardSidebar({ children, email, role }) {
  const router = useRouter();
  const url = FindUrlRole();

  const deleteHandler = () => {
    router.push("/");
    signOut();
    return toast.success("خروج از حساب با موفقیت انجام شد");
  };

  return (
    <div className="flex gap-12">
      <DesktopDashboardSidebar
        deleteHandler={deleteHandler}
        role={role}
        email={email}
      />
      {url && (
        <MobileDesktopDashboard
          role={role}
          email={email}
          deleteHandler={deleteHandler}
        />
      )}
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
