import React from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaUser } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
const classLink =
  "flex items-center hover:bg-neutral-700 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";



function AdminSidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-4 flex flex-col text-white">
    {/* Profile */}
    <div className="flex flex-col items-center gap-2 py-4">
      <FaUser fontSize={48} />
      <span className="text-lg ">Profile</span>
    </div>

    {/* Menu Link */}
    <div className="flex-1 py-4">
      <Link className={classLink} to={"/admin"}>
        <span className="text-xl">
          <MdDashboard />
        </span>
        Dashboard
      </Link>

      <Link className={classLink} to="/admin/manage">
        <span className="text-xl">
          <MdManageAccounts />
        </span>
        Manage User
      </Link>

      {/* <Link className={classLink} to="/admin/landmark">
        <span className="text-xl">
          <FaMapMarkedAlt />
        </span>
        Landmark
      </Link> */}

      <Link className={classLink} to={"#"}>
        <span className="text-xl">
          <FaChartPie />
        </span>
        Menu...
      </Link>
    </div>

    {/* Bottom Menu */}
    <div>
      <Link className={classLink} to={"#"}>
        <span className="text-xl">
          <IoSettingsSharp />
        </span>
        Setting
      </Link>

      <Link className={classLink} to={"#"}>
        <span className="text-xl">
          <IoLogOut />
        </span>
        Logout
      </Link>
    </div>
  </div>
  )
}

export default AdminSidebar