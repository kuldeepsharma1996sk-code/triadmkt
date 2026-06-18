import Link from "next/link";

interface ServiceCardProps {
  lightTitle: string;
  boldTitle: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  ctaLink: string;
}

export default function ServiceCard({
  lightTitle,
  boldTitle,
  description,
  bulletPoints,
  ctaText,
  ctaLink,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between border border-grey-border bg-white p-8 transition-all duration-300 hover:border-grey-dark hover:shadow-sm">
      <div>
        <h3 className="text-xl font-light uppercase tracking-wider text-grey-dark border-b border-grey-border/60 pb-4 mb-4">
          {lightTitle} <span className="font-extrabold">{boldTitle}</span>
        </h3>
        <p className="text-xs text-grey-mid font-light leading-relaxed mb-6">
          {description}
        </p>
        <ul className="flex flex-col gap-2 mb-8">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-grey-dark font-light">
              <span className="text-grey-mid mt-[2px]">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link
          href={ctaLink}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-grey-dark hover:underline group"
        >
          <span>{ctaText}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
