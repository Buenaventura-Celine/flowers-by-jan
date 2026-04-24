import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Custom Arrangements",
      description: "Create personalized arrangements tailored to your vision, mood, and budget. We work with you to bring your floral dreams to life.",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=400&fit=crop",
    },
    {
      title: "Wedding Flowers",
      description: "Complete wedding floral packages including bridal bouquets, bridesmaids arrangements, centerpieces, and ceremony installations.",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop",
    },
    {
      title: "Event Decorations",
      description: "Beautiful floral designs for corporate events, galas, parties, and celebrations. Large-scale installations and table arrangements.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
    },
    {
      title: "Subscription Service",
      description: "Regular flower deliveries to brighten your home or office space. Choose weekly, bi-weekly, or monthly delivery schedules.",
      image: "https://images.unsplash.com/photo-1599929969907-1b33b1c50b86?w=600&h=400&fit=crop",
    },
    {
      title: "Funeral Arrangements",
      description: "Respectful and dignified floral tributes for memorial services. We create arrangements that honor and celebrate life.",
      image: "https://images.unsplash.com/photo-1599929970146-92e29467cebb?w=600&h=400&fit=crop",
    },
    {
      title: "Same-Day Delivery",
      description: "Fast delivery service for last-minute gifts. Orders placed before noon are delivered the same day in our service area.",
      image: "https://images.unsplash.com/photo-1553224311-bebc920ce9a0?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Services
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We offer a comprehensive range of floral services for every occasion, from intimate gatherings to grand celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-foreground/5 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-foreground/70">
            Contact us today to discuss your floral needs and receive a personalized quote.
          </p>
        </div>
      </div>
    </div>
  );
}
