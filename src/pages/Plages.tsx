import PageHeader from "@/components/PageHeader";
import ImageCard from "@/components/ImageCard";
import libanonaImg from "@/assets/libanona-beach.jpg";
import ankobaImg from "@/assets/ankoba-beach.jpg";
import amparihyImg from "@/assets/amparihy-beach.jpg";
import bevavaImg from "@/assets/bevava-beach.jpeg";
import lokaroImg from "@/assets/lokaro.jpg";

const beaches = [
  { src: libanonaImg, title: "Libanona Beach", description: "La plage emblématique de Fort-Dauphin, idéale pour le surf et la baignade." },
  { src: ankobaImg, title: "Ankoba Beach", description: "Une crique secrète aux eaux cristallines entourée de rochers." },
  { src: amparihyImg, title: "Amparihy", description: "Plage de pêcheurs traditionnels avec pirogues colorées." },
  { src: bevavaImg, title: "Bevava Beach", description: "Longue étendue de sable doré avec des vagues douces." },
  { src: lokaroImg, title: "Lokaro", description: "Lagune turquoise et îlots tropicaux, un trésor caché." },
];

const Plages = () => (
  <div className="container mx-auto px-4 pb-20">
    <PageHeader
      title="Les Plages"
      subtitle="Des eaux turquoise et du sable fin bordent la côte de Fort-Dauphin"
    />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {beaches.map((beach) => (
        <ImageCard key={beach.title} {...beach} />
      ))}
    </div>
  </div>
);

export default Plages;
