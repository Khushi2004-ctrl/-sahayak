import React, { useState } from 'react';
import { 
  Shield, Clock, DollarSign, Award, Star, TrendingUp, Users, 
  CheckCircle, Zap, Heart, Gift, Crown, Target, Briefcase,
  Calendar, Phone, MapPin, BadgeCheck, Sparkles, ArrowRight,
  ThumbsUp, Truck, Home, Settings, MessageSquare, CreditCard
} from 'lucide-react';

const BenefitsPage = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState('customers');

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <span className="text-white font-bold text-sm tracking-wide">WHY CHOOSE SAHAYAK</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Benefits & Advantages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Sahayak makes life easier for customers and more profitable for service providers
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border-2 border-gray-200">
            <button
              onClick={() => setActiveTabState('customers')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === 'customers'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-6 h-6" />
              For Customers
            </button>
            <button
              onClick={() => setActiveTabState('providers')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === 'providers'
                  ? 'bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-6 h-6" />
              For Providers
            </button>
          </div>
        </div>

        {/* Customer Benefits */}
        {activeTab === 'customers' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
              <Crown className="w-20 h-20 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-black mb-4">Premium Customer Experience</h2>
              <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get instant access to verified professionals, transparent pricing, and 24/7 support
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-5xl font-black mb-2">50K+</div>
                  <div className="text-white/80">Happy Customers</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">4.8★</div>
                  <div className="text-white/80">Average Rating</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">100+</div>
                  <div className="text-white/80">Cities Covered</div>
                </div>
              </div>
            </div>

            {/* Key Benefits Grid */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">Key Benefits for You</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="w-12 h-12" />,
                    title: 'Verified Professionals Only',
                    desc: 'Every service provider undergoes thorough background checks, skill verification, and ID validation before joining our platform',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: <Clock className="w-12 h-12" />,
                    title: 'Save Time & Effort',
                    desc: 'No more calling multiple providers. Get matched instantly with available professionals near you within minutes',
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    icon: <DollarSign className="w-12 h-12" />,
                    title: 'Transparent Pricing',
                    desc: 'See upfront costs before booking. No hidden charges, no surprise fees. What you see is what you pay',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    icon: <Star className="w-12 h-12" />,
                    title: 'Quality Guaranteed',
                    desc: 'Read genuine reviews from verified customers. Choose providers with high ratings and proven track records',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    icon: <Zap className="w-12 h-12" />,
                    title: 'Quick Response Time',
                    desc: 'Get instant confirmations and provider details. Most bookings are confirmed within 15 minutes',
                    color: 'from-pink-500 to-pink-600'
                  },
                  {
                    icon: <Phone className="w-12 h-12" />,
                    title: '24/7 Customer Support',
                    desc: 'Our dedicated support team is always available to help you with any questions or issues',
                    color: 'from-indigo-500 to-purple-600'
                  },
                  {
                    icon: <MapPin className="w-12 h-12" />,
                    title: 'Real-Time Tracking',
                    desc: 'Track your service provider in real-time. Know exactly when they will arrive at your location',
                    color: 'from-cyan-500 to-blue-600'
                  },
                  {
                    icon: <Gift className="w-12 h-12" />,
                    title: 'Rewards & Discounts',
                    desc: 'Earn points on every booking. Unlock exclusive discounts and special offers for loyal customers',
                    color: 'from-orange-500 to-red-600'
                  },
                  {
                    icon: <Heart className="w-12 h-12" />,
                    title: 'Favorite Providers',
                    desc: 'Save your favorite service providers and book them again with just one click',
                    color: 'from-red-500 to-pink-500'
                  }
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-200"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200">
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                Additional Features That Make Us Better
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Free cancellation up to 2 hours before service' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Flexible rescheduling options' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Multiple payment methods accepted' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Instant booking confirmation' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Service history tracking' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'In-app chat with providers' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Detailed service receipts' },
                  { icon: <CheckCircle className="w-6 h-6" />, text: 'Emergency service availability' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-4xl font-black mb-4">Ready to Experience the Benefits?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join 50,000+ satisfied customers who trust Sahayak for all their service needs
              </p>
              <button
                onClick={() => setActiveTab('booking')}
                className="px-10 py-5 bg-white text-blue-600 rounded-xl font-black text-xl hover:bg-gray-100 shadow-2xl transform hover:scale-110 transition-all inline-flex items-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Book Your First Service
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Provider Benefits */}
        {activeTab === 'providers' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
              <Award className="w-20 h-20 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-black mb-4">Grow Your Business With Sahayak</h2>
              <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Increase your earnings, get more customers, and build your reputation
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-5xl font-black mb-2">2000+</div>
                  <div className="text-white/80">Active Providers</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">₹15K+</div>
                  <div className="text-white/80">Avg Monthly Earnings</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">10K+</div>
                  <div className="text-white/80">Monthly Bookings</div>
                </div>
              </div>
            </div>

            {/* Key Benefits Grid */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">Why Join Sahayak?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <TrendingUp className="w-12 h-12" />,
                    title: 'Increase Your Income',
                    desc: 'Get access to thousands of verified customers. Earn 30-50% more compared to traditional methods',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    icon: <Clock className="w-12 h-12" />,
                    title: 'Flexible Working Hours',
                    desc: 'You decide when you work. Accept bookings that fit your schedule. Perfect work-life balance',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: <Users className="w-12 h-12" />,
                    title: 'Verified Customer Base',
                    desc: 'All customers are verified. No time wasted on fake inquiries or unreliable clients',
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    icon: <BadgeCheck className="w-12 h-12" />,
                    title: 'Build Your Brand',
                    desc: 'Create your professional profile, showcase your skills, and build a strong reputation with ratings',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    icon: <CreditCard className="w-12 h-12" />,
                    title: 'Guaranteed Payments',
                    desc: 'Get paid within 2-3 business days. Secure payment processing with multiple withdrawal options',
                    color: 'from-pink-500 to-pink-600'
                  },
                  {
                    icon: <Target className="w-12 h-12" />,
                    title: 'Marketing Support',
                    desc: 'We bring customers to you! Benefit from our marketing campaigns and brand visibility',
                    color: 'from-indigo-500 to-purple-600'
                  },
                  {
                    icon: <MessageSquare className="w-12 h-12" />,
                    title: 'Direct Communication',
                    desc: 'Chat directly with customers through our app. No middlemen, clear communication',
                    color: 'from-cyan-500 to-blue-600'
                  },
                  {
                    icon: <Settings className="w-12 h-12" />,
                    title: 'Easy-to-Use Dashboard',
                    desc: 'Manage all bookings, track earnings, view reviews, and update availability from one place',
                    color: 'from-orange-500 to-red-600'
                  },
                  {
                    icon: <ThumbsUp className="w-12 h-12" />,
                    title: 'Zero Listing Fee',
                    desc: 'Join completely free! No registration charges, no monthly fees. Pay only commission on bookings',
                    color: 'from-red-500 to-pink-500'
                  }
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-200"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Earning Potential */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-2xl border-2 border-green-200">
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                💰 Earning Potential
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { level: 'Part-Time', jobs: '10-15 jobs/month', earning: '₹8,000 - ₹12,000' },
                  { level: 'Full-Time', jobs: '30-40 jobs/month', earning: '₹25,000 - ₹35,000' },
                  { level: 'Top Performer', jobs: '50+ jobs/month', earning: '₹40,000 - ₹60,000+' }
                ].map((tier, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-green-300">
                    <div className="text-3xl font-black text-green-600 mb-2">{tier.level}</div>
                    <div className="text-gray-600 mb-4">{tier.jobs}</div>
                    <div className="text-4xl font-black text-gray-900">{tier.earning}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 text-sm">
                * Earnings vary based on service type, location, and ratings. Top-rated providers earn significantly more!
              </p>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-200">
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                ⭐ What Our Providers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Rajesh Kumar',
                    role: 'Electrician',
                    rating: 4.9,
                    quote: 'My income doubled after joining Sahayak. I get regular bookings and customers are genuine.',
                    jobs: 450
                  },
                  {
                    name: 'Amit Sharma',
                    role: 'Plumber',
                    rating: 4.8,
                    quote: 'Best platform for service providers. Payments are always on time and support team is helpful.',
                    jobs: 580
                  },
                  {
                    name: 'Suresh Patel',
                    role: 'Carpenter',
                    rating: 4.9,
                    quote: 'I love the flexibility. I work when I want and earn more than before. Highly recommended!',
                    jobs: 320
                  }
                ].map((provider, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border-2 border-orange-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900">{provider.rating}</span>
                      <span className="text-gray-600 text-sm">({provider.jobs} jobs)</span>
                    </div>
                    <p className="text-gray-700 italic mb-4">"{provider.quote}"</p>
                    <div className="font-bold text-gray-900">{provider.name}</div>
                    <div className="text-sm text-gray-600">{provider.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-4xl font-black mb-4">Start Earning More Today!</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join 2000+ successful providers who are growing their business with Sahayak
              </p>
              <button
                onClick={() => setActiveTab('provider')}
                className="px-10 py-5 bg-white text-orange-600 rounded-xl font-black text-xl hover:bg-gray-100 shadow-2xl transform hover:scale-110 transition-all inline-flex items-center gap-3"
              >
                <Award className="w-6 h-6" />
                Register as Provider
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BenefitsPage;