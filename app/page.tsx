'use client';

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// Intersection Observer Hook for scroll animations
const useInView = (): [React.RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

// Content Section Component with Animations
function ContentSection() {
  const [contentRef, contentInView] = useInView();

  return (
    <section
      ref={contentRef}
      className="container mx-auto px-4 py-20 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image */}
        <div
          className={`relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-smooth ${
            contentInView ? "animate-slide-in-left" : "opacity-0 translate-x-[-50px]"
          }`}
        >
          <Image
            src="/images/home/specialty.png"
            alt="Specialty florals and arrangements"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Right Content */}
        <div
          className={`space-y-8 transition-smooth ${
            contentInView ? "animate-slide-in-right" : "opacity-0 translate-x-[50px]"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Specialty florals and arrangements
            </h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
              Work that is shaped by season, mood, and the small details most people overlook. With years of hands-on work as a florist, Jan brings a trained eye and personal approach to every piece, whether it's for a celebration, a loss, or something in between.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t-2 border-rose-200/50">
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              As a locally owned business in Youngwood, Flowers by Jan offers something larger retailers cannot; direct, personal service. Every arrangement feels intentional and entirely their own.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              Beyond floral work, Jan also creates handmade decor and artwork, bringing a creative, one-of-a-kind feel to the shop.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-3 bg-rose-100/60 hover:bg-rose-200 text-rose-900 rounded-full hover-lift font-serif font-semibold text-base group"
          >
            Learn More About Jan
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Jan's Message Component with Animations
function JanMessageSection() {
  const [messageRef, messageInView] = useInView();

  return (
    <section
      ref={messageRef}
      className="w-full bg-gradient-to-b from-rose-50/40 via-slate-50 to-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8">
          <div
            className={`flex justify-center transition-smooth ${
              messageInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0s" }}
          >
            <div className="w-12 h-px bg-rose-300/50"></div>
          </div>

          <p
            className={`text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-relaxed font-serif italic font-light transition-smooth ${
              messageInView ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            "Aloha! I'll be your all-year around artist and florist. <span className="font-semibold not-italic text-rose-700">"Be someone's reason to smile."</span> Every arrangement is created with intention, care, and a deep respect for the moment it celebrates."
          </p>

          <div
            className={`flex flex-col items-center space-y-2 transition-smooth ${
              messageInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xl font-serif font-bold text-slate-900">Jan</p>
            <p className="text-sm text-slate-600 tracking-wide font-light">Founder & Florist</p>
          </div>

          <div
            className={`flex justify-center transition-smooth ${
              messageInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-12 h-px bg-rose-300/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section with Animations
function ServicesSection() {
  const [servicesRef, servicesInView] = useInView();

  const services = [
    {
      title: "Weddings",
      description: "Complete bridal packages, ceremony installations, and reception centerpieces designed to make your day unforgettable.",
      image: "/images/home/offer-1.jpeg",
    },
    {
      title: "Celebrations",
      description: "Vibrant arrangements for birthdays, anniversaries, and special occasions that bring joy and beauty to your moments.",
      image: "/images/home/offer-2.jpeg",
    },
    {
      title: "Everyday Blooms",
      description: "Fresh, seasonal arrangements and subscriptions to brighten your space and celebrate everyday moments.",
      image: "/images/home/offer-3.jpeg",
    },
  ];

  return (
    <section
      ref={servicesRef}
      className="container mx-auto px-4 py-20 md:py-32"
    >
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">
          What We Offer
        </h2>
        <p className="text-lg text-slate-600 font-light">
          Crafted with care for every occasion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group flex flex-col transition-smooth ${
              servicesInView ? `animate-stagger-${index + 1}` : "opacity-0 translate-y-[30px]"
            }`}
          >
            <div className="relative h-72 rounded-2xl overflow-hidden mb-8 shadow-lg hover-glow group-hover:shadow-2xl transition-all duration-300">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-rose-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-700 leading-relaxed font-light text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// CTA Section with Animations
function CTASection() {
  const [ctaRef, ctaInView] = useInView();

  return (
    <section
      ref={ctaRef}
      className="w-full bg-gradient-to-b from-slate-50 to-white py-20 md:py-32 border-t border-rose-100/50"
    >
      <div className="container mx-auto px-4 text-center max-w-3xl space-y-8">
        <div
          className={`space-y-4 transition-smooth ${
            ctaInView ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">
            Ready to Create Something Special?
          </h2>
          <p className="text-xl text-slate-700 font-light leading-relaxed">
            Contact us today to discuss your floral needs and discover how we can bring your vision to life.
          </p>
        </div>

        <Link
          href="/contacts"
          className="inline-flex items-center gap-3 px-10 py-4 bg-rose-600 text-white hover:bg-rose-700 rounded-full transition-all duration-300 font-serif font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 group"
        >
          Get in Touch
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Hero Section - Centered Text with Image Below */}
      <section className="w-full">
        {/* Text Content */}
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center space-y-8 animate-fade-in-down">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 leading-tight">
              Flowers by Jan
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-slate-700 font-light">
              Weddings | Celebrations | Funerals | Everyday Blooms
            </p>
          </div>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light max-w-2xl">
            Specialty florals and arrangements shaped by season, mood, and the small details most people overlook. Handcrafted with intention and care.
          </p>

          <Link
            href="/works"
            className="inline-flex items-center gap-3 px-10 py-4 bg-rose-600 text-white hover:bg-rose-700 rounded-full transition-all duration-300 font-serif font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 group"
          >
            Explore Our Work
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-96 md:h-[500px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Image
            src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=600&fit=crop"
            alt="Beautiful rose and greenery arrangement"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        </div>
      </section>

      <ContentSection />
      <JanMessageSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
}
