"use client";

import React, { useState, useEffect, useRef } from "react";
import { LuMonitor, LuTarget, LuShieldCheck, LuAlarmClock, LuBriefcase, LuMoon, LuGraduationCap, LuPlane, LuUser, LuHeartHandshake, LuHouse, LuLayers, LuUser as LuUserIcon, LuPhoneCall } from "react-icons/lu";
import Link from "next/link";

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
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

  // Close mobile nav on outside click
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const features = [
    {
      title: "Video Monitor",
      description: `Instantly connect via video with a trained security agent when feeling unsafe.\n\n24/7 live agent response, HD video quality, encrypted connections`,
      icon: LuMonitor
    },
    {
      title: "Track Me",
      description: `Continuous monitoring with periodic check-ins during travel or risky situations.\n\nGPS tracking, automated tracking, escalation when needed`,
      icon: LuTarget
    },
    {
      title: "Security Check",
      description: `Schedule future check-ins where your safety is proactively verified.\n\nCustom schedules, multiple verification methods, escalation protocols`,
      icon: LuShieldCheck
    },
    {
      title: "Ready Response",
      description: `Discreet safety feature - hold the button, active verification if released without cancelation.\n\nSilent activation, location track, emergency dispatch orchestration`,
      icon: LuAlarmClock
    }
  ];

  const userTypes = [
    { label: "Urban Professionals", icon: LuBriefcase, description: "City dwellers navigating busy streets and late-night commutes" },
    { label: "Night Shift Workers", icon: LuMoon, description: "Healthcare workers, service industry professionals, travellers and security guards" },
    { label: "Students", icon: LuGraduationCap, description: "School and college students in dynamic environments" },
    { label: "Travellers", icon: LuPlane, description: "Business travellers and tourists in unfamiliar locations" },
    { label: "Women", icon: LuUser, description: "Specialized features for women's unique needs" },
    { label: "Senior Citizens", icon: LuHeartHandshake, description: "Elderly individuals who want independance with peace of mind" }
  ];


  return (
    <div
      className={isDarkMode 
        ? "min-h-screen overflow-hidden relative transition-all duration-500 bg-black text-white"
        : "min-h-screen overflow-hidden relative transition-all duration-500 bg-gradient-to-br from-gray-50 via-blue-50 via-purple-100 to-gray-100 text-gray-900"
      }
      data-oid="p_e5k48">

      {/* Navigation Bar */}
      <nav className={`fixed top-6 left-0 right-0 mx-auto max-w-5xl z-50 px-6 py-3 rounded-3xl backdrop-blur-xl shadow-2xl transition-all duration-500 flex items-center justify-between overflow-hidden ${isDarkMode ? 'bg-white/5 text-white shadow-blue-900/40' : 'bg-white/20 text-gray-900 shadow-blue-200/30'}`}
        style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-0"
          style={{
            background: 'linear-gradient(90deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.10) 100%)',
            opacity: isDarkMode ? 0.18 : 0.22
          }}
        />
        <div className="flex items-center justify-between w-full relative z-10">
          <button
            className="flex items-center font-bold text-xl tracking-tight select-none focus:outline-none transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to top"
          >
            <img src="/images/logotransparent.png" alt="Deep Horizon Logo" className="h-9 w-auto mr-2" />
            <span>Deep </span><span className={isDarkMode ? 'text-blue-400 hover:text-blue-500' : 'text-blue-600 hover:text-blue-500'}>Horizon</span>
          </button>
          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8 text-base font-medium">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Home</button>
            <button onClick={() => { const el = document.getElementById('four-pillars-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Features</button>
            <button onClick={() => { const el = document.getElementById('for-everyone-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>For Everyone</button>
            <a href="/subscription" className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Pricing</a>
            <button onClick={() => { const el = document.getElementById('contact-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className={`transition-all duration-300 px-3 py-1 rounded-xl hover:text-blue-500 focus:outline-none hover:shadow-md ${isDarkMode ? 'hover:bg-blue-400/5 hover:shadow-blue-400/15' : 'hover:bg-blue-100/30 hover:shadow-blue-400/15'}`}>Contact</button>
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
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileNavOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => { const el = document.getElementById('four-pillars-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); setMobileNavOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => { const el = document.getElementById('for-everyone-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); setMobileNavOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'
              }`}
            >
              For Everyone
            </button>
            <a
              href="/subscription"
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'
              }`}
              onClick={() => setMobileNavOpen(false)}
            >
              Pricing
            </a>
            <button
              onClick={() => { const el = document.getElementById('contact-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); setMobileNavOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-gray-900'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
      <div className="h-20" /> {/* Spacer for navbar */}

      {/* Animated Background */}
      <div
        className={`fixed inset-0 transition-opacity duration-500 ${isDarkMode ? "opacity-30" : "opacity-20"}`}
        data-oid="u8ydufv">

        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out ${
          isDarkMode ? "bg-blue-500/20" : "bg-blue-400/30"}`
          }
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192
          }}
          data-oid="s.pogn8" />


        <div
          className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl animate-pulse ${
          isDarkMode ? "bg-purple-500/10" : "bg-purple-400/20"}`
          }
          data-oid=".9ksa.h" />


        <div
          className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDarkMode ? "bg-cyan-500/10" : "bg-cyan-400/20"}`
          }
          data-oid="-j73o5s" />

      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6"
        data-oid="6yzix29">

        {/* Security Command Center Background */}
        <div className="absolute inset-0 overflow-hidden" data-oid="o8gdgs4">
          {/* Base gradient */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ?
            "bg-gradient-to-br from-slate-900 via-blue-900/30 to-black" :
            "bg-gradient-to-br from-blue-50 via-purple-100/60 to-gray-100"}`
            }
            data-oid="qbqxmws" />


          {/* Grid pattern overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? "opacity-20" : "opacity-10"}`}
            data-oid="cmsuquj">

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
              data-oid="9makza0" />

          </div>

          {/* Simulated monitor screens */}
          <div
            className={`absolute top-20 left-10 w-32 h-20 rounded border blur-sm transition-all duration-500 ${
            isDarkMode ?
            "bg-blue-500/10 border-blue-500/30" :
            "bg-blue-400/20 border-blue-400/40"}`
            }
            data-oid="gurutd0" />


          <div
            className={`absolute top-40 right-20 w-40 h-24 rounded border blur-sm transition-all duration-500 ${
            isDarkMode ?
            "bg-cyan-500/10 border-cyan-500/30" :
            "bg-cyan-400/20 border-cyan-400/40"}`
            }
            data-oid="qcj:lfb" />


          <div
            className={`absolute bottom-32 left-20 w-36 h-22 rounded border blur-sm transition-all duration-500 ${
            isDarkMode ?
            "bg-purple-500/10 border-purple-500/30" :
            "bg-purple-400/20 border-purple-400/40"}`
            }
            data-oid="7a6943n" />


          <div
            className={`absolute bottom-20 right-10 w-28 h-18 rounded border blur-sm transition-all duration-500 ${
            isDarkMode ?
            "bg-green-500/10 border-green-500/30" :
            "bg-green-400/20 border-green-400/40"}`
            }
            data-oid="b25v:2m" />


          {/* Scanning lines effect */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? "opacity-30" : "opacity-20"}`}
            data-oid="fnolcol">

            <div
              className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent animate-pulse ${
              isDarkMode ? "via-blue-400/70" : "via-blue-500/50"}`
              }
              data-oid="2qt370h" />


            <div
              className={`absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent animate-pulse ${
              isDarkMode ? "via-cyan-400/50" : "via-cyan-500/40"}`
              }
              style={{ animationDelay: "1s" }}
              data-oid="lt62d-p" />


            <div
              className={`absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent animate-pulse ${
              isDarkMode ? "via-purple-400/50" : "via-purple-500/40"}`
              }
              style={{ animationDelay: "2s" }}
              data-oid="g6_0yu3" />

          </div>

          {/* Radial overlay for focus */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: isDarkMode ?
              "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)" :
              "radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.5) 100%)"
            }}
            data-oid="hijinnv" />


          {/* Blur overlay */}
          <div
            className={`absolute inset-0 backdrop-blur-2xl transition-all duration-500 ${
            isDarkMode ? "bg-black/30" : "bg-white/20"}`
            }
            data-oid="m51ynay" />

        </div>

        <div
          className={`relative z-10 text-center max-w-4xl transition-all duration-2000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
          }
          data-oid="-.1pmzl">

          <div className="mb-8" data-oid="n7-etom">
            <h1
              className="text-7xl md:text-9xl font-thin tracking-tighter mb-6 leading-none"
              data-oid="1amj6hd">

              <span
                className={`block bg-gradient-to-r bg-clip-text text-transparent animate-pulse ${
                isDarkMode ?
                "from-white via-blue-100 to-white" :
                "from-gray-900 via-blue-600 to-gray-900"}`
                }
                data-oid="gd9ge8e">

                DEEP
              </span>
              <span
                className={`block text-6xl md:text-8xl font-extralight -mt-4 ${
                isDarkMode ? "text-blue-400/80" : "text-blue-600/80"}`
                }
                data-oid="m1et20z">

                HORIZON
              </span>
            </h1>
            <div
              className={`w-24 h-px bg-gradient-to-r from-transparent to-transparent mx-auto mb-8 animate-pulse ${
              isDarkMode ? "via-blue-400" : "via-blue-600"}`
              }
              data-oid="sjbehm." />

          </div>

          <p
            className={`text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-700"}`
            }
            data-oid="66aa3l2">

            Personal security concierge.
            <br data-oid="pj7xfqt" />
            <span
              className={isDarkMode ? "text-blue-400" : "text-blue-600"}
              data-oid="rgh3vsj">
              Real-time monitoring.
            </span>{" "}
            Human backup. Silent alarms.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            data-oid=".g-6tbh">

            <button
              className={`px-8 py-4 font-light transition-all duration-300 group rounded-2xl backdrop-blur-xl border shadow-2xl ${
                isDarkMode
                  ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40 text-gray-300 hover:text-white"
                  : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30 text-gray-600 hover:text-black"}`}
              onClick={() => {
                const el = document.getElementById('four-pillars-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              data-oid="irz.20m">

              <span className="flex items-center gap-2" data-oid="2v9vfiq">
                LEARN MORE
                <span
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                  data-oid="1et-o1g">

                  →
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
          data-oid="l2r6qpa">

          <div
            className={`w-px h-16 bg-gradient-to-b from-transparent to-transparent ${
            isDarkMode ? "via-gray-400" : "via-gray-600"}`
            }
            data-oid="-xnjqc2" />

        </div>
      </section>

      {/* Features Section */}
      <section id="four-pillars-section" className="relative py-32 px-6" data-oid="t5v9-2.">
        <div className="max-w-6xl mx-auto" data-oid="3ifmoj2">
          <div className="text-center mb-20" data-oid="t7ofhp2">
            <h2
              className="text-2xl md:text-4xl font-light tracking-wide mb-8 max-w-3xl mx-auto"
              data-oid="h.cfd:f">
              These aren't just features. They’re <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>lifelines</span> for moments that feel uncertain or unsafe.
            </h2>
          </div>

          {/* Bento Grid */}
          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-2 auto-rows-fr ${isDarkMode ? "bg-gray-800/0" : "bg-gray-300/0"}`}
            data-oid="bento-bento">
            {/* Large bento block (first feature) */}
            <div
              className={`group p-10 md:col-span-2 md:row-span-2 flex flex-col justify-center rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-xl border border-white/20 hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-2xl shadow-blue-900/40"
                  : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-2xl shadow-blue-200/30"
              }`}
              style={{ animationDelay: `0ms` }}
              data-oid="bento-large">
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode ? "from-blue-500/5 to-purple-500/5" : "from-blue-400/10 to-purple-400/10"
                }`}
                data-oid="ftv3vvn" />
              <div className="relative z-10 flex flex-col items-center text-center">
                                  <div
                    className={`mb-4 transition-all duration-300 flex items-center justify-center group-hover:scale-110 ${
                      isDarkMode ? "text-blue-400/60 group-hover:text-blue-400" : "text-blue-600/60 group-hover:text-blue-600"
                    }`}
                    data-oid="3jol.x3">
                    {features[0].icon && React.createElement(features[0].icon, { size: 64 })}
                  </div>
                <h3 className="text-3xl font-light mb-4 tracking-wide text-center max-w-xs mx-auto group-hover:scale-105 transition-transform duration-300" data-oid="yn.yd76">
                  {features[0].title}
                </h3>
                <p
                  className={`font-light leading-relaxed transition-colors duration-300 text-center max-w-md mx-auto ${
                    isDarkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"
                  }`}
                  data-oid="z8hfi_.">
                  {features[0].description.split('\n').map((line, idx) => (<React.Fragment key={idx}>{line}<br /></React.Fragment>))}
                </p>
              </div>
            </div>
            {/* Small bento blocks (features 2-4) */}
            {features.slice(1).map((feature, i) => (
              <div
                key={feature.title}
                className={`group p-8 flex flex-col justify-center rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-xl border border-white/20 hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-2xl shadow-blue-900/40"
                    : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-2xl shadow-blue-200/30"
                } ${feature.title === 'Ready Response' ? 'md:col-span-2' : ''}`}
                style={{ animationDelay: `${(i + 1) * 200}ms` }}
                data-oid={`bento-small-${i}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDarkMode ? "from-blue-500/5 to-purple-500/5" : "from-blue-400/10 to-purple-400/10"
                  }`}
                  data-oid="ftv3vvn" />
                <div className="relative z-10">
                  <div
                    className={`mb-4 transition-all duration-300 flex items-center justify-center group-hover:scale-110 ${
                      isDarkMode ? "text-blue-400/60 group-hover:text-blue-400" : "text-blue-600/60 group-hover:text-blue-600"
                    }`}
                    data-oid="3jol.x3">
                    {feature.icon && React.createElement(feature.icon, { size: 40 })}
                  </div>
                  <h3 className="text-xl font-light mb-2 tracking-wide group-hover:scale-105 transition-transform duration-300" data-oid="yn.yd76">
                    {feature.title}
                  </h3>
                  <p
                    className={`font-light leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"
                    }`}
                    data-oid="z8hfi_.">
                    {feature.description.split('\n').map((line, idx) => (<React.Fragment key={idx}>{line}<br /></React.Fragment>))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section
        id="for-everyone-section"
        className={`relative py-32 px-6 ${
        isDarkMode ? "bg-gray-900/20" : "bg-gray-100/50"}`
        }
        data-oid="arbt1:u">

        <div className="max-w-4xl mx-auto text-center" data-oid="ugt:gwb">
          <h2
            className="text-4xl md:text-5xl font-thin tracking-wider mb-16"
            data-oid="91-ke7l">
            BUILT FOR EVERYONE'S {" "}
            <span
              className={isDarkMode ? "text-blue-400" : "text-blue-600"}
              data-oid="42g1l77">
              SAFETY
            </span>
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            data-oid="xzzgy:i">
            {userTypes.map((user, index) => (
              <div
                key={user.label}
                className={`group p-8 flex flex-col items-center justify-center rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40"
                    : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-oid="bento-user">
                <div
                  className={`mb-4 transition-all duration-300 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 ${
                    isDarkMode ? "text-blue-400/70 group-hover:text-blue-400" : "text-blue-600/70 group-hover:text-blue-600"
                  }`}
                  data-oid="user-icon">
                  {user.icon && React.createElement(user.icon, { size: 36 })}
                </div>
                <p
                  className={`text-xl font-light text-center transition-all duration-300 group-hover:scale-105 ${
                    isDarkMode ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-black"
                  }`}
                  data-oid="1mrzm5-">
                  {user.label}
                </p>
                <p
                  className={`text-sm font-light mt-2 text-center transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400 group-hover:text-white/80" : "text-gray-500 group-hover:text-black/80"
                  }`}
                  data-oid="user-desc">
                  {user.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section
        className={`relative py-24 px-6 flex items-center justify-center ${isDarkMode ? 'bg-black/30' : 'bg-white/60'}`}
        id="privacy-section"
      >
        <div className="max-w-2xl mx-auto rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 p-10 text-center flex flex-col items-center justify-center"
          style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
            YOUR PRIVACY, <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>PROTECTED</span>
          </h2>
          <p className={`text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Deep Horizon is built with your safety and privacy at its core. Your location, video feeds, and personal data are encrypted and never shared without your consent. We operate with strict protocols to ensure your information stays secure - always.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="relative py-32 px-6" data-oid=".:7:li3">
        <div className="max-w-3xl mx-auto text-center" data-oid="ibnh2pu">
          <h2
            className="text-5xl md:text-7xl font-thin tracking-tighter mb-8 leading-tight"
            data-oid="-raihwf">
            PROTECT WHAT <span className={isDarkMode ? "text-blue-400 font-semibold" : "text-blue-600 font-semibold"}>MATTERS MOST</span>
          </h2>

          <p
            className={`text-xl font-light mb-12 max-w-xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-700"}`
            }
            data-oid="8loun9w">

            Join the future of personal security. 24/7 protection, one tap away.
          </p>

          <div
            className="flex justify-center"
            data-oid="0p_07w9">

            <button
              className={`px-12 py-5 font-light transition-all duration-300 rounded-2xl backdrop-blur-xl border shadow-2xl ${
                isDarkMode
                  ? "bg-white/5 hover:bg-white/10 border-blue-400/20 shadow-blue-900/40 text-gray-300 hover:text-blue-400"
                  : "bg-white/20 hover:bg-white/30 border-blue-600/10 shadow-blue-200/30 text-gray-600 hover:text-blue-600"}`}
              data-oid="98in30t"
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) footer.scrollIntoView({ behavior: 'smooth' });
              }}>
              CONTACT US
            </button>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer
        className={`relative border-t py-16 px-6 ${
        isDarkMode ? "border-gray-800" : "border-gray-300"}`
        }
        data-oid="_av5xy.">

        <div className="max-w-6xl mx-auto" data-oid="evqbulo">
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-oid="kgeqw_n">

            <div className="mb-8 md:mb-0" data-oid="hc34aou">
              <h3
                className="text-2xl font-thin tracking-wider"
                data-oid="8vt4_ox">

                DEEP{" "}
                <span
                  className={isDarkMode ? "text-blue-400" : "text-blue-600"}
                  data-oid="wlkr1f8">

                  HORIZON
                </span>
              </h3>
              <p
                className={`text-sm font-light mt-2 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"}`
                }
                data-oid="ol8m5ns">
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
    </div>);

}