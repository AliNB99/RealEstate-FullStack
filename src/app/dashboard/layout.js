import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import DashboardSidebar from "@/templates/DashboardSidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return redirect("/");
  }

  return (
    <DashboardSidebar email={user.email} role={user.role}>
      {children}
    </DashboardSidebar>
  );
}

export default layout;
