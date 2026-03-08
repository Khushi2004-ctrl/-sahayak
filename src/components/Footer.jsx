import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div>
                <span className="text-2xl font-black">Sahayak</span>
                <p className="text-xs text-gray-400">Your Everyday Help</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Supporting Your Daily Life Needs with trusted professionals at your doorstep.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social, idx) => (
                <button key={idx} className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                  <span className="text-xs font-bold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
  <li>
    <Link to="/" className="hover:text-blue-400">Home</Link>
  </li>

  <li>
    <Link to="/services" className="hover:text-blue-400">Services</Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-blue-400">About</Link>
  </li>
</ul>
            
          </div>

          {/* For Providers */}
          <div>
            <h3 className="text-lg font-bold mb-6">For Providers</h3>
            <ul className="space-y-3">

  <li>
    <Link to="/become-provider" className="hover:text-blue-400">
      Register as Provider
    </Link>
  </li>

  <li>
    <Link to="/benefits" className="hover:text-blue-400">
      Benefits
    </Link>
  </li>

  <li>
    <Link to="/faq" className="hover:text-blue-400">
      FAQ
    </Link>
  </li>

</ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="font-medium">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="font-medium">support@sahayak.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="font-medium">Kota, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Sahayak Services Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Refund Policy</a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 italic font-light">
            Sahayak — Supporting Your Daily Life Needs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;