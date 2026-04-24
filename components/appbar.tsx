'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/contacts', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900 backdrop-blur shadow-lg border-b border-rose-400/20'
          : 'bg-white/95 backdrop-blur shadow-md border-b border-rose-100'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-serif font-semibold italic transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-slate-900'
          }`}
        >
          Flowers by Jan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? 'text-white/70 hover:text-rose-400'
                  : 'text-foreground/70 hover:text-rose-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-5 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-white' : 'bg-slate-900'
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-white' : 'bg-slate-900'
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-white' : 'bg-slate-900'
            }`}
          ></div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t transition-colors duration-300 ${
            isScrolled ? 'border-white/10 bg-slate-800' : 'border-border/50'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 py-2 ${
                  isScrolled
                    ? 'text-white/70 hover:text-rose-400'
                    : 'text-foreground/70 hover:text-rose-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
