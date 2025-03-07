'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";

const tsaFoods = () => {
  return (
    <>
      <Breadcrumb
        pageName="TSA Foods & Co."
        description="View our company's certificates, licenses, and other important documents that demonstrate our commitment to quality and compliance."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default tsaFoods;