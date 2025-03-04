'use client';

import React from 'react';

interface CertificateViewerProps {
  url: string;
  title: string;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ url, title }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="border rounded-lg p-4 w-full max-w-4xl h-[600px]">
        <iframe
          src={url}
          className="w-full h-full"
          title={title}
        />
      </div>
    </div>
  );
};

export default CertificateViewer; 