import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, Award, ArrowLeft, CheckCircle2 } from "lucide-react";
import { bengaluruLocations } from "../../data/locations";
import { pujaServices } from "../../data/pujas";

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateStaticParams() {
  return bengaluruLocations.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const locData = bengaluruLocations.find((l) => l.slug === location);
  if (!locData) return {};

  const title = `Best North Indian Hindi Pandit in ${locData.name}, Bengaluru | Pandit Pradeep Shastri`;
  const description = `Book experienced North Indian Hindi Pandit Pradeep Shastri in ${locData.name}, Bengaluru (20+ Yrs Exp, Balanand Ashram Deoghar) for Griha Pravesh, Satyanarayan Puja, Rudrabhishek, Vivah & all Vedic rituals.`;

  return {
    title,
    description,
    keywords: [
      `Hindi Pandit in ${locData.name}`,
      `Best Pandit in ${locData.name} Bangalore`,
      `North Indian Pandit in ${locData.name}`,
      `Griha Pravesh Pandit in ${locData.name}`,
      `Satyanarayan Puja Pandit in ${locData.name}`,
      "Pandit Pradeep Shastri Bengaluru",
    ],
    alternates: {
      canonical: `https://devimahindipanditpuja.com/${locData.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const locData = bengaluruLocations.find((l) => l.slug === location);

  if (!locData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0800] via-[#240c02] to-[#140600] text-amber-50 font-sans">
      <header className="bg-[#2b0f04]/95 border-b border-orange-500/30 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center text-amber-300 hover:text-white font-semibold text-sm">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <a href="tel:9187582633" className="bg-amber-500 text-black font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1" /> 9187582633
            </a>
            <a href={`https://wa.me/919187582633?text=${encodeURIComponent(`Hello Pandit Ji, I need a Hindi Pandit in ${locData.name}, Bengaluru.`)}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm flex items-center">
              <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#2b0f04]/90 border border-orange-500/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl mb-12">
          <span className="inline-flex items-center bg-orange-500/20 text-orange-300 border border-orange-400/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 mr-1.5 text-orange-400" /> Doorstep Vedic Services in {locData.name}, Bengaluru
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Best North Indian Hindi Pandit in <span className="text-amber-400">{locData.name}</span>
          </h1>
          <p className="text-amber-100/90 max-w-3xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
            Looking for an authentic, experienced North Indian Hindi Pandit in <strong>{locData.name}, Bengaluru</strong>? Pandit Pradeep Shastri performs all Vedic rituals, pujas, and havans at your home or office in {locData.name} with complete samagri guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/919187582633?text=${encodeURIComponent(`Namaste Pandit Ji, I want to book a Puja in ${locData.name}, Bengaluru.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Book Pandit in {locData.name}
            </a>
            <a href="tel:9187582633" className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold px-8 py-3.5 rounded-xl shadow-lg flex items-center">
              <Phone className="w-5 h-5 mr-2" /> Call +91 9187582633
            </a>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
            Popular Puja Services in {locData.name}
          </h2>
          <p className="text-amber-200/80 text-center mb-8 text-sm">
            Click on any puja below to view full ritual details and book in {locData.name}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pujaServices.map((puja) => (
              <div key={puja.id} className="bg-[#2b0f04] border border-orange-500/35 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-400 transition shadow-lg">
                <div>
                  <div className="h-40 rounded-xl overflow-hidden mb-4 bg-[#1a0800]">
                    <img src={puja.image} alt={`${puja.title} in ${locData.name}`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-orange-300 mb-2">
                    {puja.title} in {locData.name}
                  </h3>
                  <p className="text-amber-100/85 text-xs line-clamp-3 mb-4 leading-relaxed">
                    {puja.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-orange-500/20">
                  <Link
                    href={`/${locData.slug}/${puja.id}`}
                    className="block w-full text-center bg-orange-500/20 hover:bg-orange-500/30 text-amber-300 border border-orange-400/40 font-bold py-2 rounded-xl text-xs transition"
                  >
                    View Details & Samagri
                  </Link>
                  <a
                    href={`https://wa.me/919187582633?text=${encodeURIComponent(`Namaste Pandit Ji, I want to book "${puja.title}" in ${locData.name}, Bengaluru.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" /> Instant WhatsApp Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#2b0f04]/80 border border-orange-500/30 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 text-orange-400 mr-2" /> Why Book Pandit Pradeep Shastri in {locData.name}?
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-amber-100/90">
            <p className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> 20+ Years Experience in Bengaluru</p>
            <p className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> Qualified Shastri (Balanand Ashram, Deoghar)</p>
            <p className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> Authentic North Indian Hindi & Sanskrit Mantras</p>
            <p className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> Punctual Doorstep Service across {locData.name}</p>
          </div>
        </div>
      </main>
    </div>
  );
}