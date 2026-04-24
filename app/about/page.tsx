import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
              About Flowers by Jan
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Flowers by Jan is a boutique flower shop dedicated to creating beautiful, meaningful floral arrangements for every occasion. Founded with a passion for flowers and design, we bring artistry and care to every piece we create.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600332843297-b82e9839f5ae?w=500&h=600&fit=crop"
              alt="Flowers by Jan studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl space-y-16">

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Our Story</h2>
              <p className="text-foreground/60 leading-relaxed">
                What started as a small passion project has grown into a beloved flower shop serving our community. We believe that flowers have the power to convey emotions and create lasting memories. Each arrangement tells a story, and we're honored to be part of yours.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Our Values</h2>
              <p className="text-foreground/60 leading-relaxed">
                Quality, creativity, and customer satisfaction are at the heart of everything we do. Each arrangement is crafted with attention to detail and a commitment to excellence. We source the finest flowers and work with precision to ensure every piece exceeds expectations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Our Craft</h2>
              <p className="text-foreground/60 leading-relaxed">
                We believe in the power of handcrafted arrangements. Every bouquet, centerpiece, and installation is created by skilled florists who understand design, color theory, and the language of flowers. We pay attention to the small details that make arrangements truly special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
