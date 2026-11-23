import type { CSSProperties } from 'react';
import type { SkillItem } from '../types';

// Brands with very dark logos (Next.js, Vercel, Java) would vanish on the dark
// background, so their hover colour falls back to a light tone.
const hoverColor = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.3 ? '#3a3a3c' : `#${hex}`;
};

const SkillChip = ({ item }: { item: SkillItem }) => {
  const { icon, fallbackIcon: FallbackIcon } = item;
  const style = icon ? ({ '--brand': hoverColor(icon.hex) } as CSSProperties) : undefined;

  return (
    <span
      style={style}
      className="group/chip inline-flex items-center gap-2 bubble rounded-full px-4 py-2 font-mono text-sm text-ink"
    >
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-4 h-4 fill-current text-muted transition-colors group-hover/chip:text-(--brand)"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        FallbackIcon && <FallbackIcon aria-hidden="true" className="w-4 h-4 text-muted" />
      )}
      {item.name}
    </span>
  );
};

export default SkillChip;
