import Image from "next/image";

export default function Works() {
  const works = [
    {
      title: "Summer Garden Wedding",
      description: "Large-scale floral installation for garden wedding ceremony and reception",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=600&fit=crop",
    },
    {
      title: "Corporate Event",
      description: "Modern arrangement for corporate gala and conference centerpieces",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop",
    },
    {
      title: "Birthday Celebration",
      description: "Colorful and vibrant bouquet for special milestone celebration",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=600&fit=crop",
    },
    {
      title: "Wedding Bridal Bouquet",
      description: "Elegant and romantic bridal arrangement with hand-selected flowers",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=600&fit=crop",
    },
    {
      title: "Anniversary Tribute",
      description: "Sophisticated arrangement celebrating years of love and partnership",
      image: "https://images.unsplash.com/photo-1583339792535-386c67a23f48?w=600&h=600&fit=crop",
    },
    {
      title: "Grand Opening",
      description: "Installation for business grand opening with sustainable flowers",
      image: "https://images.unsplash.com/photo-1565270735382-dda1ee810dbf?w=600&h=600&fit=crop",
    },
  ];

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            A showcase of our most beautiful work. Each arrangement tells a unique story and reflects our commitment to artistry and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {work.title}
              </h3>
              <p className="text-foreground/60 text-sm">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
