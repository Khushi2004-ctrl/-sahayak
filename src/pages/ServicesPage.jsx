import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";   // ✅ ADDED
import { 
  ArrowRight, Star, BadgeCheck, DollarSign, Home, Wrench, 
  Utensils, Lightbulb, Droplet, Briefcase, Users, 
  PaintBucket, Wind, Car, Trash2, Baby, HeartPulse, Truck, 
  AlertCircle, Navigation, X, MapPin, Phone, CheckCircle, Calendar, Clock, ChevronDown
} from 'lucide-react';

const ServicesPage = ({ setBookingForm }) => {   // ❌ removed setActiveTab
  const navigate = useNavigate();                // ✅ ADDED

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showProviderModal, setShowProviderModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [userCity, setUserCity] = useState('Jaipur');

  const providerDatabase = [
    { id: 1, name: 'Rajesh Kumar', city: 'Jaipur', service: 'Electrician', rating: 4.9, reviews: 156, exp: '8 yrs', price: '₹299', loc: 'Malviya Nagar', dist: '2.3 km', available: true },
    { id: 2, name: 'Amit Sharma', city: 'Jaipur', service: 'Plumber', rating: 4.8, reviews: 203, exp: '10 yrs', price: '₹349', loc: 'Vaishali Nagar', dist: '3.1 km', available: true },
    { id: 3, name: 'Suresh Patel', city: 'Kota', service: 'Electrician', rating: 4.7, reviews: 128, exp: '6 yrs', price: '₹279', loc: 'Talwandi', dist: '1.2 km', available: true },
    { id: 4, name: 'Vikram Singh', city: 'Jodhpur', service: 'Roadside Mechanic', rating: 4.9, reviews: 175, exp: '12 yrs', price: '₹399', loc: 'Sardarpura', dist: '4.5 km', available: true },
    { id: 5, name: 'Rahul Varma', city: 'Jaipur', service: 'Professional Cook', rating: 4.8, reviews: 110, exp: '7 yrs', price: '₹8,000/mo', loc: 'C-Scheme', dist: '2.0 km', available: true },
    { id: 6, name: 'Mahesh Meena', city: 'Kota', service: 'Roadside Mechanic', rating: 4.6, reviews: 95, exp: '5 yrs', price: '₹450', loc: 'Kunadi', dist: '3.5 km', available: true },
    { id: 7, name: 'Priya Singh', city: 'Jodhpur', service: 'Professional Cook', rating: 4.9, reviews: 60, exp: '4 yrs', price: '₹9,000/mo', loc: 'Ratanada', dist: '2.8 km', available: true },
  ];

  const getFilteredProviders = (serviceName) => {
    return providerDatabase.filter(p => p.service === serviceName && p.city === userCity);
  };

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowProviderModal(true);
  };

  // ✅ ONLY THIS FUNCTION CHANGED
  const handleProviderSelect = (provider) => {
    if (!selectedService) return;

    if (typeof setBookingForm === "function") {
      setBookingForm({
        service: selectedService.name,
        serviceCategory: selectedService.category,
        location: userCity,
        providerId: provider.id,
        providerName: provider.name
      });
    }

    setShowProviderModal(false);

    navigate("/booking");   // ✅ ROUTER NAVIGATION
  };

  /* --------------- REST OF YOUR ORIGINAL UI BELOW --------------- */
  /* NOTHING CHANGED */

  const serviceCategories = {
    home: {
      title: 'Home Services',
      icon: <Home className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      services: [
        { name: 'Electrician', icon: <Lightbulb className="w-6 h-6" />, price: '₹299' },
        { name: 'Plumber', icon: <Droplet className="w-6 h-6" />, price: '₹349' },
        { name: 'Painter', icon: <PaintBucket className="w-6 h-6" />, price: '₹499' },
        { name: "Carpenter", icon: <Wrench className="w-6 h-6" />, price: "₹399" },
      { name: "AC & Appliances Repair", icon: <Wind className="w-6 h-6" />, price: "₹449" },
      { name: "Home Cleaning", icon: <Trash2 className="w-6 h-6" />, price: "₹599" }
      ]
    },
    vehicle: {
      title: 'Vehicle Services',
      icon: <Car className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Roadside Mechanic', icon: <Wrench className="w-6 h-6" />, price: '₹399' },
        { name: "Car Wash", icon: <Droplet className="w-6 h-6" />, price: "₹299" },
        { name: 'Towing Service', icon: <Truck className="w-6 h-6" />, price: '₹799' }
      ]
    },
    domestic: {
      title: 'Domestic Help',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Professional Cook', icon: <Utensils className="w-6 h-6" />, price: '₹8,000/mo' },
        { name: 'House Maid', icon: <Home className="w-6 h-6" />, price: '₹6,000/mo' },
        { name: "Babysitter", icon: <Baby className="w-6 h-6" />, price: "₹10,000/mo" },
      { name: "Elder Care Assistant", icon: <HeartPulse className="w-6 h-6" />, price: "₹12,000/mo" }
 ]
    },
        transport: {
    title: "Driver & Transport",
    icon: <Navigation className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
    services: [
      { name: "Personal Driver", icon: <Car className="w-6 h-6" />, price: "₹15,000/mo" },
      { name: "Delivery Drivers", icon: <Truck className="w-6 h-6" />, price: "₹12,000/mo" },
      { name: "Truck / Tempo Booking", icon: <Truck className="w-6 h-6" />, price: "₹1,499" }
    ]
  },

  emergency: {
    title: "Emergency Services",
    icon: <AlertCircle className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    services: [
      { name: "Urgent Repairs", icon: <Wrench className="w-6 h-6" />, price: "₹499" },
      { name: "Water Tanker", icon: <Droplet className="w-6 h-6" />, price: "₹1,299" },
      { name: "Emergency Electrician", icon: <Lightbulb className="w-6 h-6" />, price: "₹599" }
      ]
    }
  };

  const allServices = Object.entries(serviceCategories).flatMap(([key, category]) =>
    category.services.map(service => ({ ...service, category: key, categoryTitle: category.title }))
  );

  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-white font-bold text-sm tracking-wide uppercase">Sahayak Emergency Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Find Professionals in <br/>
            <div className="relative inline-block mt-2">
              <select 
                value={userCity} 
                onChange={(e) => setUserCity(e.target.value)}
                className="appearance-none bg-white border-b-4 border-blue-600 text-blue-600 px-4 py-1 pr-10 cursor-pointer outline-none rounded-lg shadow-sm"
              >
                <option value="Jaipur">Jaipur</option>
                <option value="Kota">Kota</option>
                <option value="Jodhpur">Jodhpur</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-600 pointer-events-none" />
            </div>
          </h1>

          <div className="flex justify-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm font-bold text-gray-700">Currently serving {userCity}</span>
            </div>
          </div>
        </div>

        {/* CATEGORY PILLS */}
