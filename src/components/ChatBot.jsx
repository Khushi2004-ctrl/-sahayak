import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, X, Send, Bot, User, Home, Wrench, Calendar, 
  Phone, Mail, DollarSign, Clock, MapPin, Star, ChevronDown,
  Sparkles, HelpCircle, Settings, Award
} from 'lucide-react';

const Chatbot = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! 👋 Welcome to Sahayak! I\'m your virtual assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Quick action buttons
  const quickActions = [
    { id: 'services', label: 'View Services', icon: <Wrench className="w-4 h-4" /> },
    { id: 'booking', label: 'Book Now', icon: <Calendar className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing Info', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'provider', label: 'Become Provider', icon: <Award className="w-4 h-4" /> }
  ];

  // AI-like response system
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Greeting responses
    if (message.match(/^(hi|hello|hey|good morning|good evening|namaste)/)) {
      return {
        text: 'Hello! 😊 Great to connect with you! I can help you with:\n\n• Booking services\n• Finding providers\n• Pricing information\n• Account queries\n\nWhat would you like to know?',
        suggestions: ['Book a service', 'View pricing', 'How it works']
      };
    }

    // Service-related queries
    if (message.includes('service') || message.includes('what do you offer')) {
      return {
        text: 'We offer a wide range of services! 🛠️\n\n🏠 Home Services: Electrician, Plumber, Carpenter, Painter, AC Repair\n🚗 Vehicle Services: Mechanic, Car Wash, Towing\n👨‍🍳 Domestic Help: Cook, Maid, Babysitter\n🚗 Transport: Personal Driver, Delivery\n\nWhich service are you interested in?',
        suggestions: ['Book electrician', 'Book plumber', 'View all services']
      };
    }

    // Electrician
    if (message.includes('electric')) {
      return {
        text: 'Our electrician services include:\n\n⚡ Wiring & Installation\n⚡ Fault Repair\n⚡ Appliance Fixing\n⚡ Emergency Services\n\nStarting from ₹299\n\nWould you like to book an electrician?',
        suggestions: ['Book now', 'View pricing', 'Talk to support']
      };
    }

    // Plumber
    if (message.includes('plumb')) {
      return {
        text: 'Our plumbing services cover:\n\n💧 Leak Repairs\n💧 Pipe Installation\n💧 Bathroom Fitting\n💧 Emergency Plumbing\n\nStarting from ₹349\n\nReady to book a plumber?',
        suggestions: ['Book now', 'Emergency service', 'Call us']
      };
    }

    // Carpenter
    if (message.includes('carpenter') || message.includes('furniture')) {
      return {
        text: 'Carpenter services available:\n\n🔨 Furniture Repair\n🔨 Custom Furniture\n🔨 Door/Window Fixing\n🔨 Wooden Installations\n\nStarting from ₹399\n\nShall I help you book?',
        suggestions: ['Book carpenter', 'View portfolio', 'Get quote']
      };
    }

    // Cook/Maid
    if (message.includes('cook') || message.includes('maid') || message.includes('domestic')) {
      return {
        text: 'Domestic help services:\n\n👨‍🍳 Professional Cook: ₹8,000/month\n🧹 House Maid: ₹6,000/month\n👶 Babysitter: ₹10,000/month\n❤️ Elder Care: ₹12,000/month\n\nAll helpers are verified and background-checked!',
        suggestions: ['Book cook', 'Book maid', 'More info']
      };
    }

    // Pricing queries
    if (message.includes('price') || message.includes('cost') || message.includes('charge') || message.includes('fee')) {
      return {
        text: 'Our pricing is transparent with no hidden charges! 💰\n\n📋 Home Services: ₹299 - ₹599\n🚗 Vehicle Services: ₹299 - ₹799\n👨‍🍳 Domestic Help: ₹6,000 - ₹12,000/month\n\nPrices vary based on:\n• Service type\n• Location\n• Time required\n\nWant to know about a specific service?',
        suggestions: ['Electrician price', 'Plumber price', 'View all pricing']
      };
    }

    // How to book
    if (message.includes('how to book') || message.includes('how do i book') || message.includes('booking process')) {
      return {
        text: 'Booking is super easy! Just 5 steps:\n\n1️⃣ Select your service\n2️⃣ Enter your location\n3️⃣ Choose date & time\n4️⃣ Pick a provider\n5️⃣ Confirm booking\n\nYou\'ll get instant confirmation! ✅\n\nReady to book?',
        suggestions: ['Book now', 'Watch demo', 'Contact support']
      };
    }

    // How it works
    if (message.includes('how it works') || message.includes('how does it work')) {
      return {
        text: 'Here\'s how Sahayak works:\n\n✨ Choose Service → We match you with verified professionals\n📍 Set Location → Find providers near you\n⭐ Check Ratings → View reviews & ratings\n📅 Book Instantly → Confirm in seconds\n📱 Track Live → Real-time updates\n\nSimple, right?',
        suggestions: ['Start booking', 'View benefits', 'See pricing']
      };
    }

    // Provider registration
    if (message.includes('provider') || message.includes('join') || message.includes('register') || message.includes('become')) {
      return {
        text: 'Great! Join our network of 2000+ providers! 🎯\n\nBenefits:\n✅ Flexible working hours\n✅ Guaranteed payments\n✅ More customers\n✅ Build your brand\n\nAverage earnings: ₹15,000 - ₹60,000/month\n\nReady to register?',
        suggestions: ['Register now', 'Learn more', 'Call us']
      };
    }

    // Payment queries
    if (message.includes('payment') || message.includes('pay')) {
      return {
        text: 'We accept all payment methods! 💳\n\n• Credit/Debit Cards\n• UPI (GPay, PhonePe, Paytm)\n• Net Banking\n• Cash on Delivery\n\nAll transactions are 100% secure with SSL encryption! 🔒',
        suggestions: ['Book service', 'Payment security', 'Refund policy']
      };
    }

    // Safety/Trust
    if (message.includes('safe') || message.includes('trust') || message.includes('verified') || message.includes('background check')) {
      return {
        text: 'Your safety is our priority! 🛡️\n\nAll providers are:\n✅ Background verified\n✅ ID checked\n✅ Skill tested\n✅ Customer rated\n\n50,000+ customers trust us! We maintain strict quality standards.',
        suggestions: ['View benefits', 'Book service', 'Read reviews']
      };
    }

    // Location/Coverage
    if (message.includes('location') || message.includes('city') || message.includes('area') || message.includes('available')) {
      return {
        text: 'We operate in 100+ cities across India! 🇮🇳\n\nMajor cities:\n📍 Delhi, Mumbai, Bangalore\n📍 Hyderabad, Chennai, Kolkata\n📍 Pune, Jaipur, Ahmedabad\n\nEnter your location while booking to check availability!',
        suggestions: ['Book now', 'Check my city', 'View all cities']
      };
    }

    // Cancellation
    if (message.includes('cancel') || message.includes('refund')) {
      return {
        text: 'Our cancellation policy:\n\n✅ Free cancellation up to 2 hours before service\n✅ Full refund within 5-7 days\n✅ Easy rescheduling options\n\nNeed help canceling a booking?',
        suggestions: ['My bookings', 'Contact support', 'Refund status']
      };
    }

    // Contact/Support
    if (message.includes('contact') || message.includes('support') || message.includes('help') || message.includes('customer care')) {
      return {
        text: 'We\'re here to help 24/7! 💬\n\n📞 Phone: +91 98765 43210\n📧 Email: support@sahayak.com\n⏰ Hours: Mon-Sat, 9AM-7PM\n\nOr continue chatting with me!',
        suggestions: ['Call now', 'Email us', 'Continue chat']
      };
    }

    // Emergency
    if (message.includes('emergency') || message.includes('urgent') || message.includes('asap')) {
      return {
        text: '🚨 Emergency Service Available!\n\nWe offer priority services for:\n⚡ Electrical emergencies\n💧 Plumbing emergencies\n🔧 Urgent repairs\n\nAvailable 24/7!\nStarting from ₹499\n\nNeed urgent help?',
        suggestions: ['Book emergency', 'Call now', 'View pricing']
      };
    }

    // Rating/Reviews
    if (message.includes('rating') || message.includes('review')) {
      return {
        text: 'We maintain high quality standards! ⭐\n\n🌟 4.8/5 average rating\n👥 50,000+ happy customers\n📝 Real verified reviews\n\nAll providers are rated by customers. You can see ratings before booking!',
        suggestions: ['View reviews', 'Book service', 'Become provider']
      };
    }

    // Thank you
    if (message.includes('thank') || message.includes('thanks')) {
      return {
        text: 'You\'re welcome! 😊 Happy to help!\n\nIs there anything else you\'d like to know about our services?',
        suggestions: ['Book service', 'View pricing', 'Contact us']
      };
    }

    // Default response
    return {
      text: 'I\'m here to help! 🤖\n\nI can assist you with:\n\n• 📋 Service information\n• 💰 Pricing details\n• 📅 Booking process\n• 🏆 Provider registration\n• ❓ General queries\n\nWhat would you like to know?',
      suggestions: ['View services', 'Book now', 'Pricing info', 'Contact support']
    };
  };

  const handleSendMessage = (message = inputMessage) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Show typing indicator
    setIsTyping(true);

    // Get bot response after delay
    setTimeout(() => {
      const response = getBotResponse(message);
      const botMessage = {
        type: 'bot',
        text: response.text,
        suggestions: response.suggestions,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case 'services':
        handleSendMessage('What services do you offer?');
        break;
      case 'booking':
        handleSendMessage('How do I book a service?');
        break;
      case 'pricing':
        handleSendMessage('What are your prices?');
        break;
      case 'provider':
        handleSendMessage('I want to become a provider');
        break;
      default:
        break;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all z-50 flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us!
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sahayak Assistant</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.id)}
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-200"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-3 py-1 bg-white border-2 border-blue-200 text-blue-600 rounded-full text-xs font-semibold hover:bg-blue-50 transition-all"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Sahayak AI Assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;