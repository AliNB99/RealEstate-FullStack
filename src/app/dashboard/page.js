import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardPage from "@/templates/DashboardPage";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  return <DashboardPage createAt={user.createAt} />;
}

export default Dashboard;
