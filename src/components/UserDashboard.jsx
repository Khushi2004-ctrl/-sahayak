import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  User,
  LogOut,
  Bell
} from "lucide-react";

const UserDashboard = ({ currentUser, handleLogout }) => {

  const [bookings,setBookings] = useState([]);
  const [loading,setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // ================= FETCH USER BOOKINGS =================

  const fetchBookings = async () => {

    try{

      const res = await fetch(
        "http://localhost:5000/api/bookings/user-bookings",
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      setBookings(data.bookings || []);

      setLoading(false);

    }catch(err){
      console.log("Fetch error:",err);
      setLoading(false);
    }

  };

  useEffect(()=>{
    fetchBookings();
  },[]);

  // ================= STATS =================

  const totalBookings = bookings.length;
  const activeServices = bookings.filter(b=>b.status==="accepted").length;
  const completedServices = bookings.filter(b=>b.status==="completed").length;

  // ================= STATUS COLOR =================

  const getStatusStyle = (status) => {

    switch(status){

      case "accepted":
        return "bg-blue-100 text-blue-600";

      case "pending":
        return "bg-yellow-100 text-yellow-600";

      case "completed":
        return "bg-green-100 text-green-600";

      case "cancelled":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";

    }

  };

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Sidebar */}

      <div className="w-64 bg-white shadow-xl fixed h-full p-6">

        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10">
          Sahayak
        </h2>

        <div className="space-y-6">

          <div className="flex items-center gap-3 text-blue-600 font-semibold">
            <LayoutDashboard size={20}/>
            Dashboard
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Calendar size={20}/>
            My Bookings
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <User size={20}/>
            Profile
          </div>

          <div
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 cursor-pointer"
          >
            <LogOut size={20}/>
            Logout
          </div>

        </div>

      </div>

      {/* Main */}

      <div className="ml-64 flex-1 p-10">

        {/* Top */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-3xl font-black text-gray-900">
              Welcome back, {currentUser?.name || "User"} 👋
            </h1>

            <p className="text-gray-500">
              Here’s what’s happening with your bookings today.
            </p>

          </div>

          <Bell className="text-gray-500"/>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
            <h3>Total Bookings</h3>
            <p className="text-3xl font-black mt-2">{totalBookings}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3>Active Services</h3>
            <p className="text-3xl font-black text-blue-600 mt-2">
              {activeServices}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3>Completed Services</h3>
            <p className="text-3xl font-black text-green-600 mt-2">
              {completedServices}
            </p>
          </div>

        </div>

        {/* Booking List */}

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-bold mb-6">
            My Bookings
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : bookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (

            bookings.map((booking)=>(
              
              <div
                key={booking._id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >

                <div>

                  <h3 className="font-semibold">
                    {booking.service}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {booking.providerId?.name} • {new Date(booking.bookingDate).toDateString()}
                  </p>

                </div>

                <span
                  className={`px-4 py-1 text-sm rounded-full font-semibold ${getStatusStyle(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;