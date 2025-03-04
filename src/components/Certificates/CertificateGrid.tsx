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
    url: "/certificates/GST.pdf",
  },
  {
    id: 2,
    title: "ISO 9001:2015 Certificate",
    url: "/certificates/iso9001.pdf",
  },
  {
    id: 3,
    title: "Business License",
    url: "/certificates/business-license.pdf",
  },
  // Add more certificates as needed
];

const CertificateGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {certificates.map((cert) => (
        <div key={cert.id} className="w-full">
          <CertificateViewer url={cert.url} title={cert.title} />
        </div>
      ))}
    </div>
  );
};

export default CertificateGrid; 