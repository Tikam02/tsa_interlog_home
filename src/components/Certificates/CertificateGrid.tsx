'use client';

import React from 'react';
import CertificateViewer from '../CertificateViewer';

interface Certificate {
  id: number;
  title: string;
  url: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "GST Certificate",
    url: "/certificates/GST-1.png",
  },
  {
    id: 2,
    title: "IEC Certificate",
    url: "/certificates/IEC-1.png",
  },
  {
    id: 3,
    title: "Spice Board Certificate",
    url: "/certificates/Spice-1.png",
  },
  {
    id: 4,
    title: "FSSAI Certificate",
    url: "/certificates/FSSAI-1.png",
  },
  // Add more certificates as needed
];

const CertificateGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert) => (
        <div key={cert.id} className="w-full">
          <CertificateViewer url={cert.url} title={cert.title} />
        </div>
      ))}
    </div>
  );
};

export default CertificateGrid; 