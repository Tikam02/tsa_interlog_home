import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TSA Interlog & Trade",
  description: "Trust in every deal,Trade beyond the horizon",
  // other metadata
};

const AboutPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tsatradelog.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://tsatradelog.com/about"
      }
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About TSA Interlog & Trade",
    "description": "Trust in every deal, Trade beyond the horizon",
    "url": "https://tsatradelog.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "TSA Interlog & Trade",
      "description": "Premier Indian exporter of maize, cattle fodder, spices, textiles & artisan handicrafts"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Breadcrumb
        pageName="About Us"
        description=" Trust in every deal,Trade beyond the horizon."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
