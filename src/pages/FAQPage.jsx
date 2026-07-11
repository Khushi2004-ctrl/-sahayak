import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, HelpCircle, Search, MessageSquare, 
  Phone, Mail, Clock, Users, Shield, CreditCard, MapPin,
  Star, Calendar, Settings, AlertCircle, CheckCircle
} from 'lucide-react';

const FAQPage = ({ setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqCategories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'general', label: 'General', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'booking', label: 'Booking', icon: <Calendar className="w-5 h-5" /> },
    { id: 'payment', label: 'Payment', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'providers', label: 'For Providers', icon: <Users className="w-5 h-5" /> },
    { id: 'safety', label: 'Safety', icon: <Shield className="w-5 h-5" /> }
  ];

  const faqs = [
    // General Questions
    {
      category: 'general',
      question: 'What is Sahayak?',
      answer: 'Sahayak is a hyperlocal multi-service booking platform that connects customers with verified service providers for home services, vehicle maintenance, domestic help, and more. We make it easy to find reliable professionals in your area with just a few clicks.'
    },
    {
      category: 'general',
      question: 'How does Sahayak work?',
      answer: 'Simply select the service you need, enter your location, and get matched with verified professionals nearby. You can view their profiles, ratings, and pricing before making a booking. Once confirmed, you can track your service in real-time.'
    },
    {
      category: 'general',
      question: 'Which cities does Sahayak operate in?',
      answer: 'Sahayak currently operates in 100+ cities across India, including major metros and tier-2 cities. We are constantly expanding to new locations. Enter your city in the booking section to check availability.'
    },
    {
      category: 'general',
      question: 'Is there a mobile app available?',
      answer: 'Yes! Sahayak is available on both iOS and Android platforms. Download our app from the App Store or Google Play Store for a seamless booking experience on the go.'
    },

    // Booking Questions
    {
      category: 'booking',
      question: 'How do I book a service?',
      answer: 'Click on "Book a Service" from the homepage, select your desired service category, choose the specific service, enter your location and preferred time, and confirm your booking. You\'ll receive instant confirmation and provider details.'
    },
    {
      category: 'booking',
      question: 'Can I schedule a service for a future date?',
      answer: 'Yes, you can schedule services up to 30 days in advance. Simply select your preferred date and time during the booking process. You\'ll receive reminders before your scheduled appointment.'
    },
    {
      category: 'booking',
      question: 'How do I cancel or reschedule a booking?',
      answer: 'Go to "My Bookings" in your dashboard, select the booking you want to modify, and click either "Cancel" or "Reschedule". Free cancellation is available up to 2 hours before the scheduled time.'
    },
    {
      category: 'booking',
      question: 'What if no provider is available in my area?',
      answer: 'If no providers are currently available, you can join our waitlist and we\'ll notify you as soon as a provider becomes available in your area. We\'re constantly onboarding new service providers.'
    },
    {
      category: 'booking',
      question: 'Can I request the same provider again?',
      answer: 'Absolutely! You can mark providers as favorites and request them for future bookings. Your favorite providers will appear at the top of your search results.'
    },

    // Payment Questions
    {
      category: 'payment',
      question: 'What payment methods are accepted?',
      answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, digital wallets (Paytm, PhonePe, Google Pay), and cash on completion of service.'
    },
    {
      category: 'payment',
      question: 'When do I need to pay?',
      answer: 'You can pay either in advance while booking or after service completion. For advance payment, the amount is held securely and released to the provider only after you confirm service completion.'
    },
    {
      category: 'payment',
      question: 'Is my payment information secure?',
      answer: 'Yes, all payment transactions are encrypted using industry-standard SSL technology. We never store your complete card details and comply with PCI DSS standards for payment security.'
    },
    {
      category: 'payment',
      question: 'What is your refund policy?',
      answer: 'If you\'re not satisfied with the service, you can request a refund within 24 hours. Refunds are processed within 5-7 business days. Free cancellations up to 2 hours before service receive full refunds.'
    },
    {
      category: 'payment',
      question: 'Are there any hidden charges?',
      answer: 'No! We believe in complete transparency. The price shown during booking is the final price you pay. There are no hidden charges, surge pricing, or surprise fees.'
    },

    // Provider Questions
    {
      category: 'providers',
      question: 'How do I become a service provider on Sahayak?',
      answer: 'Click on "Become a Provider" from the homepage, fill out the registration form with your details, upload required documents (ID proof, skill certificates), and submit. Our team will verify your application within 24 hours.'
    },
    {
      category: 'providers',
      question: 'What documents do I need to register as a provider?',
      answer: 'You need a valid government ID (Aadhaar, PAN, or Driver\'s License), proof of expertise or experience certificates, and address proof. For certain services, specific licenses or certifications may be required.'
    },
    {
      category: 'providers',
      question: 'How much commission does Sahayak charge?',
      answer: 'Sahayak charges a competitive commission of 15-20% per booking, depending on the service category. This covers payment processing, customer support, marketing, and platform maintenance.'
    },
    {
      category: 'providers',
      question: 'When do I receive my payment?',
      answer: 'Payments are transferred to your registered bank account within 2-3 business days after service completion and customer confirmation. You can track all your earnings in the Provider Dashboard.'
    },
    {
      category: 'providers',
      question: 'Can I set my own prices?',
      answer: 'Yes! While we provide suggested pricing based on market rates, you can set your own prices. However, competitive pricing helps you get more bookings.'
    },
    {
      category: 'providers',
      question: 'How do I improve my ratings?',
      answer: 'Provide excellent service, arrive on time, communicate professionally, and go the extra mile. Respond promptly to customer queries and maintain a professional appearance. High ratings lead to more bookings!'
    },

    // Safety Questions
    {
      category: 'safety',
      question: 'Are service providers verified?',
      answer: 'Yes! All service providers go through a rigorous verification process including background checks, ID verification, skill assessment, and reference checks. Only verified professionals are allowed on our platform.'
    },
    {
      category: 'safety',
      question: 'What if I face any issues with the service provider?',
      answer: 'Contact our 24/7 customer support immediately through the app or website. We take all complaints seriously and will take appropriate action, including provider suspension if necessary.'
    },
    {
      category: 'safety',
      question: 'Can I see provider reviews before booking?',
      answer: 'Yes! Every provider has a detailed profile showing their ratings, customer reviews, completed jobs, response time, and verification status. This helps you make an informed decision.'
    },
    {
      category: 'safety',
      question: 'Is my personal information safe?',
      answer: 'Absolutely. We use bank-grade encryption to protect your personal data. Your information is never shared with third parties without your consent. Read our Privacy Policy for complete details.'
    },
    {
      category: 'safety',
      question: 'What safety measures should I take?',
      answer: 'Always verify the provider\'s identity when they arrive, keep the conversation within the platform, avoid sharing sensitive personal information, and report any suspicious behavior immediately to our support team.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <span className="text-white font-bold text-sm tracking-wide">HELP CENTER</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Sahayak services, bookings, payments, and more
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-lg shadow-lg"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow border border-gray-200'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 flex-1">{faq.question}</h3>
                  </div>
                  <div className="ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 pt-2 pl-20">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filter</p>
            </div>
          )}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-4">Still Need Help?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-white/80 text-sm mb-3">Mon-Sat, 9AM-7PM</p>
              <a href="tel:+919876543210" className="text-white font-bold hover:underline">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
              <Mail className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-white/80 text-sm mb-3">We'll reply within 24 hours</p>
              <a href="mailto:support@sahayak.com" className="text-white font-bold hover:underline">
                support@sahayak.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
              <MessageSquare className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Live Chat</h3>
              <p className="text-white/80 text-sm mb-3">Chat with us instantly</p>
              <button className="text-white font-bold hover:underline">
                Start Chat
              </button>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('contact')}
            className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-black text-lg hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all"
          >
            Go to Contact Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;