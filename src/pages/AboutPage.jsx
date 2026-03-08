import React from 'react';
import { Star, Award, Users, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <span className="text-white font-bold text-sm tracking-wide">OUR STORY</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About Sahayak
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light italic">
            Supporting Your Daily Life Needs
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-gray-100 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-900">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Sahayak is built with the vision of simplifying daily life by providing instant access to trusted local service providers. From household repairs to personal assistance and emergency help, our platform ensures that no one struggles to find reliable support when they need it most.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to empower local workers with job opportunities while delivering convenience and transparency to users.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black mb-4">Our Vision</h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              To become India's most trusted hyperlocal service platform.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black mb-4">Our Mission</h3>
            <p className="text-xl text-purple-100 leading-relaxed">
              Connecting people with skilled help — anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { number: '50,000+', label: 'Happy Customers', color: 'from-blue-500 to-blue-600' },
            { number: '2,000+', label: 'Service Providers', color: 'from-purple-500 to-purple-600' },
            { number: '100+', label: 'Cities Covered', color: 'from-pink-500 to-pink-600' },
            { number: '4.8/5', label: 'Average Rating', color: 'from-orange-500 to-red-500' }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white text-center shadow-xl transform hover:scale-110 transition-all`}>
              <div className="text-5xl font-black mb-2">{stat.number}</div>
              <div className="text-lg font-semibold opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-200">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Trust & Safety',
                desc: 'Every provider undergoes rigorous verification to ensure your safety and peace of mind',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: 'Quality First',
                desc: 'We maintain high standards through regular quality checks and customer feedback',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Community Focus',
                desc: 'Supporting local workers while serving community needs creates lasting impact',
                color: 'from-pink-500 to-pink-600'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;