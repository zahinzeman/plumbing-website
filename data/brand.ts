export const brand = {
  "_note": "Single source of truth for brand facts. Every component must read from this (e.g. lib/brand.ts) so the site can be rebranded in one place.",
  "name": "CorePlumb",
  "trademark_display": "CorePlumb™ (with ™ only in the hero sub-headline)",
  "tagline": "Licensed Plumbers & Handyman Services",
  "phone_display": "+1 (555) 221-4456",
  "phone_href": "tel:+15552214456",
  "email": "info@coreplumb.com",
  "address": "123 Main St. Anytown, USA",
  "service_area": "USA",
  "rating_claim": "100+ 5 star rating on Trust Pilot",
  "satisfaction_claim": "99% Customer satisfaction",
  "socials": {
    "facebook": "https://facebook.com",
    "instagram": "https://instagram.com",
    "x": "https://x.com",
    "reddit": "https://reddit.com"
  },
  "trustpilot_url": "https://www.trustpilot.com",
  "copyright": "Copyright © {currentYear} CorePlumb"
} as const;

export type Brand = typeof brand;
