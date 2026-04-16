import PageHeader from "@/components/PageHeader";
import nahampoanaImg from "@/assets/lemur.png";
import andohahelaImg from "@/assets/andohahela.jpg";
import mananyantelyImg from "@/assets/manantantely.jpg";
import lac from "@/assets/lac.png";
import berenty from "@/assets/berenty.png";

const reserves = [
  {
    src: nahampoanaImg,
    title: "Réserve de Nahampoana",
    description: "Un jardin botanique et zoologique abritant des lémuriens, crocodiles et tortues dans un cadre tropical luxuriant. Une rencontre unique avec la faune endémique de Madagascar.",
  },
  {
    src: andohahelaImg,
    title: "Parc National Andohahela",
    description: "Le seul parc au monde réunissant forêt humide et forêt épineuse. Un site UNESCO abritant une biodiversité exceptionnelle avec plus de 120 espèces d'oiseaux.",
  },
  {
    src: lac,
    title: "Lac Anony",
    description: "Amboasary abrite un véritable joyau naturel : le lac Anony. Entre ses eaux cristallines, ses élégants flamants roses, ses mangroves luxuriantes et ses majestueuses dunes de sable, ce lieu offre un décor à la fois paisible et spectaculaire.",
  },
  {
    src: berenty,
    title: "Réserve de Berenty",
    description: "La Réserve de Berenty, le royaume des lémuriens. Berenty est l'un des meilleurs endroits de l'îles pour les photographes et les amoureux de la nature",
  },
  {
    src: mananyantelyImg,
    title: "Réserve de Manantantely",
    description: "Forêt tropicale dense avec cascades, papillons exotiques et une végétation luxuriante. Un havre de paix pour les amoureux de la nature.",
  },
];

const Nature = () => (
  <div className="container mx-auto px-4 pb-20">
    <PageHeader
      title="Nature & Réserves"
      subtitle="Explorez la biodiversité unique de la région de Fort-Dauphin"
    />
    <div className="flex flex-col gap-16">
      {reserves.map((reserve, i) => (
        <div
          key={reserve.title}
          className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
        >
          <div className="md:w-1/2 image-zoom rounded-2xl shadow-card">
            <img
              src={reserve.src}
              alt={reserve.title}
              loading="lazy"
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{reserve.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{reserve.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Nature;
