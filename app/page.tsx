"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="ocean-background" />
      <div className="ocean-overlay" />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full">
          <div className="fade-in-up">
            <div className="flex justify-center items-center w-full ripple-effect">
              <Image
                src="/SeaCrop Logo with Tagline/PNG/SeaCrop Logo with Tagline White.png"
                alt="SeaCrop - Small Particles. Global Impact."
                width={600}
                height={180}
                priority
                className="w-80 sm:w-96 md:w-[500px] lg:w-[600px] h-auto"
                style={{ margin: '0 auto', display: 'block' }}
              />
            </div>
          </div>

          <div className="fade-in-up delay-1 pt-12 pb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-center water-text">
              COMING SOON
            </h1>
          </div>

          <div className="fade-in-up delay-2">
            <div className="flex justify-center w-full">
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed opacity-90 text-center max-w-4xl">
                Creating access to marine microbial plankton as an unlimited resource for life on Earth
              </p>
            </div>
          </div>

          <div className="fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-seacrop-turquoise text-seacrop-dark px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 btn-glow w-full sm:w-auto min-w-[200px] text-center"
            >
              Contact Us
            </button>
            <a
              href="/story"
              className="border-2 border-seacrop-turquoise text-seacrop-turquoise px-8 py-4 rounded-full font-medium text-lg hover:bg-seacrop-turquoise hover:text-seacrop-dark transition-all duration-300 w-full sm:w-auto min-w-[200px] text-center"
            >
              Our Story
            </a>
          </div>

        </div>
      </main>

      {/* Contact Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-seacrop-dark border border-seacrop-turquoise/30 rounded-2xl p-8 max-w-md w-full mx-4 relative">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-light text-white mb-8">Get in Touch</h3>
              
              <div className="flex justify-center items-center space-x-8">
                <a
                  href="mailto:arik@seacrop.co"
                  className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-seacrop-turquoise/30 text-white hover:text-seacrop-turquoise hover:border-seacrop-turquoise hover:bg-seacrop-turquoise/10 transition-all duration-300 group"
                  title="Email"
                  onClick={() => setShowPopup(false)}
                >
                  <i className="fas fa-envelope text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                </a>
                
                <a
                  href="https://www.linkedin.com/company/seacrop-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-seacrop-turquoise/30 text-white hover:text-seacrop-turquoise hover:border-seacrop-turquoise hover:bg-seacrop-turquoise/10 transition-all duration-300 group"
                  title="LinkedIn"
                  onClick={() => setShowPopup(false)}
                >
                  <i className="fab fa-linkedin text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                </a>
              </div>

              <p className="text-white/60 text-sm mt-6">
                We&apos;d love to hear from you
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
