type SectionHeadingProps = {
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export function SectionHeading({ title, description, light = false, centered = false }: SectionHeadingProps) {
  return (
    <div className={`reveal mb-16 md:mb-24 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className={`mb-6 font-serif text-4xl font-light italic tracking-tight md:text-5xl ${light ? "text-white" : "text-darkbase"}`}>
        {title}
      </h2>
      {description && <p className={`text-sm md:text-base ${light ? "text-white/70" : "text-darkbase/80"}`}>{description}</p>}
    </div>
  );
}
