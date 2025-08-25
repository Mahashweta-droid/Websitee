"use client";

import React, { useState, useEffect, useRef } from "react";
import { LuShieldCheck, LuUsers, LuCheck, LuStar, LuArrowRight, LuHeart, LuZap, LuGlobe, LuLock, LuSmartphone, LuHeadphones, LuMapPin } from "react-icons/lu";
import Link from "next/link";

export default function SubscriptionPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('family');
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const plans = [
    {
      id: 'family',
      name: 'Family Plan',
      price: isAnnual ? 6490 : 649,
      period: isAnnual ? 'year' : 'month',
      originalPrice: isAnnual ? 7788 : null,
      savings: isAnnual ? '17%' : null,
      description: 'Complete protection for your entire family',
      features: [
        'Up to 6 family members',
        '24/7 live agent response',
        'GPS tracking for all members',
        'Emergency dispatch orchestration',
        'Custom safety schedules',
        'Silent alarm activation',
        'HD video monitoring',
        'Encrypted data protection',
        'Multi-device support',
        'Priority customer support',
        'Family safety dashboard',
        'Location sharing between members'
      ],
      popular: true,
      icon: LuUsers
    }
  ];

  const benefits = [
    {
      icon: LuShieldCheck,
      title: "Military-Grade Security",
      description: "End-to-end encryption ensures your family's data stays private and secure"
    },
    {
      icon: LuZap,
      title: "Instant Response",
      description: "Get help within seconds with our 24/7 live agent network"
    },
    {
      icon: LuGlobe,
      title: "Global Coverage",
      description: "Protection that travels with you, anywhere in the world"
    },
    {
      icon: LuHeart,
      title: "Family-First Design",
      description: "Built specifically for families who want peace of mind"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 2",
      content: "Deep Horizon gives me peace of mind knowing my family is protected 24/7. The family plan is perfect for us.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "As someone who travels frequently, knowing my family has this level of protection is invaluable.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Healthcare Worker",
      content: "The silent alarm feature is brilliant. I feel safer during my night shifts knowing help is just a button away.",
      rating: 5
    }
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden relative transition-all duration-500 ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-50 via-purple-100 to-gray-100 text-gray-900"
      }`}
    >
      {/* Navigation Bar */}
      <nav className={`fixed top-6 left-0 right-0 mx-auto max-w-5xl z-50 px-6 py-3 rounded-3xl backdrop-blur-xl shadow-2xl transition-all duration-500 flex items-center justify-between overflow-hidden ${
        isDarkMode ? 'bg-white/5 text-white shadow-blue-900/40' : 'bg-white/20 text-gray-900 shadow-blue-200/30'
      }`}
        style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}>
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-0"
          style={{
            background: 'linear-gradient(90deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.10) 100%)',
            opacity: isDarkMode ? 0.18 : 0.22
          }}
        />
        <div className="flex items-center justify-between w-full relative z-10">
          <Link href="/" className="flex items-center font-bold text-xl tracking-tight select-none focus:outline-none transition-colors">
            <img src="/images/logotransparent.png" alt="Deep Horizon Logo" className="h-9 w-auto mr-2" />
            <span>Deep </span><span className={isDarkMode ? 'text-blue-400 hover:text-blue-500' : 'text-blue-600 hover:text-blue-500'}>Horizon</span>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
              }`}
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <Link
              href="/"
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300'
                  : 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-600 hover:text-blue-700'
              }`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-20" />

      {/* Animated Background */}
      <div className={`fixed inset-0 transition-opacity duration-500 ${isDarkMode ? "opacity-30" : "opacity-20"}`}>
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isDarkMode ? "bg-blue-500/20" : "bg-blue-400/30"
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192
          }}
        />
        <div
          className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl animate-pulse ${
            isDarkMode ? "bg-purple-500/10" : "bg-purple-400/20"
          }`}
        />
        <div
          className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
            isDarkMode ? "bg-cyan-500/10" : "bg-cyan-400/20"
          }`}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`absolute inset-0 transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900 via-blue-900/30 to-black"
            : "bg-gradient-to-br from-blue-50 via-purple-100/60 to-gray-100"
        }`} />
        
        <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? "opacity-20" : "opacity-10"}`}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: isDarkMode ?
                `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)` :
                `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px"
            }}
          />
        </div>

        <div className={`absolute inset-0 backdrop-blur-2xl transition-all duration-500 ${
          isDarkMode ? "bg-black/30" : "bg-white/20"
        }`} />

        <div className={`relative z-10 text-center max-w-4xl transition-all duration-2000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-thin tracking-tighter mb-6 leading-none">
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${
                isDarkMode
                  ? "from-white via-blue-100 to-white"
                  : "from-gray-900 via-blue-600 to-gray-900"
              }`}>
                PROTECT
              </span>
              <span className={`block text-5xl md:text-7xl font-extralight -mt-4 ${
                isDarkMode ? "text-blue-400/80" : "text-blue-600/80"
              }`}>
                YOUR FAMILY
              </span>
            </h1>
            <div className={`w-24 h-px bg-gradient-to-r from-transparent to-transparent mx-auto mb-8 animate-pulse ${
              isDarkMode ? "via-blue-400" : "via-blue-600"
            }`} />
          </div>

          <p className={`text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            Choose the plan that keeps your loved ones safe.
            <br />
            <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
              Complete protection for the whole family.
            </span>
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-8">
              CHOOSE YOUR <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>PROTECTION</span>
            </h2>
            <p className={`text-xl font-light max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Start with our most popular family plan and experience the future of personal security
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className={`flex items-center p-1 rounded-2xl backdrop-blur-xl border ${
              isDarkMode
                ? "bg-white/5 border-blue-400/20"
                : "bg-white/20 border-blue-600/10"
            }`}>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  !isAnnual
                    ? `${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-600/20 text-blue-600'}`
                    : `${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isAnnual
                    ? `${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-600/20 text-blue-600'}`
                    : `${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                }`}
              >
                Annual
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-600/20 text-green-600'
                }`}>
                  Save 17%
                </span>
              </button>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-xl border ${
                  plan.popular
                    ? isDarkMode
                      ? "bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border-blue-400/30 shadow-2xl shadow-blue-900/40"
                      : "bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-cyan-400/10 border-blue-600/20 shadow-2xl shadow-blue-200/30"
                    : isDarkMode
                      ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-2xl shadow-blue-900/40"
                      : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-2xl shadow-blue-200/30"
                }`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-medium ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-600/20 text-blue-600'
                  }`}>
                    ⭐ Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`mb-4 transition-colors duration-300 flex items-center justify-center text-4xl ${
                    isDarkMode ? "text-blue-400/70 group-hover:text-blue-400" : "text-blue-600/70 group-hover:text-blue-600"
                  }`}>
                    {plan.icon && <plan.icon size={48} />}
                  </div>
                  <h3 className="text-3xl font-light mb-2 tracking-wide">{plan.name}</h3>
                  <p className={`font-light ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-light">₹</span>
                    <span className="text-6xl font-thin">{plan.price}</span>
                    <span className="text-xl font-light">/{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-lg line-through ${
                        isDarkMode ? "text-gray-500" : "text-gray-400"
                      }`}>
                        ₹{plan.originalPrice}
                      </span>
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-600/20 text-green-600'
                      }`}>
                        Save {plan.savings}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-600/20 text-blue-600'
                        }`}>
                          <LuCheck size={12} />
                        </div>
                        <span className={`font-light ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 group ${
                  isDarkMode
                    ? "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 border border-blue-400/30"
                    : "bg-blue-600/20 hover:bg-blue-600/30 text-blue-600 hover:text-blue-700 border border-blue-600/20"
                }`}>
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <LuArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`relative py-32 px-6 ${
        isDarkMode ? "bg-gray-900/20" : "bg-gray-100/50"
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-8">
              WHY CHOOSE <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>DEEP HORIZON</span>
            </h2>
            <p className={`text-xl font-light max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Experience the difference that advanced technology and human care can make in your family's safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group p-8 rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-xl border border-white/20 shadow-2xl ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40"
                    : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-6 transition-colors duration-300 flex items-center justify-center text-4xl ${
                  isDarkMode ? "text-blue-400/70 group-hover:text-blue-400" : "text-blue-600/70 group-hover:text-blue-600"
                }`}>
                  {benefit.icon && <benefit.icon size={40} />}
                </div>
                <h3 className={`text-xl font-light mb-3 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-black"
                }`}>
                  {benefit.title}
                </h3>
                <p className={`font-light leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"
                }`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-8">
              TRUSTED BY <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>FAMILIES</span>
            </h2>
            <p className={`text-xl font-light max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              See what our users say about their experience with Deep Horizon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`group p-8 rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-xl border border-white/20 shadow-2xl ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40"
                    : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <LuStar
                      key={i}
                      className={`w-5 h-5 ${
                        isDarkMode ? "text-yellow-400" : "text-yellow-500"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className={`font-light leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border-blue-400/30"
              : "bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-cyan-400/10 border-blue-600/20"
          }`}>
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter mb-8 leading-tight">
              READY TO <span className={isDarkMode ? "text-blue-400 font-semibold" : "text-blue-600 font-semibold"}>PROTECT YOUR FAMILY</span>
            </h2>
            <p className={`text-xl font-light mb-12 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Join thousands of families who trust Deep Horizon for their safety. Start your protection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className={`px-12 py-5 font-medium transition-all duration-300 rounded-2xl backdrop-blur-xl border shadow-2xl ${
                isDarkMode
                  ? "bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/30 text-blue-400 hover:text-blue-300"
                  : "bg-blue-600/20 hover:bg-blue-600/30 border-blue-600/20 text-blue-600 hover:text-blue-700"
              }`}>
                <span className="flex items-center gap-2">
                  Get Family Plan
                  <LuArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <Link
                href="/"
                className={`px-8 py-5 font-light transition-all duration-300 rounded-2xl backdrop-blur-xl border shadow-2xl ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40 text-gray-300 hover:text-white"
                    : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30 text-gray-600 hover:text-black"
                }`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative border-t py-16 px-6 ${
        isDarkMode ? "border-gray-800" : "border-gray-300"
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-thin tracking-wider">
                DEEP{" "}
                <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
                  HORIZON
                </span>
              </h3>
              <p className={`text-sm font-light mt-2 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}>
                Personal Security Concierge
              </p>
            </div>
            <div className={`text-sm font-light mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Contact us at - Deep Horizon, Ashirwad Bhavan, Maligaon, Guwahati 781012, Assam<br />
              Phone: <a href="tel:+918638071503" className={isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}>+91 8638071503</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}