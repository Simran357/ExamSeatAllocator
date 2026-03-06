import { Outlet } from "react-router";
import Adminlayout from "./Header";

export default function DashboardLayout() {
  return (
    <Adminlayout>
      <Outlet />
    </Adminlayout>
  );
}