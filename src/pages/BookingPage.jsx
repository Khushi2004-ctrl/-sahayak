import React, { useState } from 'react';
import { 
  CheckCircle, ArrowRight, Clock, DollarSign, Sparkles,
  Home, Wrench, Utensils, Lightbulb, Droplet, Scissors, 
  Briefcase, Users, PaintBucket, Wind, Car, Trash2, Baby, 
  HeartPulse, Truck, AlertCircle
} from 'lucide-react';



const BookingPage = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    serviceCategory: '',
    service: '',
    location: '',
    date: '',
    time: '',
    emergency: 'no',
    notes: ''
  });
  const [priceEstimate, setPriceEstimate] = useState(null);

  const serviceCategories = {
    home: {
      title: 'Home Services',
      icon: <Home className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      services: [
        { name: 'Electrician', icon: <Lightbulb className="w-6 h-6" />, price: '₹299' },
        { name: 'Plumber', icon: <Droplet className="w-6 h-6" />, price: '₹349' },
        { name: 'Painter', icon: <PaintBucket className="w-6 h-6" />, price: '₹499' },
        { name: 'Carpenter', icon: <Briefcase className="w-6 h-6" />, price: '₹399' },
        { name: 'AC & Appliance Repair', icon: <Wind className="w-6 h-6" />, price: '₹449' },
        { name: 'Home Cleaning', icon: <Trash2 className="w-6 h-6" />, price: '₹599' }
      ]
    },
    vehicle: {
      title: 'Vehicle Services',
      icon: <Car className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Roadside Mechanic', icon: <Wrench className="w-6 h-6" />, price: '₹399' },
        { name: 'Car Wash', icon: <Droplet className="w-6 h-6" />, price: '₹299' },
        { name: 'Towing Service', icon: <Truck className="w-6 h-6" />, price: '₹799' },
        { name: 'Tyre Replacement', icon: <AlertCircle className="w-6 h-6" />, price: '₹599' }
      ]
    },
    domestic: {
      title: 'Domestic Help',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Professional Cook', icon: <Utensils className="w-6 h-6" />, price: '₹8,000/mo' },
        { name: 'House Maid', icon: <Home className="w-6 h-6" />, price: '₹6,000/mo' },
        { name: 'Babysitter', icon: <Baby className="w-6 h-6" />, price: '₹10,000/mo' },
        { name: 'Elder Care Assistant', icon: <HeartPulse className="w-6 h-6" />, price: '₹12,000/mo' }
      ]
    },
    transport: {
      title: 'Driver & Transport',
      icon: <Car className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      services: [
        { name: 'Personal Driver', icon: <Car className="w-6 h-6" />, price: '₹15,000/mo' },
        { name: 'Delivery Drivers', icon: <Truck className="w-6 h-6" />, price: '₹12,000/mo' },
        { name: 'Truck / Tempo Booking', icon: <Truck className="w-6 h-6" />, price: '₹1,499' }
      ]
    },
    emergency: {
      title: 'Emergency Services',
      icon: <AlertCircle className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Urgent Repairs', icon: <Wrench className="w-6 h-6" />, price: '₹499' },
        { name: 'Water Tanker', icon: <Droplet className="w-6 h-6" />, price: '₹1,299' },
        { name: 'Emergency Electrician', icon: <Lightbulb className="w-6 h-6" />, price: '₹599' }
      ]
    }
  };

  const calculateEstimate = () => {
    const basePrice = bookingForm.emergency === 'yes' ? 599 : 399;
    setPriceEstimate(basePrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully! Our team will contact you shortly.');
    setBookingForm({
      name: '',
      phone: '',
      serviceCategory: '',
      service: '',
      location: '',
      date: '',
      time: '',
      emergency: 'no',
      notes: ''
    });
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <span className="text-white font-bold text-sm tracking-wide">INSTANT BOOKING</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Book a Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to book a professional instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                    Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Contact Number *</label>
                      <input
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="border-t pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                    Service Details
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Service Category *</label>
                      <select
                        required
                        value={bookingForm.serviceCategory}
                        onChange={(e) => setBookingForm({ ...bookingForm, serviceCategory: e.target.value, service: '' })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                      >
                        <option value="">Choose a category</option>
                        {Object.entries(serviceCategories).map(([key, category]) => (
                          <option key={key} value={category.title}>{category.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Select Service *</label>
                      <select
                        required
                        value={bookingForm.service}
                        onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                        disabled={!bookingForm.serviceCategory}
                      >
                        <option value="">Select a service</option>
                        {bookingForm.serviceCategory && 
                          Object.values(serviceCategories)
                            .find(cat => cat.title === bookingForm.serviceCategory)
                            ?.services.map((service, idx) => (
                              <option key={idx} value={service.name}>{service.name}</option>
                            ))
                        }
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location & Timing */}
                <div className="border-t pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                    Location & Timing
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Location / Address *</label>
                      <textarea
                        required
                        value={bookingForm.location}
                        onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                        rows="3"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium resize-none"
                        placeholder="Enter your complete address"
                      ></textarea>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Time *</label>
                        <input
                          type="time"
                          required
                          value={bookingForm.time}
                          onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="border-t pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
                    Additional Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Emergency Booking</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="emergency"
                            value="no"
                            checked={bookingForm.emergency === 'no'}
                            onChange={(e) => setBookingForm({ ...bookingForm, emergency: e.target.value })}
                            className="w-5 h-5 text-purple-600"
                          />
                          <span className="font-medium text-gray-700">No</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="emergency"
                            value="yes"
                            checked={bookingForm.emergency === 'yes'}
                            onChange={(e) => setBookingForm({ ...bookingForm, emergency: e.target.value })}
                            className="w-5 h-5 text-red-600"
                          />
                          <span className="font-medium text-gray-700">Yes (Priority Service)</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Additional Notes</label>
                      <textarea
                        value={bookingForm.notes}
                        onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        rows="4"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-medium resize-none"
                        placeholder="Any specific requirements or details..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-black text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <CheckCircle className="w-6 h-6" />
                  Confirm Booking
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Estimate */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Price Estimate
              </h3>
              <p className="text-blue-100 mb-6">Get an approximate service cost before confirming your booking</p>
              <button
                onClick={calculateEstimate}
                type="button"
                className="w-full py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all mb-4"
              >
                Calculate Estimate
              </button>
              {priceEstimate && (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                  <div className="text-center">
                    <div className="text-sm text-blue-100 mb-2">Estimated Cost</div>
                    <div className="text-4xl font-black">₹{priceEstimate}</div>
                    <div className="text-xs text-blue-100 mt-2">Final price may vary</div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Response */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Quick Response Guarantee</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Once your booking is confirmed, nearby providers will be notified and assigned to you based on availability and proximity. Our team will contact you within 15 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                Booking Benefits
              </h4>
              <ul className="space-y-3">
                {['Verified professionals', 'Transparent pricing', 'Real-time tracking', 'Quality guarantee'].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;