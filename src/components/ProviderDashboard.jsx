import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  LogOut,
  Star
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ProviderDashboard = ({ currentUser, handleLogout }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // ================= FETCH PROVIDER BOOKINGS =================
  const fetchJobs = async () => {
    try {

      const res = await fetch("http://localhost:5000/api/provider/bookings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
       console.log("Bookings:", data);

      setJobs(data.bookings || []);
      setLoading(false);

    } catch (err) {
      console.log("Fetch error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ================= UPDATE STATUS =================
  const updateStatus = async (id, status) => {
    try {

      await fetch(`http://localhost:5000/api/provider/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      fetchJobs();

    } catch (err) {
      console.log("Status update error:", err);
    }
  };

  // ================= CALCULATIONS =================
  const totalEarnings = jobs
    .filter(j => j.status === "completed")
    .reduce((sum, j) => sum + j.charges, 0);

  const activeJobs = jobs.filter(j => j.status === "accepted").length;
  const completedJobs = jobs.filter(j => j.status === "completed").length;

  const monthlyData = [
    { month: "Jan", earnings: 2000 },
    { month: "Feb", earnings: 3500 },
    { month: "Mar", earnings: totalEarnings }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "accepted":
        return "bg-blue-100 text-blue-600";
      case "pending":
        return "bg-yellow-100 text-yellow-600";
      case "completed":
        return "bg-green-100 text-green-600";
      case "rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-xl fixed h-full p-6">
        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10">
          Sahayak
        </h2>

        <div className="space-y-6">

          <div className="flex items-center gap-3 text-blue-600 font-semibold">
            <LayoutDashboard size={20} />
            Dashboard
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Briefcase size={20} />
            My Jobs
          </div>

          <div
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 cursor-pointer"
          >
            <LogOut size={20} />
            Logout
          </div>

        </div>
      </div>

      {/* MAIN */}
      <div className="ml-64 flex-1 p-10">

        <h1 className="text-3xl font-black text-gray-900 mb-6">
          Welcome, {currentUser?.name || "Provider"} 👋
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
            <h3>Total Earnings</h3>
            <p className="text-3xl font-black mt-2">₹{totalEarnings}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3>Active Jobs</h3>
            <p className="text-3xl font-black text-blue-600 mt-2">{activeJobs}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3>Completed</h3>
            <p className="text-3xl font-black text-green-600 mt-2">{completedJobs}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3>Rating</h3>
            <p className="text-3xl font-black text-yellow-500 mt-2 flex items-center gap-2">
              4.8 <Star size={20} />
            </p>
          </div>

        </div>

        {/* GRAPH */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-xl font-bold mb-4">Monthly Earnings</h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#6366f1" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* JOB LIST */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-bold mb-6">Job Requests</h2>

          {loading ? (
            <p>Loading...</p>
          ) : jobs.length === 0 ? (
            <p>No jobs yet</p>
          ) : (
            jobs.map((job) => (

              <div key={job._id} className="flex justify-between items-center border-b pb-4 mb-4">

                <div>
                  <h3 className="font-semibold">{job.service}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(job.bookingDate).toDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-4">

                  <p className="font-bold">₹{job.charges}</p>

                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(job.status)}`}>
                    {job.status}
                  </span>

                  {job.status === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(job._id,"accepted")}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() => updateStatus(job._id,"rejected")}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {job.status === "accepted" && (
                    <button
                      onClick={() => updateStatus(job._id,"completed")}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg"
                    >
                      Complete
                    </button>
                  )}

                </div>

              </div>

            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default ProviderDashboard;