export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div
      className={`flex w-full flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="section-label">
          {eyebrow}
        </span>
      )}

      <h2 className="editorial-title mt-6 max-w-4xl">
        {title}{" "}
        {highlight && (
          <span className="muted">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}