/**
 * Generates a consistent set of branded, hand-styled SVG placeholder
 * illustrations for the site (garden scenes, dog silhouettes, gallery
 * frames, logo mark). These exist so the site looks finished and on-brand
 * out of the box. Swap them for real photography in production —
 * see README.md → "Replacing placeholder images".
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const PALETTES = {
  forest: { sky1: "#2F5C48", sky2: "#16332A", ground: "#1B2E27", accent: "#D9A441", accent2: "#F5E8D0" },
  beige: { sky1: "#F5E8D0", sky2: "#EFE0C3", ground: "#234D3C", accent: "#D9A441", accent2: "#FAFAF7" },
  gold: { sky1: "#E8C57F", sky2: "#D9A441", ground: "#234D3C", accent: "#16332A", accent2: "#FAFAF7" },
  dusk: { sky1: "#3B6653", sky2: "#122019", ground: "#0F1B16", accent: "#E8C57F", accent2: "#F5E8D0" },
};

function blob(cx, cy, r, seed) {
  const pts = 8;
  let d = "";
  const coords = [];
  for (let i = 0; i < pts; i++) {
    const angle = (Math.PI * 2 * i) / pts;
    const wobble = 0.78 + 0.22 * Math.sin(seed + i * 1.7);
    const x = cx + Math.cos(angle) * r * wobble;
    const y = cy + Math.sin(angle) * r * wobble * 0.72;
    coords.push([x, y]);
  }
  d += `M ${coords[0][0]},${coords[0][1]} `;
  for (let i = 1; i <= pts; i++) {
    const [x, y] = coords[i % pts];
    const [px, py] = coords[i - 1];
    const mx = (px + x) / 2;
    const my = (py + y) / 2;
    d += `Q ${px},${py} ${mx},${my} `;
  }
  d += "Z";
  return d;
}

function pawPrint(x, y, scale, rot, color, opacity = 0.5) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})" fill="${color}" opacity="${opacity}">
    <ellipse cx="0" cy="6" rx="7" ry="8.5"/>
    <ellipse cx="-9" cy="-6" rx="3.4" ry="4.4"/>
    <ellipse cx="-3.2" cy="-11" rx="3.2" ry="4.2"/>
    <ellipse cx="3.2" cy="-11" rx="3.2" ry="4.2"/>
    <ellipse cx="9" cy="-6" rx="3.4" ry="4.4"/>
  </g>`;
}

function leaf(x, y, scale, rot, color, opacity = 0.9) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})" opacity="${opacity}">
    <path d="M0,0 C 18,-4 34,-16 40,-38 C 14,-34 -2,-18 0,0 Z" fill="${color}"/>
    <path d="M2,-2 C 14,-8 24,-18 30,-32" stroke="${color === '#FAFAF7' ? '#234D3C' : '#FAFAF7'}" stroke-opacity="0.35" stroke-width="1.4" fill="none"/>
  </g>`;
}

// A gentle, editorial dog silhouette (side profile, sitting) built from soft curves
function dogSitting(x, y, scale, color, flip = false) {
  const t = flip ? `translate(${x} ${y}) scale(${-scale} ${scale})` : `translate(${x} ${y}) scale(${scale})`;
  return `<g transform="${t}">
    <path d="M -30,10 C -34,-6 -26,-22 -10,-28 C 6,-34 24,-30 30,-16 C 34,-6 32,6 26,14
             C 30,18 34,26 30,34 C 26,40 16,40 12,32 C 4,36 -8,36 -16,30
             C -22,36 -32,34 -34,26 C -36,18 -30,12 -30,10 Z" fill="${color}"/>
    <path d="M 14,-30 C 18,-40 30,-42 34,-34 C 36,-28 30,-22 24,-22 Z" fill="${color}"/>
    <path d="M -6,-30 C -4,-40 6,-44 10,-36 C 12,-30 6,-24 0,-25 Z" fill="${color}"/>
    <circle cx="27" cy="-16" r="1.6" fill="#FAFAF7"/>
    <path d="M 33,-10 C 38,-8 38,-2 33,0" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>`;
}

function dogRunning(x, y, scale, color) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M -36,4 C -30,-10 -14,-14 -2,-10 C 8,-16 22,-14 26,-4 C 30,2 26,8 20,8
             C 24,16 20,26 12,24 C 14,16 10,10 4,10 C -4,14 -14,12 -18,4
             C -24,10 -34,10 -36,4 Z" fill="${color}"/>
    <path d="M 14,-12 C 18,-22 28,-24 30,-16 C 31,-10 24,-6 18,-8 Z" fill="${color}"/>
    <circle cx="24" cy="-6" r="1.4" fill="#FAFAF7"/>
    <path d="M -32,6 L -40,16 M -20,10 L -26,20 M 8,10 L 4,20" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>`;
}

function bowl(x, y, scale, colorBowl, colorFood) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <ellipse cx="0" cy="6" rx="26" ry="8" fill="${colorBowl}"/>
    <path d="M -26,6 C -26,16 26,16 26,6 L 24,0 C 24,10 -24,10 -24,0 Z" fill="${colorBowl}"/>
    <ellipse cx="0" cy="0" rx="20" ry="6" fill="${colorFood}"/>
  </g>`;
}

function sun(x, y, r, color, opacity = 0.9) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${opacity}"/>`;
}

function frame(w, h, id, defs, body) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${id}Title">
  <title id="${id}Title">Serendib Paws Retreat illustration</title>
  <defs>${defs}</defs>
  ${body}
</svg>`;
}

function gradDefs(id, p) {
  return `<linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.sky1}"/>
      <stop offset="100%" stop-color="${p.sky2}"/>
    </linearGradient>
    <radialGradient id="${id}vignette" cx="50%" cy="40%" r="75%">
      <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.28"/>
    </radialGradient>`;
}

const scenes = {};

// ---- Hero Scene 1: Dog sitting in tropical garden ----------------------
scenes["scene-garden"] = (() => {
  const p = PALETTES.forest;
  const id = "sg";
  const body = `
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>
    ${sun(1240, 210, 120, p.accent, 0.85)}
    <path d="${blob(800, 720, 520, 2)}" fill="${p.ground}" opacity="0.9"/>
    ${leaf(120, 860, 3.4, -12, p.accent2, 0.9)}
    ${leaf(1420, 300, 3, 30, p.accent2, 0.8)}
    ${leaf(260, 240, 2.6, 60, p.accent, 0.7)}
    ${leaf(1500, 760, 3.8, -50, p.accent2, 0.85)}
    ${pawPrint(1100, 880, 1.1, -8, p.accent2, 0.5)}
    ${pawPrint(1180, 830, 1.1, 10, p.accent2, 0.4)}
    ${dogSitting(760, 760, 5.2, p.accent2)}
    <rect width="1600" height="1000" fill="url(#${id}vignette)"/>
  `;
  return frame(1600, 1000, id, gradDefs(id, p), body);
})();

// ---- Hero Scene 2: Dog eating healthy meal -------------------------------
scenes["scene-food"] = (() => {
  const p = PALETTES.beige;
  const id = "sf";
  const body = `
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>
    <path d="${blob(800, 780, 560, 5)}" fill="${p.ground}" opacity="0.08"/>
    ${leaf(150, 200, 3, 20, p.ground, 0.5)}
    ${leaf(1460, 220, 2.6, -30, p.accent, 0.7)}
    ${bowl(800, 700, 4.6, p.ground, p.accent)}
    ${dogSitting(800, 560, 4.4, p.ground)}
    ${pawPrint(500, 860, 1.2, 20, p.ground, 0.25)}
    ${pawPrint(1080, 850, 1.2, -25, p.ground, 0.22)}
    <rect width="1600" height="1000" fill="url(#${id}vignette)"/>
  `;
  return frame(1600, 1000, id, gradDefs(id, p), body);
})();

// ---- Hero Scene 3: Caregiver gently attending a dog ----------------------
scenes["scene-caregiver"] = (() => {
  const p = PALETTES.dusk;
  const id = "sc";
  const body = `
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>
    ${sun(300, 200, 100, p.accent, 0.55)}
    <path d="${blob(800, 760, 540, 8)}" fill="${p.ground}" opacity="0.85"/>
    ${leaf(1480, 700, 3.4, 40, p.accent2, 0.7)}
    <g transform="translate(660 560)">
      <path d="M -30,220 C -40,140 -30,60 10,20 C 40,-10 90,-8 100,30 C 108,60 90,80 70,86
               C 90,110 92,160 70,220 Z" fill="${p.accent2}" opacity="0.92"/>
      <circle cx="40" cy="-30" r="34" fill="${p.accent2}" opacity="0.92"/>
    </g>
    ${dogSitting(920, 800, 4.6, p.accent, true)}
    ${pawPrint(1150, 900, 1, 15, p.accent2, 0.35)}
    <rect width="1600" height="1000" fill="url(#${id}vignette)"/>
  `;
  return frame(1600, 1000, id, gradDefs(id, p), body);
})();

// ---- Hero Scene 4: Dogs relaxing / playing safely -------------------------
scenes["scene-play"] = (() => {
  const p = PALETTES.gold;
  const id = "sp";
  const body = `
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>
    <path d="${blob(800, 800, 560, 3)}" fill="${p.ground}" opacity="0.92"/>
    ${leaf(200, 260, 3.2, -15, p.accent2, 0.75)}
    ${leaf(1420, 240, 3, 40, p.accent2, 0.65)}
    ${dogRunning(560, 760, 3.6, p.accent2)}
    ${dogSitting(1020, 800, 4, p.accent2)}
    ${pawPrint(750, 900, 1, 5, p.accent2, 0.4)}
    ${pawPrint(830, 870, 1, -12, p.accent2, 0.32)}
    <rect width="1600" height="1000" fill="url(#${id}vignette)"/>
  `;
  return frame(1600, 1000, id, gradDefs(id, p), body);
})();

// ---- Rest / comfortable sleeping scene -------------------------------------
scenes["scene-rest"] = (() => {
  const p = PALETTES.forest;
  const id = "sr";
  const body = `
    <rect width="1600" height="1000" fill="url(#${id}sky)"/>
    <path d="${blob(800, 760, 520, 6)}" fill="${p.ground}" opacity="0.9"/>
    <ellipse cx="820" cy="820" rx="260" ry="70" fill="${p.accent2}" opacity="0.85"/>
    <g transform="translate(760 760) rotate(6)">
      <path d="M -70,10 C -90,-10 -60,-40 -10,-38 C 30,-36 60,-16 60,10
               C 60,30 30,40 -10,38 C -50,36 -60,26 -70,10 Z" fill="${p.accent}"/>
    </g>
    ${leaf(1440, 260, 3.2, -30, p.accent2, 0.7)}
    ${leaf(160, 220, 2.8, 45, p.accent, 0.6)}
    <rect width="1600" height="1000" fill="url(#${id}vignette)"/>
  `;
  return frame(1600, 1000, id, gradDefs(id, p), body);
})();

// ---- Portrait / team, about scene -------------------------------------------
scenes["scene-portrait"] = (() => {
  const p = PALETTES.beige;
  const id = "spo";
  const body = `
    <rect width="1200" height="1400" fill="url(#${id}sky)"/>
    <path d="${blob(600, 1050, 560, 4)}" fill="${p.ground}" opacity="0.08"/>
    ${dogSitting(600, 900, 6.4, p.ground)}
    ${leaf(150, 220, 3.4, 10, p.ground, 0.4)}
    ${leaf(1040, 260, 3, -20, p.accent, 0.7)}
    <rect width="1200" height="1400" fill="url(#${id}vignette)"/>
  `;
  return frame(1200, 1400, id, gradDefs(id, p), body);
})();

// ---- Small logo mark: paw + leaf -------------------------------------------
scenes["logo-mark"] = (() => {
  const body = `
    <g fill="#F5E8D0">
      <ellipse cx="0" cy="12" rx="15" ry="18"/>
      <ellipse cx="-19" cy="-6" rx="7.5" ry="9.5"/>
      <ellipse cx="-7" cy="-20" rx="7" ry="9"/>
      <ellipse cx="7" cy="-20" rx="7" ry="9"/>
      <ellipse cx="19" cy="-6" rx="7.5" ry="9.5"/>
    </g>
    <path d="M 0,26 C 24,20 34,0 30,-24 C 8,-18 -6,2 0,26 Z" fill="none" stroke="#D9A441" stroke-width="2.4" opacity="0.9"/>
  `;
  return `<svg width="80" height="80" viewBox="-40 -40 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logoTitle">
  <title id="logoTitle">Serendib Paws Retreat mark</title>
  ${body}
</svg>`;
})();

// ---- Gallery variants: mixed crops/palettes from the same visual language --
const galleryPlan = [
  ["forest", "sit"], ["beige", "run"], ["gold", "sit"], ["dusk", "rest"],
  ["forest", "food"], ["beige", "sit"], ["gold", "run"], ["dusk", "sit"],
];
galleryPlan.forEach(([pal, type], i) => {
  const p = PALETTES[pal];
  const id = `gal${i}`;
  let mid = "";
  if (type === "sit") mid = dogSitting(600, 560, 3.6, p.accent2);
  if (type === "run") mid = dogRunning(600, 560, 3, p.accent2);
  if (type === "rest") mid = `<ellipse cx="600" cy="620" rx="220" ry="60" fill="${p.accent2}" opacity="0.85"/><g transform="translate(560 570) rotate(4)"><path d="M -60,10 C -78,-8 -52,-34 -8,-32 C 26,-30 52,-14 52,10 C 52,26 26,34 -8,32 C -42,30 -52,22 -60,10 Z" fill="${p.accent}"/></g>`;
  if (type === "food") mid = bowl(600, 600, 3.6, p.ground, p.accent) + dogSitting(600, 470, 3, p.ground);
  const body = `
    <rect width="1200" height="1200" fill="url(#${id}sky)"/>
    <path d="${blob(600, 640, 420, i + 1)}" fill="${p.ground}" opacity="${pal === "beige" ? 0.08 : 0.85}"/>
    ${leaf(120, 180, 2.6, i * 12 - 20, p.accent2, 0.6)}
    ${leaf(1080, 200, 2.4, -i * 10 + 20, p.accent, 0.55)}
    ${mid}
    <rect width="1200" height="1200" fill="url(#${id}vignette)"/>
  `;
  scenes[`gallery-${i + 1}`] = frame(1200, 1200, id, gradDefs(id, p), body);
});

// ---- Subtle repeating leaf/paw texture pattern (used as section bg) -------
scenes["pattern-leaf"] = `<svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.5">
    ${leaf(40, 40, 1.1, 10, "#234D3C", 0.14)}
    ${leaf(180, 90, 0.9, -30, "#D9A441", 0.12)}
    ${pawPrint(100, 180, 0.7, 20, "#234D3C", 0.12)}
    ${pawPrint(200, 210, 0.6, -15, "#234D3C", 0.1)}
  </g>
</svg>`;

for (const [name, svg] of Object.entries(scenes)) {
  writeFileSync(join(OUT, `${name}.svg`), svg.trim());
}

console.log(`Generated ${Object.keys(scenes).length} placeholder images in ${OUT}`);
