// app/page.js
import Head from 'next/head';
import { FiTruck, FiGlobe, FiShield, FiPhone, FiServer, FiBarChart2, FiOctagon, FiHome } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>TSA Interlog & Trade - Global Logistics Solutions</title>
        <meta name="description" content="Professional B2B Transport, Logistics, and Import-Export Services" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logo1.svg"
                  alt="TSA Interlog & Trade Logo"
                  width={250}
                  height={250}
                  className="h-250 w-250"
                />
              </Link>
              {/* <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700">
                TSA Interlog & Trade
              </Link> */}
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-900">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-700 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logowt.svg"
                  alt="TSA Interlog & Trade Logo"
                  width={500}
                  height={500}
                  className="h-auto w-auto mx-auto"
                />
              </Link>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Global Logistics Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Streamlining your supply chain with reliable transport, expert logistics, and efficient trade solutions
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors">
                Connect With Us              
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiTruck, title: 'Transport Solutions', description: 'Road, rail, sea & air freight services with real-time tracking' },
              { icon: FiGlobe, title: 'Global Logistics', description: 'End-to-end supply chain management and customs clearance' },
              { icon: FiShield, title: 'Import-Export Services', description: 'Customs brokerage and international trade compliance' },
              { icon: FiServer, title: 'Fleet Management Solutions', description: 'Complete fleet management IOT and precision solutions'},
              { icon: FiBarChart2, title: 'Supply Chain Management', description: 'Complete fleet management IOT and precision solutions'},
              { icon: FiHome, title: 'Warehousing', description: 'Complete fleet management IOT and precision solutions'},
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <service.icon className="h-12 w-12 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Why Choose TSA Interlog & Trade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                '24/7 Operational Support',
                'Global Network of Partners',
                'Industry Certified Professionals',
                'Real-Time Shipment Tracking',
                'Competitive Pricing',
                'Customized Solutions'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 text-blue-900" aria-hidden="true">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-gray-700 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Contact Us</h2>
            <p className="mt-4 text-lg text-blue-100">
              Let's discuss your logistics needs
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-700 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TSA Interlog & Trade</h3>
              <p className="text-gray-400">
                Professional logistics solutions for global businesses
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                <FiPhone className="inline mr-2" />
                +91 8839683031<br />
                info@tsainterlog.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Headquarters</h3>
              <p className="text-gray-400">
                123 Logistics Way<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TSA Interlog & Trade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}