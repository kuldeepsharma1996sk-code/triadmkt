import React from "react";

interface SectionHeaderProps {
  lightWord: string;
  boldWord: string;
  description?: string;
  id?: string;
}

export default function SectionHeader({
  lightWord,
  boldWord,
  description,
  id,
}: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 border-b border-grey-border/60 pb-6">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight text-grey-dark uppercase display-font">
        {lightWord} <span className="font-extrabold text-black">{boldWord}</span>
      </h2>
      {description && (
        <p className="mt-3 text-xs md:text-sm text-grey-mid max-w-2xl font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

