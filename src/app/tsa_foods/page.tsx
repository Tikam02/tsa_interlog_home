'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tsaFoods = () => {
  const certificates = [
    {
      id: 1,
      title: "Cashew Nuts",
      description: "Food Safety and Standards Authority of India certification for food business operations",
      images: [
        "/images/assets/tsa_cashew.png",
        "/images/assets/farm.png",
        "/images/assets/tsa_cashew.png"
      ]
    },
    {
      id: 2,
      title: "Almonds",
      description: "International certification for Food Safety Management Systems",
      images: [
        "/images/certificates/iso22000.jpg",
        "/images/certificates/iso22000-2.jpg",
        "/images/certificates/iso22000-3.jpg"
      ]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <Breadcrumb
        pageName="TSA Foods & Co."
        description="View our company's certificates, licenses, and other important documents that demonstrate our commitment to quality and compliance."
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-[300px]">
                  <Slider {...sliderSettings} className="h-full">
                    {cert.images.map((image, index) => (
                      <div key={index} className="h-[300px]">
                        <img
                          src={image}
                          alt={`${cert.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default tsaFoods;