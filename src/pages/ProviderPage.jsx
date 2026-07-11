import React, { useState } from 'react';
import { 
  Award, ArrowRight, Clock, TrendingUp, Users, Shield, 
  AlertCircle, Upload, Home, Car
} from 'lucide-react';

const ProviderPage = () => {
  const [providerForm, setProviderForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: '',
    experience: '',
    location: '',
    idProof: null
  });

  const serviceCategories = {
    home: {
      title: 'Home Services',
      icon: <Home className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    vehicle: {
      title: 'Vehicle Services',
      icon: <Car className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    domestic: {
      title: 'Domestic Help',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    transport: {
      title: 'Driver & Transport',
      icon: <Car className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    },
    emergency: {
      title: 'Emergency Services',
      icon: <AlertCircle className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted! We will review your application and get back to you within 24 hours.');
    setProviderForm({
      name: '',
      phone: '',
      email: '',
      serviceCategory: '',
      experience: '',
      location: '',
      idProof: null
    });
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full mb-6">
            <span className="text-white font-bold text-sm tracking-wide">EARN MORE WITH US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Join Sahayak as a <br/>
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Service Provider
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn more by offering your services to customers in your area. Sahayak helps skilled professionals connect with genuine customers without middlemen.
          </p>
        </div>

        {/* Why Join Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Why Join Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: 'Flexible Hours',
                  desc: 'Work on your own schedule',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'More Earnings',
                  desc: 'Increase your monthly income',
                  color: 'from-green-500 to-green-600'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Verified Leads',
                  desc: 'Get genuine customer requests',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Secure Payments',
                  desc: 'Guaranteed payment on time',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-7 h-7 bg-gradient-to-br from-orange-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={providerForm.name}
                    onChange={(e) => setProviderForm({ ...providerForm, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={providerForm.phone}
                    onChange={(e) => setProviderForm({ ...providerForm, phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email ID *</label>
                  <input
                    type="email"
                    required
                    value={providerForm.email}
                    onChange={(e) => setProviderForm({ ...providerForm, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-7 h-7 bg-gradient-to-br from-orange-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                Professional Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Category *</label>
                  <select
                    required
                    value={providerForm.serviceCategory}
                    onChange={(e) => setProviderForm({ ...providerForm, serviceCategory: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                  >
                    <option value="">Choose your service</option>
                    {Object.values(serviceCategories).map((category, idx) => (
                      <option key={idx} value={category.title}>{category.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Experience (Years) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={providerForm.experience}
                    onChange={(e) => setProviderForm({ ...providerForm, experience: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                    placeholder="e.g., 5"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Location *</label>
                  <input
                    type="text"
                    required
                    value={providerForm.location}
                    onChange={(e) => setProviderForm({ ...providerForm, location: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                    placeholder="Enter your service area (city/locality)"
                  />
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-7 h-7 bg-gradient-to-br from-orange-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                Documents
              </h3>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">ID Proof Upload *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-500 transition-all cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">Aadhaar Card, PAN Card, or Driving License (PDF, JPG, PNG - Max 5MB)</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setProviderForm({ ...providerForm, idProof: e.target.files[0] })}
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 border-2 border-orange-200">
              <p className="text-sm text-gray-700 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> All providers go through a verification process before activation. We will review your application and contact you within 24 hours.
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-xl font-black text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <Award className="w-6 h-6" />
              Register as Provider
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>
        </div>

        {/* Application Process */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-black mb-6 text-center">Application Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Submit Form', desc: 'Fill and submit registration form' },
              { step: '02', title: 'Verification', desc: 'We verify your documents & skills' },
              { step: '03', title: 'Start Earning', desc: 'Get activated and start receiving bookings' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white text-orange-600 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-orange-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderPage;