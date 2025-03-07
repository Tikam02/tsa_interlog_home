'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CertificateViewerProps {
  url: string;
  title: string;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ url, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="border rounded-lg p-4 w-full max-w-md overflow-hidden">
          <Image
            src={url}
            alt={title}
            width={400}
            height={300}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={url}
              alt={title}
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateViewer; 