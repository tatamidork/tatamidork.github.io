const base = '/assets/wallpapers/';

const data = {
  "arcade": {
    title: "Arcade",
    key: "arcade",
    source: `${base}Arcade Wall preview.png`,
    description: "Retro arcade vibes",
    basePrice: 1,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "feel-the-breeze": {
    title: "Feel the breeze",
    key: "feel-the-breeze",
    source: `${base}Feel the breeze Wall preview.png`,
    description: "Calm and peaceful",
    basePrice: 0,
    releaseDate: "2026-01-02T00:00:00Z",
  },
  "game-girl": {
    title: "Game girl",
    key: "game-girl",
    source: `${base}Game girl Wall preview.png`,
    description: "Gaming aesthetic",
    basePrice: 0,
    releaseDate: "2026-01-03T00:00:00Z",
  },
  "halloween": {
    title: "Halloween",
    key: "halloween",
    source: `${base}Halloween wall preview.png`,
    description: "Spooky season",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "make-a-wish": {
    title: "Make a wish",
    key: "make-a-wish",
    source: `${base}Make a wish Wall preview.png`,
    description: "Dreamy and magical",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "night-ride": {
    title: "Night ride",
    key: "night-ride",
    source: `${base}Night ride Wall preview.png`,
    description: "Neon night journey",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "reze": {
    title: "Reze",
    key: "reze",
    source: `${base}Reze wall preview.png`,
    description: "Character portrait",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "see-you-in-space": {
    title: "See you in space",
    key: "see-you-in-space",
    source: `${base}See you in space wall preview.png`,
    description: "Cosmic adventure",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "spring": {
    title: "Spring",
    key: "spring",
    source: `${base}Spring wall preview.png`,
    description: "Nature's renewal",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "summer": {
    title: "Summer",
    key: "summer",
    source: `${base}Summer wall preview.png`,
    description: "Warm sunny days",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "sv-frieren": {
    title: "SV Frieren",
    key: "sv-frieren",
    source: `${base}SV Frieren preview.png`,
    description: "Fantasy character",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "take-care": {
    title: "Take care",
    key: "take-care",
    source: `${base}Take care wall preview.png`,
    description: "Heartfelt message",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "tea-time": {
    title: "Tea time",
    key: "tea-time",
    source: `${base}Tea time wall preview.png`,
    description: "Cozy relaxation",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  },
  "wild-crowd": {
    title: "Wild crowd",
    key: "wild-crowd",
    source: `${base}Wild crowd wall preview.png`,
    description: "Energetic gathering",
    basePrice: 0,
    releaseDate: "2026-01-01T00:00:00Z",
  }
};

function getWallpapers() {
  return Object.values(data).sort((a, b) => 
    new Date(b.releaseDate) - new Date(a.releaseDate)
  );
}

export default getWallpapers();