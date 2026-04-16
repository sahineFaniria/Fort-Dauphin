interface ImageCardProps {
  src: string;
  title: string;
  description?: string;
}

const ImageCard = ({ src, title, description }: ImageCardProps) => (
  <div className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
    <div className="image-zoom aspect-[4/3]">
      <img
        src={src}
        alt={title}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  </div>
);

export default ImageCard;
