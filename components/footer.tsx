'use client';

import Link from 'next/link';
import { Facebook, Music } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <footer className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white mt-auto border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Top Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-rose-400/30 to-transparent"></div>

        {/* Main Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            {/* Left - Brand */}
            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h2 className="text-sm font-serif font-semibold text-white tracking-widest italic">
                  FLOWERS BY JAN
                </h2>
                <div className="h-px w-8 bg-rose-400/50"></div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Handcrafted florals and artistry<br />
                Youngwood, PA
              </p>
            </div>

            {/* Center - Hours & Info */}
            <div className="space-y-4 text-center">
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                  Studio Hours
                </h3>
                <div className="space-y-1">
                  <p className="text-sm text-white font-light">Monday - Sunday</p>
                  <p className="text-sm text-rose-400 font-serif font-semibold">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Social */}
            <div className="space-y-4 text-center md:text-right">
              <h3 className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                Connect
              </h3>
              <div className="flex gap-8 justify-center md:justify-end">
                <Link
                  href="https://www.facebook.com/profile.php?id=100064039845292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  onMouseEnter={() => setHoveredIcon('fb')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label="Facebook"
                >
                  <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Facebook className={`w-5 h-5 transition-all duration-300 relative z-10 ${
                    hoveredIcon === 'fb'
                      ? 'text-rose-400 scale-125'
                      : 'text-white/50 hover:text-rose-400'
                  }`} />
                </Link>

                <Link
                  href="https://www.tiktok.com/@flowersbyjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  onMouseEnter={() => setHoveredIcon('tiktok')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label="TikTok"
                >
                  <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Music className={`w-5 h-5 transition-all duration-300 relative z-10 ${
                    hoveredIcon === 'tiktok'
                      ? 'text-rose-400 scale-125'
                      : 'text-white/50 hover:text-rose-400'
                  }`} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Footer Bottom */}
        <div className="py-8 md:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-white/50 font-light">
              © {currentYear} Flowers by Jan. Handcrafted with soul and intention.
            </p>
            <div className="flex items-center gap-4 text-white/50">
              <div className="w-1 h-1 rounded-full bg-white/30"></div>
              <p className="text-xs font-light">Since 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
