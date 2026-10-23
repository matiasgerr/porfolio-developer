import type { CSSProperties } from 'react';
import type { SkillItem } from '../types';

// Brands with very dark logos (Next.js, Vercel, Expo) would vanish on the dark
// background, so their hover colour falls back to a light tone.
const hoverColor = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.2 ? '#e2e8f0' : `#${hex}`;
};

const SkillChip = ({ item }: { item: SkillItem }) => {
  const { icon, fallbackIcon: FallbackIcon } = item;
  const style = icon ? ({ '--brand': hoverColor(icon.hex) } as CSSProperties) : undefined;

  return (
    <span
      style={style}
      className="group/chip inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-sm text-slate-200 transition-colors hover:border-slate-600"
    >
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-4 h-4 fill-current text-slate-400 transition-colors group-hover/chip:text-(--brand)"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        FallbackIcon && <FallbackIcon aria-hidden="true" className="w-4 h-4 text-slate-400" />
      )}
      {item.name}
    </span>
  );
};

export default SkillChip;
