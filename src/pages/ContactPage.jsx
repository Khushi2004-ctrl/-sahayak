import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔹 Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6">
            <span className="text-white font-bold text-sm tracking-wide">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Contact Us
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? We're here to help you anytime.
          </p>
        </div>

        {/* 🔹 Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* 📌 Contact Info */}
          <div className="space-y-8">

            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">

              <h2 className="text-3xl font-black text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Email Support
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      support@sahayak.com
                    </p>
                    <p className="text-sm text-gray-500">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Phone Support
                    </h3>
                    <p className="text-green-600 font-semibold">
                      +91 XXXXX XXXXX
                    </p>
                    <p className="text-sm text-gray-500">
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-700 font-medium">
                      Sahayak Services Pvt. Ltd.<br />
                      Kota, Rajasthan, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-700 font-medium">
                      Mon – Sat: 9:00 AM – 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* 📌 Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">

            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Send Message
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully!");
              }}
              className="space-y-6"
            >

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
