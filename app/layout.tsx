import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://devimahindipanditpuja.com"),
  title: {
    default: "Devi Ma Hindi Pandit Puja | Best North Indian Pandit in Bengaluru",
    template: "%s | Devi Ma Hindi Pandit Puja Bengaluru"
  },
  description:
    "Book experienced North Indian Hindi Pandit Pradeep Shastri in Bengaluru (20+ Yrs Exp, Balanand Ashram Deoghar) for Griha Pravesh, Satyanarayan Puja, Rudrabhishek, Vivah Sanskar & all Vedic rituals across Whitefield, Marathahalli, HSR Layout, Electronic City, Sarjapur, and all Bengaluru areas.",
  keywords: [
    "Hindi Pandit in Bangalore",
    "Best Pandit in Bengaluru",
    "North Indian Pandit in Bangalore",
    "Pandit for Puja in Bengaluru",
    "Pandit in Whitefield",
    "Pandit in Marathahalli",
    "Pandit in HSR Layout",
    "Pandit in Electronic City",
    "Pandit in Sarjapur",
    "Pandit in Koramangala",
    "Pandit in Indiranagar",
    "Griha Pravesh Puja Pandit Bangalore",
    "Satyanarayan Puja Pandit Bengaluru",
    "Rudrabhishek Pandit in Bangalore",
    "Pandit Pradeep Shastri Bengaluru",
    "Devi Ma Hindi Pandit Puja"
  ],
  authors: [{ name: "Pandit Pradeep Shastri" }, { name: "Prince Pandey" }],
  creator: "Prince Pandey",
  publisher: "Devi Ma Hindi Pandit Puja",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://devimahindipanditpuja.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devimahindipanditpuja.com",
    siteName: "Devi Ma Hindi Pandit Puja",
    title: "Devi Ma Hindi Pandit Puja | Best North Indian Pandit in Bengaluru",
    description:
      "Authentic Vedic rituals & pujas across all Bengaluru localities (Whitefield, Sarjapur, HSR, Electronic City, etc.) by Pandit Pradeep Shastri (20+ years experience).",
    images: [
      {
        url: "/logo-emblem/Devotional Durga Pandit Puja Emblem.png",
        width: 800,
        height: 800,
        alt: "Devi Ma Hindi Pandit Puja Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devi Ma Hindi Pandit Puja | Best Hindi Pandit in Bengaluru",
    description:
      "Book Pandit Pradeep Shastri (20+ Yrs Exp) for all Vedic Pujas in Bengaluru. Call or WhatsApp +91 9187582633.",
    images: ["/logo-emblem/Devotional Durga Pandit Puja Emblem.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Devi Ma Hindi Pandit Puja",
    image: "https://devimahindipanditpuja.com/logo-emblem/Devotional Durga Pandit Puja Emblem.png",
    "@id": "https://devimahindipanditpuja.com",
    url: "https://devimahindipanditpuja.com",
    telephone: "+919187582633",
    email: "devimahindipanditpuja@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: [
      "Whitefield",
      "Marathahalli",
      "HSR Layout",
      "Electronic City",
      "JP Nagar",
      "Indiranagar",
      "Koramangala",
      "BTM Layout",
      "Bannerghatta",
      "Bellandur",
      "Sarjapur",
      "Yelahanka",
      "Hebbal",
      "MG Road",
      "Bengaluru"
    ],
    founder: {
      "@type": "Person",
      name: "Pandit Pradeep Shastri",
      alumniOf: "Balanand Ashram, Deoghar",
    },
    sameAs: [
      "https://www.instagram.com/devimahindipanditpuja/",
      "https://www.facebook.com/profile.php?id=61596700957339",
      "https://www.youtube.com/channel/UCrB6CsekDUoVCNX1OlAgkMw"
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#1a0800] text-amber-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}