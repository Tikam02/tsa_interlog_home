import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TSA Interlog & Trade | Leading Indian Exporter of Maize, Spices & Sustainable Agricultural Products",
  description: "Premier Indian exporter of maize, cattle fodder, spices, textiles & artisan handicrafts. ISO-certified global supply chain solutions connecting 25+ countries. Trusted by Fortune 500 companies.",
  openGraph: {
    title: "TSA Interlog & Trade | Top Indian Exporter to Global Markets",
    description: "Export excellence since 2010: Organic spices, non-GMO maize, premium textiles & sustainable agricultural products. FDA-compliant logistics with real-time tracking.",
    images: "/images/og-image.png",
    url: "https://tsatradelog.com/",
  },
    "keywords": [
      "Indian maize exporter",
      "premium spices export India",
      "sustainable agricultural products",
      "global cattle fodder supplier",
      "handmade textiles exporter",
      "ISO-certified export services",
      "organic spices wholesale",
      "cross-border trade solutions",
      "reliable export partner India",
      "spicez global supplier",
      "bulk turmeric finger supplier",
      "organic cardamom wholesaler",
      "black pepper export India",
      "cumin and coriander exporters",
      "chilli, ginger, and fennel suppliers",
      "turmeric powder wholesale India",
      "spice oils and oleoresins exporters",
      "maize and rice exporters India",
      "organic pulses and grains supplier",
      "bulk rice and maize exports",
      "farm equipment and machinery exports",
      "agricultural machinery suppliers",
      "buy farm machinery online",
      "purchase agricultural chemicals",
      "wholesale farm supplies",
      "organic cotton fabric supplier",
      "silk and wool fabric exporters",
      "wholesale linen and velvet fabrics",
      "printed cotton fabric for dresses",
      "embroidered silk fabric for dresses",
      "designer upholstery fabric by the yard",
      "wholesale fabric online India",
      "buy fabric by the yard",
      "electrical hardware exporter India",
      "industrial machinery supplier India",
      "precision farming equipment export",
      "smart agriculture tools supplier",
      "buy irrigation systems India",
      "purchase farm machinery online",
      "wholesale agricultural drones",
      "premium Indian spices export",
      "ISO-certified spice exports",
      "Electrical hardware exporter India",
      "Industrial machinery supplier India",
      "Agricultural machinery exporters",
      "Farm equipment suppliers India",
      "Precision farming equipment export",
      "Smart agriculture tools supplier",
      "Buy irrigation systems India",
      "Purchase farm machinery online",
      "Wholesale agricultural drones",
      "Reliable export partner India",
    ],
  robots: "index, follow",
  alternates: {
    canonical: "https://tsatradelog.com/",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
