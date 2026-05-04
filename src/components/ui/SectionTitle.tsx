type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} mb-14`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
      <div className={`mt-6 h-px w-24 bg-gradient-gold ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
