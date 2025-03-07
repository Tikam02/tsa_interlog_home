// import Image from "next/image";
// import SectionTitle from "../Common/SectionTitle";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

// const AboutSectionOne = () => {
//   const List = ({ text }) => (
//     <p className="mb-5 flex items-center text-lg font-medium text-body-color">
//       <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//         {checkIcon}
//       </span>
//       {text}
//     </p>
//   );

//   return (
//     <section id="about" className="pt-16 md:pt-20 lg:pt-28">
//       <div className="container">
//         <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">
//               <SectionTitle
//                 title="Why Choose Us."
//                 paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
//                 mb="44px"
//               />

//               <div
//                 className="mb-12 max-w-[570px] lg:mb-0"
//                 data-wow-delay=".15s"
//               >
//                 <div className="mx-[-12px] flex flex-wrap">
//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Premium quality" />
//                     <List text="Tailwind CSS" />
//                     <List text="Use for lifetime" />
//                   </div>

//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Next.js" />
//                     <List text="Rich documentation" />
//                     <List text="Developer friendly" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-1/2">
//               <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
//                 <Image
//                   src="/images/video/pep.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
//                 />
//                 <Image
//                   src="/images/about/about-image-dark.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionOne;

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// const WhyChooseUs = () => {
//   const ListItem = ({ number, title, description }) => (
//     <div className="mb-8 flex items-center gap-4">
//       <div className="mr-4 flex h-[40px] w-[40px] items-center justify-center rounded-full text-xl font-bold text-zinc-700">
//         {number}
//       </div>
//       <div>
//         <h4 className="mb-2 text-lg font-semibold text-black">{title}</h4>
//         <p className="text-body-color">{description}</p>
//       </div>
//     </div>
//   );

const WhyChooseUs = () => {
  const ListItem = ({ number, title, description }) => (
    <div className="mb-8 flex items-center gap-4">
      <div className="mb-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-zinc-700 text-xl font-bold text-white">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="mb-2 text-lg font-semibold text-black">{title}</h4>
        <p className="text-body-color">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="why-choose-us" className="relative py-16 bg-white-900"> 
      <div className="container">
        <SectionTitle
          title="Why Choose Us?"
          paragraph="Discover the benefits of partnering with us for your business needs."
          center
          mb="44px"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ListItem 
            number="01" 
            title="Superior Quality" 
            description="Our strict standards guarantee exceptional agricultural produce and crafted goods every time." 
          />
          <ListItem 
            number="02" 
            title="Your Partner, Your Profit" 
            description="We streamline exports, cut costs, and maximize your returns with unmatched reliability." 
          />
          <ListItem 
            number="03" 
            title="Global Reach, Local Expertise" 
            description="We navigate international markets seamlessly, delivering your goods where they thrive." 
          />
          <ListItem 
            number="04" 
            title="Strategic Insight" 
            description="Our market knowledge empowers you to stay ahead of trends and demands." 
          />
          <ListItem 
            number="05" 
            title="Reliable & Trusted Services" 
            description="Our transparent and reliable services ensure you feel at ease with our operations." 
          />
          <ListItem 
            number="06" 
            title="Quality You Can Trust" 
            description="Our rigorous processes ensure every item—be it cattle fodder or handicrafts—meets the highest standards." 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
