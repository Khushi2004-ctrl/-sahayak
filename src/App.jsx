import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BookingPage from "./pages/BookingPage";
import ProviderPage from "./pages/ProviderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BenefitsPage from "./pages/BenefitsPage";
import FAQPage from "./pages/FAQPage";
import UserDashboard from "./components/UserDashboard";
import ProviderDashboard from "./components/ProviderDashboard";
import ChatBot from "./components/ChatBot";
const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: ""
  });

  // 🔐 Restore Session (TOKEN BASED)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("sahayakUser");

    if (token && savedUser) {
      const parsed = JSON.parse(savedUser);
      setCurrentUser(parsed);
      setUserRole(parsed.role);
      setIsLoggedIn(true);
    } else{
      setIsLoggedIn(false);
    }
  }, []);

  // 🔹 LOGIN (REAL BACKEND)
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginForm)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("sahayakUser", JSON.stringify(data.user));

      setCurrentUser(data.user);
      setUserRole(data.user.role);
      setIsLoggedIn(true);
      setShowLoginModal(false);

    } catch (error) {
      console.log("Login error:", error);
      alert("Server error");
    }
  };

  // 🔹 SIGNUP (REAL BACKEND)
  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        //body: JSON.stringify(signupForm)
         body: JSON.stringify({
    name: signupForm.name,
    email: signupForm.email,
    phone: signupForm.phone,
    password: signupForm.password,
    role: signupForm.role
  })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || data.error || "Something went wrong");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("sahayakUser", JSON.stringify(data.user));

      setCurrentUser(data.user);
      setUserRole(data.user.role);
      setIsLoggedIn(true);
      setShowLoginModal(false);

    } catch (error) {
      console.log("Signup error:", error);
      alert("Server error");
    }
  };

  // 🔹 LOGOUT
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUserRole(null);
    localStorage.removeItem("sahayakUser");
    localStorage.removeItem("token");
  };

  return (
    <div className="min-h-screen bg-white">

      {!isDashboard && (
        <NavBar
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          handleLogout={handleLogout}
          setShowLoginModal={setShowLoginModal}
          userRole={userRole}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <ServicesPage />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/become-provider"
          element={
            <ProtectedRoute>
              <ProviderPage />
            </ProtectedRoute>
          }
        />

        <Route path="/benefits" element={<BenefitsPage />} />
<Route path="/faq" element={<FAQPage />} />
      

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {userRole === "provider" ? (
                <ProviderDashboard
                  currentUser={currentUser}
                  handleLogout={handleLogout}
                />
              ) : (
                <UserDashboard
                  currentUser={currentUser}
                  handleLogout={handleLogout}
                />
              )}
            </ProtectedRoute>
          }
        />
        <Route
  path="/provider-dashboard"
  element={
    <ProtectedRoute>
      <ProviderDashboard
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
    </ProtectedRoute>
  }
/>
      </Routes>
      <ChatBot />
      

      {!isDashboard && <Footer />}

      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        signupForm={signupForm}
        setSignupForm={setSignupForm}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </div>
  );
};

export default App;