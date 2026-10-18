import { useState } from 'react';

const fallback = (name) => {
  const label = encodeURIComponent(name);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#d7f0d2'/><stop offset='1' stop-color='#8fcf9a'/></linearGradient></defs><rect width='400' height='400' fill='url(#g)'/><text x='200' y='215' font-size='120' text-anchor='middle'>🪴</text><text x='200' y='330' font-size='24' font-family='sans-serif' fill='#2d5a3a' text-anchor='middle'>${decodeURIComponent(label).replace(/&/g,'&amp;')}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function PlantImage({ src, name, className }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      className={className}
      src={failed ? fallback(name) : src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
