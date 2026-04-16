import PageHeader from "@/components/PageHeader";
import sunsetImg from "@/assets/sunset.png";
import sunriseImg from "@/assets/sunrise.jpg";
import nightImg from "@/assets/night-city.jpg";
import heroImg from "@/assets/hero-fort-dauphin.jpg";
import lokaroImg from "@/assets/lokaro.jpg";
import nahampoanaImg from "@/assets/lemur.png";
import colbert from "@/assets/foot.jpg"
import huitre from "@/assets/huitre.jpeg"
import ankoba from "@/assets/ankoba.jpg"
import croixDuSud from "@/assets/croix.jpg"
import BNI from "@/assets/BNI.jpg"
import rose from "@/assets/rose.png";

const photos = [
  { src: sunsetImg, title: "Coucher de soleil" },
  { src: sunriseImg, title: "Lever de soleil" },
  { src: nightImg, title: "Ville de nuit" },
  { src: heroImg, title: "Vue panoramique" },
  { src: lokaroImg, title: "Lokaro" },
  { src: nahampoanaImg, title: "Nahampoana" },
  { src: colbert, title: "colbert" },
  { src: huitre, title: "huitre" },
  { src: ankoba, title: "ankoba" },
  { src: croixDuSud, title: "Croix du sud" },
  // { src: BNI, title: "Coucher du soleil" },
  { src: rose, title: "Flamants roses" },
];

const Galerie = () => (
  <div className="container mx-auto px-4 pb-20">
    <PageHeader
      title="Galerie"
      subtitle="Les plus belles images de Fort-Dauphin et ses environs"
    />
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {photos.map((photo) => (
        <div key={photo.title} className="relative break-inside-avoid image-zoom rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            width={800}
            height={600}
            className="w-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent rounded-b-2xl">
            <span className="text-primary-foreground font-heading text-sm font-medium">{photo.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Galerie;
