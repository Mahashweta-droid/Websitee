"use client";

import React, { useState, useEffect, useRef } from "react";
import { LuShieldCheck, LuUsers, LuUser, LuCheck, LuStar, LuArrowRight, LuHeart, LuZap, LuGlobe, LuLock, LuSmartphone, LuHeadphones, LuMapPin } from "react-icons/lu";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import Link from "next/link";

export default function SubscriptionPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('family-monthly');
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!mobileNavOpen) return;
    function handleClick(e: MouseEvent) {
      if (mobileNavRef.current && e.target instanceof Node && !mobileNavRef.current.contains(e.target)) {
        setMobileNavOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileNavOpen]);

  const plans = [
    {
      id: 'individual-monthly',
      name: 'Individual Plan',
      price: 149,
      period: 'month',
      originalPrice: null,
      savings: null,
      description: 'Personal safety for individuals',
      features: [
        'Personal safety tracking',
        'Emergency alerts',
        '5 video monitoring sessions',
        'Location sharing',
        '24/7 security monitoring'
      ],
      icon: LuUser
    },
    {
      id: 'individual-yearly',
      name: 'Individual Plan',
      price: 1699,
      period: 'year',
      originalPrice: 1788,
      savings: '₹149 (Save 8%)',
      description: 'Personal safety for individuals',
      features: [
        'Personal safety tracking',
        'Emergency alerts',
        '5 video monitoring sessions',
        'Location sharing',
        '24/7 security monitoring',
        'Save 8%'
      ],
      icon: LuUser
    },
    {
      id: 'family-monthly',
      name: 'Family Plan',
      price: 649,
      period: 'month',
      originalPrice: null,
      savings: null,
      description: 'Complete protection for your entire family',
      features: [
        'Up to 5 family members',
        'Family safety tracking',
        'Emergency alerts',
        '5 video monitoring sessions',
        'Location sharing',
        '24/7 security monitoring'
      ],
      icon: LuUsers
    },
    {
      id: 'family-yearly',
      name: 'Family Plan',
      price: 7199,
      period: 'year',
      originalPrice: 7788,
      savings: '₹649 (Save 8%)',
      description: 'Complete protection for your entire family',
      features: [
        'Up to 5 family members',
        'Family safety tracking',
        'Emergency alerts',
        '5 video monitoring sessions',
        'Location sharing',
        '24/7 security monitoring',
        'Save 8%'
      ],
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
          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 text-base font-medium">
            <Link href="/" className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Home</Link>
            <Link href="/#four-pillars-section" className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Features</Link>
            <Link href="/#for-everyone-section" className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>For Everyone</Link>
            <Link href="/subscription" className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Pricing</Link>
            <Link href="/#contact-section" className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Contact</Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl transition-all duration-300 focus:outline-none"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'} ${mobileNavOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 my-1 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'} ${mobileNavOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'} ${mobileNavOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </nav>
      <div className="h-20" />

      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <div
          ref={mobileNavRef}
          className={`fixed top-24 left-6 right-6 z-40 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-500 ${
            isDarkMode
              ? 'bg-white/5 border-blue-400/20 shadow-blue-900/40'
              : 'bg-white/20 border-blue-600/10 shadow-blue-200/30'
          }`}
          style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
        >
          <div className="p-6 space-y-4">
            <Link href="/" onClick={() => setMobileNavOpen(false)} className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'}`}>Home</Link>
            <Link href="/#four-pillars-section" onClick={() => setMobileNavOpen(false)} className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'}`}>Features</Link>
            <Link href="/#for-everyone-section" onClick={() => setMobileNavOpen(false)} className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'}`}>For Everyone</Link>
            <Link href="/subscription" onClick={() => setMobileNavOpen(false)} className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'}`}>Pricing</Link>
            <Link href="/#contact-section" onClick={() => setMobileNavOpen(false)} className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'}`}>Contact</Link>
          </div>
        </div>
      )}

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

      {/* Pricing Section */}
      <section className="relative z-10 py-16 px-6 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-8">
              CHOOSE YOUR <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>PROTECTION</span>
            </h2>
            <p className={`text-xl font-light max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Choose from individual or family plans. Start with our most popular family plan and experience the future of personal security
            </p>
            
            {/* Subscription Toggle */}
            <div className="flex items-center justify-center gap-4 mt-12 mb-8">
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  !isAnnual
                    ? isDarkMode
                      ? "bg-blue-500/30 text-blue-400 border-2 border-blue-400/50"
                      : "bg-blue-600/30 text-blue-600 border-2 border-blue-600/50"
                    : isDarkMode
                    ? "bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10"
                    : "bg-white/20 text-gray-600 border-2 border-gray-300/30 hover:bg-white/30"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isAnnual
                    ? isDarkMode
                      ? "bg-blue-500/30 text-blue-400 border-2 border-blue-400/50"
                      : "bg-blue-600/30 text-blue-600 border-2 border-blue-600/50"
                    : isDarkMode
                    ? "bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10"
                    : "bg-white/20 text-gray-600 border-2 border-gray-300/30 hover:bg-white/30"
                }`}
              >
                Yearly
                <span className={`absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold rounded-full ${
                  isDarkMode ? "bg-green-500 text-white" : "bg-green-600 text-white"
                }`}>
                  8% OFF
                </span>
              </button>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            {plans.filter(plan => plan.period === (isAnnual ? 'year' : 'month')).map((plan, index) => (
              <div
                key={plan.id}
                className={`group relative flex flex-col h-full min-h-[600px] rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-xl border ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-2xl shadow-blue-900/40"
                    : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-2xl shadow-blue-200/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Content with centered layout */}
                <div className="flex flex-col h-full p-8 justify-between">
                  {/* Top Section - Header and Pricing */}
                  <div className="flex flex-col items-center text-center">
                    {/* Header */}
                    <div className="mb-8">
                      <div className={`mb-4 transition-colors duration-300 flex items-center justify-center text-4xl ${
                        isDarkMode ? "text-blue-400/70 group-hover:text-blue-400" : "text-blue-600/70 group-hover:text-blue-600"
                      }`}>
                        {plan.icon && <plan.icon size={48} />}
                      </div>
                      <h3 className="text-2xl font-light mb-2 tracking-wide">{plan.name}</h3>
                      <p className={`text-sm font-light ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-8">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-light">₹</span>
                        <span className="text-5xl font-thin">{plan.price}</span>
                        <span className="text-lg font-light">/{plan.period}</span>
                      </div>
                      {plan.period === 'year' && (
                        <div className="text-sm text-gray-400 mb-2">
                          ₹{Math.round(plan.price / 12)}/month
                        </div>
                      )}
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center gap-2">
                          <span className={`text-base line-through ${
                            isDarkMode ? "text-gray-500" : "text-gray-400"
                          }`}>
                            ₹{plan.originalPrice}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-600/20 text-green-600'
                          }`}>
                            {plan.savings}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Middle Section - Features */}
                  <div className="flex-1 flex items-center justify-center mb-8">
                    <ul className="space-y-3 w-full">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                            isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-600/20 text-blue-600'
                          }`}>
                            <LuCheck size={10} />
                          </div>
                          <span className={`text-sm font-light ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Section - CTA Button */}
                  <div className="w-full">
                    <button className={`w-full py-3 px-6 rounded-2xl font-medium transition-all duration-300 group ${
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`relative z-10 py-32 px-6 ${
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
      <section className="relative z-10 py-32 px-6">
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
      <section className="relative z-10 py-32 px-6">
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
                  Get Started
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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

            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className={`text-sm font-medium tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Get the app
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.deephorizon.security&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-sm font-light transition-all duration-300 rounded-2xl backdrop-blur-xl border shadow-2xl flex items-center gap-2 ${
                    isDarkMode
                      ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40 text-gray-300 hover:text-white"
                      : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30 text-gray-700 hover:text-black"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 ${isDarkMode ? "focus:ring-offset-black" : "focus:ring-offset-white"}`}
                  aria-label="Download Deep Horizon Security on Google Play"
                >
                  <FaGooglePlay className={isDarkMode ? "text-blue-400" : "text-blue-600"} />
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/in/app/deep-horizon-security/id6755099422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-sm font-light transition-all duration-300 rounded-2xl backdrop-blur-xl border shadow-2xl flex items-center gap-2 ${
                    isDarkMode
                      ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40 text-gray-300 hover:text-white"
                      : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30 text-gray-700 hover:text-black"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 ${isDarkMode ? "focus:ring-offset-black" : "focus:ring-offset-white"}`}
                  aria-label="Download Deep Horizon Security on the App Store"
                >
                  <FaApple className={isDarkMode ? "text-blue-400" : "text-blue-600"} />
                  App Store
                </a>
              </div>
            </div>

            <div className={`text-sm font-light mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Contact us at - Deep Horizon, Ashirwad Bhavan, Maligaon, Guwahati 781012, Assam<br />
              Phone: <a href="tel:+918638071503" className={isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}>+91 8638071503</a>
              <div className="mt-3 flex gap-4">
                <a href="/privacy-policy" className={isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}>Privacy Policy</a>
                <a href="/terms-of-service" className={isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}>Terms of Service</a>
                <a href="/refund-policy" className={isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}>Refund Policy</a>
                <a href="/account-deletion" className={isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}>Account Deletion</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}