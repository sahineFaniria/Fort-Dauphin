import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fort-dauphin.jpg";
import libanonaImg from "@/assets/libanona-beach.jpg";
import nahampoanaImg from "@/assets/lemur.png";
import sunsetImg from "@/assets/sunset.png";

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      <img
        src={heroImage}
        alt="Vue aérienne de Fort-Dauphin"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground animate-fade-up">
          Découvrez la beauté de
          <br />
          <span className="text-accent">Fort-Dauphin</span>
        </h1>
        <p className="mt-4 text-primary-foreground/80 text-lg md:text-xl max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Tolagnaro — Perle du Sud de Madagascar
        </p>
        <Link
          to="/plages"
          className="mt-8 inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explorer
        </Link>
      </div>
    </section>

    {/* Highlights */}
    <section className="container mx-auto px-4 py-20">
      <h2 className="section-title text-center">Un paradis à découvrir</h2>
      <p className="section-subtitle text-center mt-3">
        Plages immaculées, réserves naturelles uniques et couchers de soleil inoubliables
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {[
          { img: libanonaImg, title: "Plages paradisiaques", desc: "Des eaux turquoise et du sable fin à perte de vue", link: "/plages" },
          { img: nahampoanaImg, title: "Nature & Réserves", desc: "Lémuriens, forêts tropicales et biodiversité unique", link: "/nature" },
          { img: sunsetImg, title: "Galerie photos", desc: "Couchers de soleil, vie nocturne et moments magiques", link: "/galerie" },
        ].map((item) => (
          <Link to={item.link} key={item.title} className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
            <div className="image-zoom aspect-[4/3]">
              <img src={item.img} alt={item.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Index;
