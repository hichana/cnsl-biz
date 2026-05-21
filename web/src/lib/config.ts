import type { Tone } from "./content";

export type Palette = "hazard" | "safety" | "toxic" | "emerg";
export type Density = "dense" | "regular" | "airy";
export type HeroVariant = "roast" | "cleanup" | "shipped";

export const PALETTES: Record<Palette, { accent: string; name: string }> = {
  hazard: { accent: "#f5e50a", name: "Hazard Yellow" },
  safety: { accent: "#ff5b1a", name: "Safety Orange" },
  toxic: { accent: "#b6ff00", name: "Toxic Green" },
  emerg: { accent: "#ff3030", name: "Emergency Red" },
};

export const SITE_CONFIG = {
  palette: "hazard" as Palette,
  heroVariant: "roast" as HeroVariant,
  tone: "roast" as Tone,
  density: "regular" as Density,
  showAuditTeaser: true,
  shortMuted: true,
} as const;
