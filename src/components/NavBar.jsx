import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Calendar,
  Award,
  Star,
  Phone,
  User,
  LogOut,
  MoreVertical,
  LayoutDashboard
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = ({
  isLoggedIn,
  currentUser,
  handleLogout,
  setShowLoginModal,
  userRole
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/services", label: "Services", icon: <Briefcase className="w-4 h-4" /> },
    { path: "/booking", label: "Book Now", icon: <Calendar className="w-4 h-4" /> },
    { path: "/become-provider", label: "Become Provider", icon: <Award className="w-4 h-4" /> },
    { path: "/about", label: "About", icon: <Star className="w-4 h-4" /> },
    { path: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> }
  ];

  return (
    <nav className="fixed w-full bg-white/98 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sahayak
              </span>
              <p className="text-xs text-gray-500 font-medium">
                Your Everyday Help
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((tab) => (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  location.pathname === tab.path
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}

            {/* Auth Section */}
            <div className="ml-4 flex items-center gap-3 pl-4 border-l border-gray-200 relative">

              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                    <User className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-900">
                      {currentUser?.name}
                    </span>
                  </div>

                  {/* 3 DOTS */}
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>

                  {/* DROPDOWN */}
                  {openDropdown && (
                    <div className="absolute right-0 top-14 w-52 bg-white shadow-2xl rounded-xl p-2 z-50 border">

                      {userRole === "user" && (
                        <button
                          onClick={() => {
                            navigate("/dashboard");
                            setOpenDropdown(false);
                          }}
                          className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg"
                        >
                          <LayoutDashboard size={16} />
                          User Dashboard
                        </button>
                      )}

                      {userRole === "provider" && (
                        <button
                          onClick={() => {
                            navigate("/provider-dashboard");
                            setOpenDropdown(false);
                          }}
                          className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 rounded-lg"
                        >
                          <Briefcase size={16} />
                          Provider Dashboard
                        </button>
                      )}

                      <button
                        onClick={() => {
                          handleLogout();
                          setOpenDropdown(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm shadow-lg"
                >
                  <User className="w-4 h-4" />
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;