import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, Award, ArrowLeft, CheckCircle2, Calendar } from "lucide-react";
import { bengaluruLocations } from "../../../data/locations";
import { pujaServices } from "../../../data/pujas";

type Props = {
  params: Promise<{ location: string; service: string }>;
};

export async function generateStaticParams() {
  const paths: { location: string; service: string }[] = [];
  for (const loc of bengaluruLocations) {
    for (const puja of pujaServices) {
      paths.push({
        location: loc.slug,
        service: puja.id,
      });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, service } = await params;
  const locData = bengaluruLocations.find((l) => l.slug === location);
  const pujaData = pujaServices.find((p) => p.id === service);

  if (!locData || !pujaData) return {};

  const title = `${pujaData.title} Pandit in ${locData.name}, Bengaluru | Pandit Pradeep Shastri`;
  const description = `Book experienced North Indian Hindi Pandit for ${pujaData.title} in ${locData.name}, Bengaluru. Authentic Vedic vidhi, complete samagri list & muhurat consultation by Pandit Pradeep Shastri (20+ Yrs Exp).`;

  return {
    title,
    description,
    keywords: [
      `${pujaData.title} Pandit in ${locData.name}`,
      `${pujaData.title} in ${locData.name} Bangalore`,
      `Hindi Pandit for ${pujaData.title} in ${locData.name}`,
      `Best Pandit in ${locData.name}`,
      "Pandit Pradeep Shastri Bengaluru",
    ],
    alternates: {
      canonical: `https://devimahindipanditpuja.com/${locData.slug}/${pujaData.id}`,
    },
  };
}

export default async function LocationServicePage({ params }: Props) {
  const { location, service } = await params;
  const locData = bengaluruLocations.find((l) => l.slug === location);
  const pujaData = pujaServices.find((p) => p.id === service);

  if (!locData || !pujaData) {
    notFound();
  }

  const whatsappText = `Namaste Pandit Pradeep Shastri Ji, I want to book "${pujaData.title}" in ${locData.name}, Bengaluru. Please share available muhurat and details.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0800] via-[#240c02] to-[#140600] text-amber-50 font-sans">
      <header className="bg-[#2b0f04]/95 border-b border-orange-500/30 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-3">
            <Link href={`/${locData.slug}`} className="flex items-center text-amber-300 hover:text-white font-semibold">
              <ArrowLeft className="w-4 h-4 mr-1" /> All Pujas in {locData.name}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:9187582633" className="bg-amber-500 text-black font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1" /> 9187582633
            </a>
            <a href={`https://wa.me/919187582633?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm flex items-center">
              <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-[#2b0f04]/95 border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div className="grid md:grid-cols-2">
            <div className="h-72 md:h-auto bg-[#1a0800] relative">
              <img
                src={pujaData.image}
                alt={`${pujaData.title} Pandit in ${locData.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center bg-orange-500/20 text-orange-300 border border-orange-400/40 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-orange-400" /> {locData.name}, Bengaluru
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  {pujaData.title} Pandit in <span className="text-amber-400">{locData.name}</span>
                </h1>
                <p className="text-amber-100/90 text-sm md:text-base leading-relaxed mb-6">
                  {pujaData.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-orange-500/25">
                <a
                  href={`https://wa.me/919187582633?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition text-sm md:text-base"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Book {pujaData.title} via WhatsApp
                </a>
                <a
                  href="tel:9187582633"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-black font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition text-sm md:text-base"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Pandit Ji: +91 9187582633
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2b0f04]/85 border border-orange-500/30 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            About Pandit Pradeep Shastri – {locData.name}
          </h2>
          <p className="text-amber-100/90 text-sm md:text-base leading-relaxed mb-6">
            Pandit Pradeep Shastri is a renowned North Indian Hindi Pandit in Bengaluru with over 20 years of Vedic experience. Having completed his Shastri degree from Balanand Ashram in Deoghar, he conducts <strong>{pujaData.title}</strong> in <strong>{locData.name}</strong> following strict scriptural vidhi and pure Sanskrit mantras.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-amber-100">
            <div className="flex items-center bg-[#1a0800]/70 p-3.5 rounded-xl border border-orange-500/25">
              <Award className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
              <span>Shastri, Balanand Ashram, Deoghar</span>
            </div>
            <div className="flex items-center bg-[#1a0800]/70 p-3.5 rounded-xl border border-orange-500/25">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
              <span>Complete Samagri List Provided</span>
            </div>
            <div className="flex items-center bg-[#1a0800]/70 p-3.5 rounded-xl border border-orange-500/25">
              <Calendar className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
              <span>Auspicious Shubh Muhurat</span>
            </div>
            <div className="flex items-center bg-[#1a0800]/70 p-3.5 rounded-xl border border-orange-500/25">
              <MapPin className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
              <span>Home & Office Visits in {locData.name}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold text-amber-300 mb-4">
            Also Book {pujaData.title} in Other Bengaluru Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {bengaluruLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}/${pujaData.id}`}
                className="bg-[#2b0f04] hover:bg-orange-900/60 border border-orange-500/30 text-amber-100 text-xs px-3 py-1.5 rounded-lg transition"
              >
                {pujaData.title} in {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}