<div className="flex flex-wrap justify-center gap-4 mb-16">

  {/* ALL SERVICES */}
  <button
    onClick={() => setSelectedCategory("all")}
    className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
      selectedCategory === "all"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    All Services
  </button>

  {/* HOME SERVICES */}
  <button
    onClick={() => setSelectedCategory("home")}
    className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
      selectedCategory === "home"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    <Home className="w-5 h-5" />
    Home Services
  </button>

  {/* VEHICLE SERVICES */}
  <button
    onClick={() => setSelectedCategory("vehicle")}
    className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
      selectedCategory === "vehicle"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    <Car className="w-5 h-5" />
    Vehicle Services
  </button>

  {/* DOMESTIC HELP */}
  <button
    onClick={() => setSelectedCategory("domestic")}
    className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
      selectedCategory === "domestic"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    <Users className="w-5 h-5" />
    Domestic Help
  </button>

  {/* DRIVER & TRANSPORT */}
  <button
    onClick={() => setSelectedCategory("transport")}
    className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
      selectedCategory === "transport"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    <Navigation className="w-5 h-5" />
    Driver & Transport
  </button>

  {/* EMERGENCY SERVICES */}
  <button
    onClick={() => setSelectedCategory("emergency")}
    className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md ${
      selectedCategory === "emergency"
        ? "bg-gradient-to-r from-red-600 to-pink-600 text-white scale-105"
        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
    }`}
  >
    <AlertCircle className="w-5 h-5" />
    Emergency Services
  </button>

</div>
        

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${serviceCategories[service.category].color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase">Starting</p>
                  <p className="text-2xl font-black text-gray-900">{service.price}</p>
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-500 text-sm mb-6">Verified professionals available in {userCity} for immediate booking.</p>
              
              <button
                onClick={() => handleBookNow(service)}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors group"
              >
                Find {service.name}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Providers */}
        {showProviderModal && selectedService && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-4xl w-full p-8 relative animate-fadeIn max-h-[90vh] flex flex-col">
              <button onClick={() => setShowProviderModal(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6 text-gray-400" />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900">Available {selectedService.name}s</h2>
                <p className="text-blue-600 font-bold flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4" /> Near {userCity}, Rajasthan
                </p>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {getFilteredProviders(selectedService.name).length > 0 ? (
                  getFilteredProviders(selectedService.name).map((provider) => (
                    <div key={provider.id} className="p-6 border-2 border-gray-100 rounded-3xl hover:border-blue-500 transition-all bg-gray-50/50">
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xl font-bold text-gray-900">{provider.name}</h4>
                            <BadgeCheck className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className="flex gap-4 mt-1 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1 text-yellow-600"><Star className="w-4 h-4 fill-current" /> {provider.rating}</span>
                            <span>{provider.exp} Experience</span>
                            <span>•</span>
                            <span>{provider.loc}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-2xl font-black text-gray-900">{provider.price}</p>
                            <p className="text-xs font-bold text-green-600 uppercase">Available Now</p>
                          </div>
                          <button 
                            onClick={() => handleProviderSelect(provider)}
                            className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-all"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">No {selectedService.name}s Found</h3>
                    <p className="text-gray-500">We currently don't have any registered {selectedService.name}s in {userCity}. Try another city!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ServicesPage;  