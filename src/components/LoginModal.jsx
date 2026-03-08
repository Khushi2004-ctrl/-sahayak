import React, { useState } from "react";
import { X, User, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react";

const LoginModal = ({
  showLoginModal,
  setShowLoginModal,
  loginForm,
  setLoginForm,
  signupForm,
  setSignupForm,
  handleLogin,
  handleSignup
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  if (!showLoginModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative my-8 animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => {
            setShowLoginModal(false);
            setAuthMode("login");
            setSignupForm({
              name: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              role: ""
            });
            setLoginForm({ email: "", password: "" });
          }}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${
              authMode === "login"
                ? "from-blue-600 to-purple-600"
                : "from-purple-600 to-pink-600"
            } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
          >
            <User className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-black text-gray-900 mb-2">
            {authMode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-600">
            {authMode === "login"
              ? "Login to access your account"
              : "Join Sahayak today"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setAuthMode("login")}
            className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${
              authMode === "login"
                ? "bg-white text-gray-900 shadow-md"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("signup")}
            className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${
              authMode === "signup"
                ? "bg-white text-gray-900 shadow-md"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN FORM */}
        {authMode === "login" && (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all"
            >
              Login
            </button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {authMode === "signup" && (
          <form onSubmit={handleSignup} className="space-y-5">

            <input
              type="text"
              required
              value={signupForm.name}
              onChange={(e) =>
                setSignupForm({ ...signupForm, name: e.target.value })
              }
              placeholder="Full Name"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              required
              value={signupForm.email}
              onChange={(e) =>
                setSignupForm({ ...signupForm, email: e.target.value })
              }
              placeholder="Email"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="tel"
              required
              value={signupForm.phone}
              onChange={(e) =>
                setSignupForm({ ...signupForm, phone: e.target.value })
              }
              placeholder="Phone Number"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
            />

            {/* 🔥 ROLE SELECTION */}
            <select
              required
              value={signupForm.role || ""}
              onChange={(e) =>
                setSignupForm({ ...signupForm, role: e.target.value })
              }
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="provider">Provider</option>
            </select>

            <input
              type="password"
              required
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              placeholder="Password"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="password"
              required
              value={signupForm.confirmPassword}
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  confirmPassword: e.target.value
                })
              }
              placeholder="Confirm Password"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all"
            >
              Create Account
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default LoginModal;