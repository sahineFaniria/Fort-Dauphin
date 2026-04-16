const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
        Fort-Dauphin
      </h3>
      <p className="text-primary-foreground/60 text-sm">
        Tolagnaro, Madagascar — Perle du Sud
      </p>
      <div className="mt-6 h-px bg-primary-foreground/10 max-w-xs mx-auto" />
      <p className="text-primary-foreground/40 text-xs mt-4">
        © {new Date().getFullYear()} Fort-Dauphin, Madagascar
      </p>
    </div>
  </footer>
);

export default Footer;
