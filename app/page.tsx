"use client";
import React, { useState, useEffect } from "react";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Award, 
  Send,
  BookOpen,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { pujaServices, PujaItem } from "../data/pujas";

// Clean SVG Brand Icons
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    selectedPuja: pujaServices[0]?.title || "Griha Pravesh Puja",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("");
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [showAllPujas, setShowAllPujas] = useState(false);
  const [currentSlide, setSlide] = useState(0);
  const [expandedDesc, setExpandedDesc] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (!showAllGallery) {
      const timer = setInterval(() => {
        setSlide((prev) => (prev + 1) % 30);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [showAllGallery]);

  const toggleDescription = (id: string) => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMainFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:devimahindipanditpuja@gmail.com?subject=Puja Booking: ${formData.selectedPuja}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0ADate: ${formData.date}%0D%0ALocation: ${formData.location}%0D%0APuja: ${formData.selectedPuja}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setFormStatus("Opening your email client to send booking details...");
  };

  const handleWhatsAppBooking = (pujaTitle: string) => {
    const text = `Hello Pandit Pradeep Shastri Ji, I want to book "${pujaTitle}". Please share details and availability in Bengaluru.`;
    window.open(`https://wa.me/919187582633?text=${encodeURIComponent(text)}`, "_blank");
  };

  const prevIdx = (currentSlide - 1 + 30) % 30;
  const nextIdx = (currentSlide + 1) % 30;
  const visiblePujas = showAllPujas ? pujaServices : pujaServices.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0800] via-[#240c02] to-[#140600] text-amber-50 relative overflow-x-hidden font-sans selection:bg-amber-500 selection:text-black">
      
      {/* FIXED FLOATING BUTTONS (Left: Phone, Right: WhatsApp) */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="tel:9187582633" 
          aria-label="Call Pandit Pradeep Shastri"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black rounded-full shadow-2xl transition transform hover:scale-110 border-2 border-amber-200/50"
        >
          <Phone className="w-6 h-6 stroke-[2.5]" />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919187582633" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Chat on WhatsApp with Pandit Ji"
          className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition transform hover:scale-110 border-2 border-emerald-200/40"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* BACKGROUND STABLE WATERMARK "माँ" */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none flex flex-wrap content-around justify-around opacity-[0.06] select-none z-0 overflow-hidden text-orange-400 text-2xl font-bold">
        {[...Array(50)].map((_, i) => (
          <span key={i} className="m-8 transform rotate-12">माँ</span>
        ))}
      </div>

      {/* TOP HEADER BAR */}
      <header className="bg-[#2b0f04]/95 border-b border-orange-500/30 sticky top-0 z-40 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-amber-200 font-medium">
              <MapPin className="w-4 h-4 mr-1 text-orange-400" /> Bengaluru, Karnataka
            </span>
            <span className="hidden md:flex items-center text-amber-200 font-medium">
              <Clock className="w-4 h-4 mr-1 text-orange-400" /> 24x7 Vedic Services
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 mr-2">
              <a href="https://www.instagram.com/devimahindipanditpuja/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="p-1.5 rounded-full bg-orange-950/80 text-amber-300 hover:text-white hover:bg-orange-700 border border-orange-500/30 transition">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61596700957339" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="p-1.5 rounded-full bg-orange-950/80 text-amber-300 hover:text-white hover:bg-orange-700 border border-orange-500/30 transition">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/channel/UCrB6CsekDUoVCNX1OlAgkMw" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel" className="p-1.5 rounded-full bg-orange-950/80 text-amber-300 hover:text-white hover:bg-orange-700 border border-orange-500/30 transition">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <a href="tel:9187582633" className="flex items-center text-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 hover:opacity-90 px-3.5 py-1.5 rounded-full font-extrabold transition shadow">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> 9187582633
            </a>
            <a href="https://wa.me/919187582633" target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 rounded-full font-bold transition shadow">
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION WITH LOGO EMBLEM */}
        <section className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-[#381203] via-[#240c02] to-[#1a0800] border-b border-orange-500/25">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text & CTA Buttons */}
            <div className="text-center md:text-left">
              <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-400/40 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide shadow-sm">
                ✨ Best North Indian Hindi Pandit in Bengaluru ✨
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md leading-tight">
                Devi Ma Hindi Pandit Puja <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300">Services</span>
              </h1>
              <p className="text-base md:text-lg text-amber-100/90 mb-8 leading-relaxed">
                Invite divine grace, peace, and prosperity into your home or office in Bengaluru with authentic Vedic rituals performed by Pandit Pradeep Shastri with pure devotion and scriptural accuracy.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#pujas" className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:opacity-90 text-black font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5">
                  Explore All 36 Pujas
                </a>
                <a href="#booking-form" className="bg-[#381203] hover:bg-[#4d1904] text-amber-300 border border-orange-400/50 font-bold px-8 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5">
                  Book Puja Online
                </a>
              </div>
            </div>

            {/* Right Column: Circular Emblem Logo */}
            <div className="flex justify-center items-center relative">
              <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-300 shadow-2xl transform hover:scale-105 transition duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1a0800] border-4 border-[#2b0f04] flex items-center justify-center">
                  <img 
                    src="/logo-emblem/Devotional Durga Pandit Puja Emblem.png" 
                    alt="Devi Ma Hindi Pandit Puja Emblem" 
                    width={400}
                    height={400}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PANDIT PROFILE SECTION */}
        <section id="profile" className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
          <div className="bg-[#2b0f04]/95 border border-orange-500/40 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-300 p-1 shadow-xl overflow-hidden">
                  <img 
                    src="/pandit/pandit.png" 
                    alt="Pandit Pradeep Shastri - Hindi Pandit in Bengaluru" 
                    width={192}
                    height={192}
                    fetchPriority="high"
                    className="w-full h-full object-cover rounded-xl bg-[#1a0800]"
                  />
                </div>
                <div className="mt-4 inline-flex items-center bg-orange-500/20 text-amber-300 border border-orange-500/40 px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <Award className="w-4 h-4 mr-1.5 text-orange-400" /> 20+ Years Vedic Experience
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-1">Pandit Pradeep Shastri</h2>
                <p className="text-orange-400 font-semibold mb-4 text-lg">Shastri, Balanand Ashram, Deoghar</p>
                <p className="text-amber-100/90 leading-relaxed mb-6">
                  With over two decades of dedicated mastery in Vedic scriptures, rituals, and astrological sciences, Pandit Pradeep Shastri provides authentic North Indian spiritual guidance across Bengaluru. Having completed his formal Shastri education from the revered Balanand Ashram in Deoghar 20 years ago, he ensures every ceremony—from Griha Pravesh to Vivah Sanskar—is executed with pure mantras, absolute precision, and traditional sanctity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-amber-100 mb-6">
                  <div className="flex items-center bg-[#1a0800]/80 p-3 rounded-xl border border-orange-500/30">
                    <BookOpen className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
                    <span>Education: Shastri (Balanand Ashram, Deoghar)</span>
                  </div>
                  <div className="flex items-center bg-[#1a0800]/80 p-3 rounded-xl border border-orange-500/30">
                    <Clock className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
                    <span>Experience: 20+ Years in Bengaluru</span>
                  </div>
                  <div className="flex items-center bg-[#1a0800]/80 p-3 rounded-xl border border-orange-500/30">
                    <Phone className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
                    <span>Direct Contact: +91 9187582633</span>
                  </div>
                  <div className="flex items-center bg-[#1a0800]/80 p-3 rounded-xl border border-orange-500/30">
                    <Mail className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
                    <span>Email: devimahindipanditpuja@gmail.com</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 mr-1">Connect with Pandit Ji:</span>
                  <a 
                    href="https://www.instagram.com/devimahindipanditpuja/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition"
                  >
                    <InstagramIcon className="w-4 h-4" /> Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61596700957339" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition"
                  >
                    <FacebookIcon className="w-4 h-4" /> Facebook
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCrB6CsekDUoVCNX1OlAgkMw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition"
                  >
                    <YoutubeIcon className="w-4 h-4" /> YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PUJA GALLERY SECTION */}
        <section className="relative z-10 py-16 px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Glimpse of Performed Rituals</h2>
          <p className="text-amber-200/80 max-w-xl mx-auto mb-10">Moments of divine devotion and sacred Vedic ceremonies conducted across Bengaluru.</p>

          {!showAllGallery ? (
            <div className="relative">
              <div className="flex justify-center items-center gap-3 md:gap-6 overflow-hidden py-4">
                <div className="w-1/4 md:w-1/5 h-36 md:h-52 rounded-xl overflow-hidden opacity-60 transform scale-95 shadow-md border border-orange-500/30">
                  <img src={`/gallery/${prevIdx + 1}.jpeg`} alt="Previous Puja Ritual in Bengaluru" loading="lazy" className="w-full h-full object-cover" />
                </div>

                <div className="w-1/2 md:w-2/5 h-48 md:h-72 rounded-2xl overflow-hidden shadow-2xl transform scale-105 z-10 border-2 border-orange-400">
                  <img src={`/gallery/${currentSlide + 1}.jpeg`} alt="Vedic Puja Ceremony Highlight" className="w-full h-full object-cover" />
                </div>

                <div className="w-1/4 md:w-1/5 h-36 md:h-52 rounded-xl overflow-hidden opacity-60 transform scale-95 shadow-md border border-orange-500/30">
                  <img src={`/gallery/${nextIdx + 1}.jpeg`} alt="Upcoming Puja Glimpse" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => setShowAllGallery(true)}
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 hover:opacity-90 text-black font-extrabold px-8 py-3 rounded-full shadow-lg transition inline-flex items-center text-sm md:text-base"
                >
                  See all previous puja photo <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {[...Array(30)].map((_, idx) => {
                  const photoNum = idx + 1;
                  return (
                    <div key={photoNum} className="relative group overflow-hidden rounded-2xl border border-orange-500/35 bg-[#2b0f04] shadow-lg h-44">
                      <img 
                        src={`/gallery/${photoNum}.jpeg`} 
                        alt={`Performed Vedic Ritual ${photoNum}`} 
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={() => setShowAllGallery(false)}
                className="bg-[#381203] hover:bg-[#4d1904] text-amber-300 border border-orange-400/50 font-semibold px-8 py-3 rounded-full shadow-lg transition inline-flex items-center text-sm md:text-base"
              >
                Show Less <ChevronUp className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </section>

        {/* PUJA SERVICES LIST */}
        <section id="pujas" className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Comprehensive Vedic Catalog</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-1 mb-3">Sacred Puja Services in Bengaluru</h2>
            <p className="text-amber-200/80 max-w-2xl mx-auto">Authentic North Indian Hindi rituals conducted with complete scriptural details by Pandit Pradeep Shastri.</p>
          </div>

          <div className={`grid ${showAllPujas ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 max-w-4xl mx-auto"} gap-6`}>
            {visiblePujas.map((puja: PujaItem) => {
              const isExpanded = expandedDesc[puja.id];
              return (
                <article key={puja.id} className="bg-[#2b0f04]/95 border border-orange-500/35 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-orange-400 transition">
                  <div>
                    <div className="h-44 rounded-xl bg-[#1a0800] border border-orange-500/25 mb-4 overflow-hidden relative shadow-inner">
                      <img src={puja.image} alt={`${puja.title} in Bengaluru`} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-orange-300">{puja.title}</h3>
                    </div>
                    <p className={`text-amber-100/90 text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
                      {puja.description}
                    </p>
                    <button 
                      onClick={() => toggleDescription(puja.id)}
                      className="text-orange-400 text-xs font-bold mt-2 hover:underline focus:outline-none"
                    >
                      {isExpanded ? "See Less" : "See More..."}
                    </button>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-orange-500/25 mt-4">
                    <button 
                      onClick={() => handleWhatsAppBooking(puja.title)}
                      className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition shadow"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> Book via WhatsApp
                    </button>
                    <a 
                      href="#booking-form"
                      onClick={() => setFormData({...formData, selectedPuja: puja.title})}
                      className="w-full flex items-center justify-center bg-orange-500/15 hover:bg-orange-500/25 text-amber-300 border border-orange-400/40 font-bold py-2.5 px-4 rounded-xl text-sm transition text-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" /> Book via Form
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => setShowAllPujas(!showAllPujas)}
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 hover:opacity-90 text-black font-extrabold px-8 py-3.5 rounded-full shadow-xl transition inline-flex items-center text-sm md:text-base"
            >
              {showAllPujas ? (
                <>Show Less Puja List <ChevronUp className="w-5 h-5 ml-2" /></>
              ) : (
                <>See More Puja List ({pujaServices.length - 2} More) <ChevronDown className="w-5 h-5 ml-2" /></>
              )}
            </button>
          </div>
        </section>

        {/* DIRECT BOOKING FORM SECTION */}
        <section id="booking-form" className="relative z-10 py-16 px-4 max-w-3xl mx-auto">
          <div className="bg-[#2b0f04]/95 border border-orange-400/45 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Book Your Puja Online</h2>
              <p className="text-orange-300 text-sm">Fill out the form below to send booking details directly to Pandit Pradeep Shastri.</p>
            </div>

            {formStatus && (
              <div role="status" className="mb-6 p-4 bg-emerald-900/50 border border-emerald-400 text-emerald-200 rounded-xl text-sm text-center font-medium">
                {formStatus}
              </div>
            )}

            <form onSubmit={handleMainFormSubmit} className="space-y-5">
              <div>
                <label htmlFor="puja-select" className="block text-xs font-semibold text-amber-200 mb-1">Select Puja Service</label>
                <select 
                  id="puja-select"
                  value={formData.selectedPuja}
                  onChange={(e) => setFormData({...formData, selectedPuja: e.target.value})}
                  className="w-full bg-[#1a0800] border border-orange-500/30 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-400 outline-none"
                >
                  {pujaServices.map((p) => (
                    <option key={p.id} value={p.title}>{p.title}</option>
                  ))}
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-semibold text-amber-200 mb-1">Your Full Name</label>
                  <input 
                    id="user-name"
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#1a0800] border border-orange-500/30 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-400 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="user-phone" className="block text-xs font-semibold text-amber-200 mb-1">Phone Number</label>
                  <input 
                    id="user-phone"
                    type="tel" 
                    required 
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#1a0800] border border-orange-500/30 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-400 outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="puja-date" className="block text-xs font-semibold text-amber-200 mb-1">Preferred Date</label>
                  <input 
                    id="puja-date"
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-[#1a0800] border border-orange-500/30 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-400 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="puja-location" className="block text-xs font-semibold text-amber-200 mb-1">Bengaluru Location / Address</label>
                  <input 
                    id="puja-location"
                    type="text" 
                    required 
                    placeholder="e.g. Whitefield, Marathahalli, HSR Layout"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-[#1a0800] border border-orange-500/30 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-400 outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="puja-msg" className="block text-xs font-semibold text-amber-200 mb-1">Additional Message / Requirements</label>
                <textarea 
                  id="puja-msg"
                  rows={3}
                  placeholder="Any specific muhurat or samagri details..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#1a0800] border border-orange-500/30 rounded-xl px-4 py-3 text-white text-sm focus:border-orange-400 outline-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 hover:opacity-90 text-black font-extrabold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center text-base"
              >
                <Send className="w-5 h-5 mr-2" /> Send Booking Details to Email
              </button>
            </form>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative z-10 py-16 px-4 max-w-4xl mx-auto border-t border-orange-500/25">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-amber-200/80">Everything you need to know about booking North Indian Hindi Pandit services in Bengaluru.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How do I book a Hindi Pandit in Bengaluru with Pandit Pradeep Shastri?",
                a: "You can easily book by clicking the floating WhatsApp button for instant confirmation or use the booking form above to send your requirements directly to devimahindipanditpuja@gmail.com."
              },
              {
                q: "Does Pandit ji bring all necessary puja samagri?",
                a: "Yes, upon request, Pandit Pradeep Shastri provides a complete puja samagri list and can arrange essential sacred items for your ritual anywhere in Bengaluru."
              },
              {
                q: "Which areas in Bengaluru do you cover?",
                a: "We serve all major Bengaluru areas including Whitefield, Electronic City, Marathahalli, HSR Layout, Koramangala, Indiranagar, Sarjapur Road, Yelahanka, Hebbal, and nearby localities."
              },
              {
                q: "What is Pandit Pradeep Shastri's qualification and experience?",
                a: "Pandit Pradeep Shastri holds a Shastri degree from the esteemed Balanand Ashram, Deoghar, and brings over 20 years of dedicated experience in performing authentic Vedic pujas."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#2b0f04]/90 border border-orange-500/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-orange-300 mb-2">{faq.q}</h3>
                <p className="text-amber-100/90 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRIVACY POLICY & TERMS SUMMARY */}
        <section className="relative z-10 py-12 px-4 max-w-4xl mx-auto border-t border-orange-500/25 text-amber-200/75 text-xs">
          <h3 className="text-orange-300 font-bold text-sm mb-2">Privacy Policy & Terms of Service</h3>
          <p className="leading-relaxed mb-4">
            At Devi Ma Hindi Pandit Puja (`devimahindipanditpuja.com`), we respect your privacy and protect any personal information shared during puja bookings (such as phone numbers, names, and addresses in Bengaluru). Your details are solely used for coordinating ritual services with Pandit Pradeep Shastri and are never shared with third parties. All bookings are subject to muhurat availability and traditional customs.
          </p>
        </section>
      </main>

      {/* FOOTER WITH SOCIAL LINKS & DEVELOPER CREDIT */}
      <footer className="relative z-10 bg-[#120400] border-t border-orange-500/30 py-10 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-amber-200/80">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-1">Devi Ma Hindi Pandit Puja</p>
            <p>Best North Indian Hindi Pandit in Bengaluru | Email: devimahindipanditpuja@gmail.com</p>
            
            <div className="flex justify-center md:justify-start items-center space-x-3 mt-4">
              <a href="https://www.instagram.com/devimahindipanditpuja/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-[#2b0f04] text-amber-300 hover:text-white border border-orange-500/30 transition">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61596700957339" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-[#2b0f04] text-amber-300 hover:text-white border border-orange-500/30 transition">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/channel/UCrB6CsekDUoVCNX1OlAgkMw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-full bg-[#2b0f04] text-amber-300 hover:text-white border border-orange-500/30 transition">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-[#2b0f04] border border-orange-500/40 px-5 py-3 rounded-2xl text-amber-200 font-medium shadow-lg">
            Designed & Developed by <strong className="text-white">Prince Pandey</strong> 
            <a href="tel:7667984349" className="ml-2 text-amber-400 underline font-bold">+91 7667984349</a>
          </div>
        </div>
      </footer>

    </div>
  );
}