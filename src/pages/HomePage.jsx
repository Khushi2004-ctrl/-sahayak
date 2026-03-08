import React from 'react';
import { useNavigate } from "react-router-dom";
import { 
  Calendar, ArrowRight, Home, Wrench, Utensils, Lightbulb, 
  Droplet, BadgeCheck, DollarSign, Zap, AlertCircle, Navigation, 
  Star, Users, ChevronRight, CheckCircle, Sparkles, Award, Briefcase, 
  MapPin, Clock, Shield
} from 'lucide-react';

import mechanicImg from "../assets/services/mechanic.jpg";
import cookImg from "../assets/services/cook.jpg";
import electricianImg from "../assets/services/electrician.jpg";
import plumberImg from "../assets/services/plumber.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20">
      {/* Hero Section - Unique Design */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6 border border-gray-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Everyday Help, Just One Click Away
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Welcome to{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Sahayak
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 8 150 0 200 4" stroke="url(#gradient)" strokeWidth="3"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#3B82F6"/>
                        <stop offset="50%" stopColor="#9333EA"/>
                        <stop offset="100%" stopColor="#EC4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Sahayak is a <span className="font-bold text-blue-600">hyperlocal multi-service booking platform</span> designed to fulfill your daily needs quickly and reliably.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Whether you need a mechanic in an emergency, a professional cook for your home, or a skilled electrician, Sahayak connects you with trusted service providers near you in minutes.
              </p>

              <div className="flex items-center gap-3 mb-8 p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <p className="text-gray-700 font-medium">
                  Book verified professionals anytime, anywhere — fast, affordable, and hassle-free.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
  onClick={() => navigate('/services')}
  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all flex items-center justify-center gap-3"
>
  <Calendar className="w-5 h-5" />
  Book a Service
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
              <button
  onClick={() => navigate('/become-provider')}
  className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-xl font-bold text-lg hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-3 shadow-lg"
>
  <Award className="w-5 h-5" />
  Become a Provider
  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
              </div>

              <div className="flex items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">2000+</div>
                  <div className="text-sm text-gray-600">Service Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-pink-600">4.8★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

           <div className="mt-10 lg:mt-0">
              <div className="relative">
  <div className="grid grid-cols-2 gap-6">

    {[
      {
        title: "Mechanic",
        img: mechanicImg,
      },
      {
        title: "Cook",
        img: cookImg,
      },
      {
        title: "Electrician",
        img: electricianImg,
      },
      {
        title: "Plumber",
        img: plumberImg,
      },
    ].map((service, idx) => (

      <div
        key={idx}
        className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all cursor-pointer border border-gray-100"
      >

        {/* IMAGE */}
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-32 object-cover rounded-xl mb-4"
        />

        {/* TITLE */}
        <h3 className="text-xl font-bold text-gray-900">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          Available 24/7
        </p>

      </div>

    ))}

  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sahayak - Card Grid Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-bold text-sm">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Sahayak?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience premium service quality with unmatched convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BadgeCheck className="w-12 h-12" />,
                title: 'Verified Professionals',
                desc: 'Every service provider is thoroughly background-checked and skill-verified',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: <DollarSign className="w-12 h-12" />,
                title: 'Transparent Pricing',
                desc: 'Clear upfront costs with no hidden charges or surprise fees',
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Quick Response Time',
                desc: 'Get matched with nearby professionals within minutes',
                color: 'from-yellow-500 to-orange-500',
                bgColor: 'bg-yellow-50'
              },
              {
                icon: <AlertCircle className="w-12 h-12" />,
                title: 'Emergency Services Available',
                desc: '24/7 availability for urgent requirements and emergencies',
                color: 'from-red-500 to-pink-500',
                bgColor: 'bg-red-50'
              },
              {
                icon: <Navigation className="w-12 h-12" />,
                title: 'Real-Time Booking Updates',
                desc: 'Track your service status live from booking to completion',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'bg-purple-50'
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: 'Quality Guaranteed',
                desc: 'Rated professionals with customer reviews and ratings',
                color: 'from-indigo-500 to-purple-500',
                bgColor: 'bg-indigo-50'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group relative p-8 ${feature.bgColor} rounded-2xl border-2 border-transparent hover:border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-purple-700 font-bold text-sm">SIMPLE PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Get started in just 5 simple steps</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform -translate-y-1/2 rounded-full"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                {
                  num: '01',
                  title: 'Select Service',
                  desc: 'Choose from our wide range of services',
                  icon: <Briefcase className="w-6 h-6" />,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  num: '02',
                  title: 'Set Location',
                  desc: 'Enter your area to find nearby providers',
                  icon: <MapPin className="w-6 h-6" />,
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  num: '03',
                  title: 'Get Matched',
                  desc: 'We connect you with verified professionals',
                  icon: <Users className="w-6 h-6" />,
                  color: 'from-pink-500 to-pink-600'
                },
                {
                  num: '04',
                  title: 'Book Instantly',
                  desc: 'Confirm your booking in seconds',
                  icon: <CheckCircle className="w-6 h-6" />,
                  color: 'from-green-500 to-green-600'
                },
                {
                  num: '05',
                  title: 'Track Status',
                  desc: 'Monitor your service in real-time',
                  icon: <Navigation className="w-6 h-6" />,
                  color: 'from-orange-500 to-red-500'
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex flex-col items-center justify-center shadow-2xl relative z-10 border-4 border-white`}>
                        {step.icon}
                        <span className="text-xs font-bold text-white mt-1">{step.num}</span>
                      </div>
                      {idx < 4 && (
                        <ChevronRight className="hidden lg:block absolute -right-16 top-1/2 transform -translate-y-1/2 w-10 h-10 text-gray-400 z-0" />
                      )}
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-white/90 mb-10 font-light">
            Join thousands of satisfied customers using Sahayak today
          </p>
          <button
  onClick={() => navigate('/services')}
  className="px-12 py-5 bg-white text-blue-600 rounded-xl font-black text-xl hover:bg-gray-100 shadow-2xl transform hover:scale-110 transition-all inline-flex items-center gap-3"
>
  <Calendar className="w-6 h-6" />
  Book Your First Service
  <ArrowRight className="w-6 h-6" />
</button>
        </div>
      </section>

      {/* CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HomePage; 