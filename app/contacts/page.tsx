'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Contacts() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Have questions about our arrangements or want to discuss your floral needs? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/60 mb-2">
                  Phone
                </h3>
                <Link
                  href="tel:(555) 123-4567"
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                >
                  (555) 123-4567
                </Link>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/60 mb-2">
                  Email
                </h3>
                <Link
                  href="mailto:hello@flowersbyjan.com"
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                >
                  hello@flowersbyjan.com
                </Link>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/60 mb-2">
                  Address
                </h3>
                <p className="text-lg text-foreground">
                  123 Flower Street<br />
                  Garden City, GC 12345
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-foreground/10">
              <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/60">
                Studio Hours
              </h3>
              <p className="text-foreground/70">
                Monday - Sunday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-foreground/10">
              <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/60">
                Follow Us
              </h3>
              <div className="flex gap-6">
                <Link
                  href="https://www.facebook.com/profile.php?id=100064039845292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@flowersbyjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="TikTok"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1607350514306-d86e54061183?w=500&h=500&fit=crop"
                alt="Flowers by Jan studio space"
                fill
                className="object-cover"
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-foreground/5 border-foreground/10 h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-foreground/5 border-foreground/10 h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone (optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="bg-foreground/5 border-foreground/10 h-12"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your floral needs..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-foreground/10 rounded-lg bg-foreground/5 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-foreground/10 hover:bg-foreground/15 text-foreground rounded-lg transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
