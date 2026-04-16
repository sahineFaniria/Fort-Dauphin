interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="text-center py-16 md:py-20">
    <h1 className="section-title animate-fade-up">{title}</h1>
    {subtitle && (
      <p className="section-subtitle mt-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
        {subtitle}
      </p>
    )}
  </div>
);

export default PageHeader;
