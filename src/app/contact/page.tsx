// import Breadcrumb from "@/components/Common/Breadcrumb";
// import Contact from "@/components/Contact";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Contact Page for Startup Nextjs Template",
//   // other metadata
// };

// const ContactPage = () => {
//   return (
//     <>
//       <Breadcrumb
//         pageName="Let's Connect"
//         description="Reach out with confidence and ease. We are just a message away from turning your trade goals into reality. 
//         Contact us today—via email, form, or phone—and experience the reliability that defines TSA Interlog & Trade."
//       />
//          {/* Contact Details Section */}
//          <section className="mt-8 text-center">
//         <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//         <div className="space-y-4">
//           <p>
//             <strong>Email:</strong>{" "}
//             <a href="mailto:hello@tsatradelog.com" className="text-blue-600 hover:underline">
//               hello@tsatradelog.com
//             </a>
//           </p>
//           <p>
//             <strong>Phone:</strong>{" "}
//             <a href="tel:+918839683031" className="text-blue-600 hover:underline">
//               (+91) 883968 3031
//             </a>
//           </p>
//           <p>
//             <strong>Proprietor:</strong>{" "}
//             <a href="mailto:tikamalma1@gmail.com" className="text-blue-600 hover:underline">
//               tikamalma1@gmail.com
//             </a>
//           </p>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="mt-12">
//         <Contact />
//       </section>

//       <Contact />
//     </>
//   );
// };

// export default ContactPage;


// import Breadcrumb from "@/components/Common/Breadcrumb";
// import Contact from "@/components/Contact";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Contact Page for Startup Nextjs Template",
//   // other metadata
// };

// const ContactPage = () => {
//   return (
//     <>
//       <Breadcrumb
//         pageName="Let's Connect"
//         description="Reach out with confidence and ease. We are just a message away from turning your trade goals into reality. 
//         Contact us today—via email, form, or phone—and experience the reliability that defines TSA Interlog & Trade."
//       />
//       {/* Contact Details Section */}


//       {/* Contact Form Section */}
//       <section className="mb-16">
//         <Contact />
//       </section>

//     </>
//   );
// };

// export default ContactPage;


import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Let's Connect"
        description="Reach out with confidence and ease. We are just a message away from turning your trade goals into reality. 
        Contact us today—via email, form, or phone—and experience the reliability that defines TSA Interlog & Trade."
      />
      {/* Contact Details Section */}

      {/* Contact Form Section */}
      <section className="mb-16">
        <Contact />
      </section>

    </>
  );
};

export default ContactPage;
