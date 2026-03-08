import React, { useState } from "react";
import { MoreVertical, LogOut, User, Settings } from "lucide-react";

const DashboardLayout = ({
  children,
  currentUser,
  handleLogout,
  sidebarContent,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl p-6 hidden md:block">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="mt-4 font-bold text-lg">{currentUser?.name}</h2>
          <p className="text-sm text-gray-500">{currentUser?.email}</p>
        </div>

        {sidebarContent}
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>

          <div className="relative">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <MoreVertical />
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl p-2">
                <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <User size={16} /> Profile
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <Settings size={16} /> Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-3 py-2 text-red-600 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;