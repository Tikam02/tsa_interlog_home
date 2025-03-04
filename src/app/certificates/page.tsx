'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";
import CertificateGrid from "@/components/Certificates/CertificateGrid";

const Certificates = () => {
  return (
    <>
      <Breadcrumb
        pageName="Certificates & Licenses"
        description="View our company's certificates, licenses, and other important documents that demonstrate our commitment to quality and compliance."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <CertificateGrid />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;