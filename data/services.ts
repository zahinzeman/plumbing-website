export interface ServiceItem {
  slug: string;
  route: string;
  name: string;
  card_description: string;
  page_description: string;
  meta_title: string;
  icon?: {
    component_name?: string;
    library?: string;
    glyph?: string;
    size?: string;
    color?: string;
    [key: string]: any;
  };
  hero_image?: {
    subject?: string;
    aspect_ratio?: string;
    generation_prompt?: string;
    [key: string]: any;
  };
  body_outline?: {
    blocks?: Array<{ tag: string; heading?: string; approx_words?: number; text?: string }>;
    structure?: string;
    note?: string;
    [key: string]: any;
  };
  faq?: {
    questions?: string[];
    answers?: string | string[];
    [key: string]: any;
  };
  [key: string]: any;
}

export const services: ServiceItem[] = [
  {
    "slug": "pipe-installation",
    "route": "/services/pipe-installation",
    "name": "Pipe Installation",
    "card_description": "New fitting & full repiping for homes and businesses",
    "page_description": "Expert pipe installation and full repiping for homes and businesses. Licensed plumbers, clean work, upfront pricing. Book your service today.",
    "meta_title": "Pipe Installation - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "Pipe",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Wrench",
      "glyph": "elbow pipe with coupling/flange",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "close-up of a plumber's bare hands tightening a brass pipe fitting on a steel line, corrugated hose and foil insulation behind",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, close-up of a plumber's bare hands tightening a brass pipe fitting on a steel line, corrugated hose and foil insulation behind. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Reliable Pipe Installation and Repiping"
        },
        {
          "tag": "p",
          "approx_words": 41
        },
        {
          "tag": "h3",
          "heading": "When You Need New Pipes"
        },
        {
          "tag": "p",
          "approx_words": 32
        },
        {
          "tag": "h2",
          "heading": "Clean Work, Upfront Pricing"
        },
        {
          "tag": "p",
          "approx_words": 35
        },
        {
          "tag": "h3",
          "heading": "Our Installation Process"
        },
        {
          "tag": "p",
          "approx_words": 30
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "How do I know if I need my pipes replaced?",
        "What pipe materials do you install?",
        "How long does a repipe take?",
        "Will you damage my walls or floors?",
        "Do you provide an estimate before starting?",
        "Are your plumbers licensed and insured?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "drain-cleaning",
    "route": "/services/drain-cleaning",
    "name": "Drain Cleaning",
    "card_description": "Fast clearing of clogged sinks, tubs, and main lines",
    "page_description": "Fast drain cleaning for clogged sinks, tubs, and main lines. Licensed plumbers clear blockages quickly with no mess. Book same-day service.",
    "page_description_note": "Live site typo (\"ast drain cleaning…\") fixed.",
    "meta_title": "Drain Cleaning - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "Asterisk",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Asterisk",
      "glyph": "6-spoke asterisk",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "plumber kneeling on a wood floor feeding a drain auger into an open under-sink kitchen cabinet",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, plumber kneeling on a wood floor feeding a drain auger into an open under-sink kitchen cabinet. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Fast, Thorough Drain Cleaning"
        },
        {
          "tag": "p",
          "approx_words": 36
        },
        {
          "tag": "h3",
          "heading": "Signs Your Drain Needs Attention"
        },
        {
          "tag": "p",
          "approx_words": 27
        },
        {
          "tag": "h2",
          "heading": "Lasting Results, Not Quick Fixes"
        },
        {
          "tag": "p",
          "approx_words": 38
        },
        {
          "tag": "h3",
          "heading": "Preventing Future Clogs"
        },
        {
          "tag": "p",
          "approx_words": 25
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "What causes most drain clogs?",
        "Can you clear a clog the same day?",
        "Do you use snaking or hydro jetting?",
        "Are chemical drain cleaners safe to use first?",
        "How can I prevent future clogs?",
        "Will drain cleaning damage my pipes?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "water-heater-repair",
    "route": "/services/water-heater-repair",
    "name": "Water Heater Repair",
    "card_description": "Install, service & replace tank and tankless units",
    "page_description": "Water heater repair, service, and replacement for tank and tankless units. Licensed plumbers, same-day callouts, upfront pricing. Book now.",
    "meta_title": "Water Heater Repair - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "Notepad (closest; custom panel)",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Heater",
      "glyph": "rounded rectangle panel with 3 horizontal lines, middle one dashed",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "technician's hands adjusting valves and connections on the side of a white tank water heater",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, technician's hands adjusting valves and connections on the side of a white tank water heater. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Water Heater Repair and Replacement"
        },
        {
          "tag": "p",
          "approx_words": 34
        },
        {
          "tag": "h3",
          "heading": "Common Water Heater Problems"
        },
        {
          "tag": "p",
          "approx_words": 24
        },
        {
          "tag": "h2",
          "heading": "Tank and Tankless Experts"
        },
        {
          "tag": "p",
          "approx_words": 33
        },
        {
          "tag": "h3",
          "heading": "When to Replace Instead of Repair"
        },
        {
          "tag": "p",
          "approx_words": 30
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "Why is my water heater not producing hot water?",
        "Should I repair or replace my water heater?",
        "Do you service tankless water heaters?",
        "How long does a water heater last?",
        "Can you come out the same day?",
        "What size water heater do I need?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "emergency-plumbing",
    "route": "/services/emergency-plumbing",
    "name": "Emergency Plumbing",
    "card_description": "24/7 callouts for burst pipes and urgent failures",
    "page_description": "24/7 emergency plumbing for burst pipes, leaks, and urgent failures. Licensed plumbers on call day and night. Call now for fast response.",
    "meta_title": "Emergency Plumbing - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "ClockUser",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: ClockAlert",
      "glyph": "clock face with small user badge bottom-right",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "hands with red-handled pliers gripping white PVC drain pipe under a sink",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, hands with red-handled pliers gripping white PVC drain pipe under a sink. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "24/7 Emergency Plumbing"
        },
        {
          "tag": "p",
          "approx_words": 35
        },
        {
          "tag": "h3",
          "heading": "What Counts as an Emergency"
        },
        {
          "tag": "p",
          "approx_words": 31
        },
        {
          "tag": "h2",
          "heading": "Fast Response When It Matters"
        },
        {
          "tag": "p",
          "approx_words": 29
        },
        {
          "tag": "h3",
          "heading": "What to Do Before We Arrive"
        },
        {
          "tag": "p",
          "approx_words": 30
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "What counts as a plumbing emergency?",
        "Are you really available 24/7?",
        "What should I do while I wait for a plumber?",
        "How fast can you arrive?",
        "Is emergency service more expensive?",
        "Can you handle a burst pipe?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "bathroom-remodeling",
    "route": "/services/bathroom-remodeling",
    "name": "Bathroom Remodeling",
    "card_description": "Fixtures, toilets, showers, and vanity upgrades",
    "page_description": "Bathroom remodeling done right — fixtures, toilets, showers, and vanities. Licensed plumbers, clean work, clear pricing. Get a free quote.",
    "meta_title": "Bathroom Remodeling - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "Bathtub",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Bath",
      "glyph": "bathtub with faucet",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "plumber in a cap and plaid shirt crouched working beside a new tub in a bright modern bathroom",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, plumber in a cap and plaid shirt crouched working beside a new tub in a bright modern bathroom. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Bathroom Remodeling Done Right"
        },
        {
          "tag": "p",
          "approx_words": 29
        },
        {
          "tag": "h3",
          "heading": "What We Handle"
        },
        {
          "tag": "p",
          "approx_words": 26
        },
        {
          "tag": "h2",
          "heading": "Quality That Lasts"
        },
        {
          "tag": "p",
          "approx_words": 27
        },
        {
          "tag": "h3",
          "heading": "Planning Your Project"
        },
        {
          "tag": "p",
          "approx_words": 26
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "What does your bathroom remodeling include?",
        "Can you relocate plumbing for a new layout?",
        "How long does a bathroom remodel take?",
        "Do you provide a quote before starting?",
        "Can you help me choose fixtures?",
        "Will the work be up to code?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "leak-detection",
    "route": "/services/leak-detection",
    "name": "Leak Detection",
    "card_description": "Find and fix hidden leaks before they cause damage",
    "page_description": "Hidden leak detection to find and fix leaks before they cause damage. Licensed plumbers, fast diagnosis, upfront pricing. Book an inspection.",
    "meta_title": "Leak Detection - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "Drop",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Droplet",
      "glyph": "water drop with inner highlight arc",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "gloved hands using a red pipe wrench on chrome pipes against a white tiled wall",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, gloved hands using a red pipe wrench on chrome pipes against a white tiled wall. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Precise Leak Detection"
        },
        {
          "tag": "p",
          "approx_words": 31
        },
        {
          "tag": "h3",
          "heading": "Signs of a Hidden Leak"
        },
        {
          "tag": "p",
          "approx_words": 29
        },
        {
          "tag": "h2",
          "heading": "Fix It Before It Spreads"
        },
        {
          "tag": "p",
          "approx_words": 23
        },
        {
          "tag": "h3",
          "heading": "Our Detection Tools"
        },
        {
          "tag": "p",
          "approx_words": 22
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "How do I know if I have a hidden leak?",
        "How do you find leaks without tearing up walls?",
        "Why is fixing a small leak so important?",
        "Can you detect leaks in slab or underground pipes?",
        "How much does leak detection cost?",
        "How quickly can you come out?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "sewer-line-service",
    "route": "/services/sewer-line-service",
    "name": "Sewer Line Service",
    "card_description": "Inspection, repair, and replacement of sewer lines",
    "page_description": "Sewer line inspection, repair, and replacement by licensed plumbers. Clean, reliable work with upfront pricing. Book your service today.",
    "meta_title": "Sewer Line Service - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "MapPinSimpleLine",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: MapPin",
      "glyph": "circle on a stem standing on a ground line",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "orange PVC sewer pipe sections laid in an open dirt trench, worker boots at top of frame",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, orange PVC sewer pipe sections laid in an open dirt trench, worker boots at top of frame. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Sewer Line Inspection and Repair"
        },
        {
          "tag": "p",
          "approx_words": 33
        },
        {
          "tag": "h3",
          "heading": "Warning Signs of Sewer Trouble"
        },
        {
          "tag": "p",
          "approx_words": 26
        },
        {
          "tag": "h2",
          "heading": "Modern, Less-Invasive Methods"
        },
        {
          "tag": "p",
          "approx_words": 24
        },
        {
          "tag": "h3",
          "heading": "Repair or Replace"
        },
        {
          "tag": "p",
          "approx_words": 27
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "What are the signs of a sewer line problem?",
        "How do you inspect a sewer line?",
        "Can a sewer line be repaired without digging?",
        "What causes sewer line damage?",
        "How long does sewer line work take?",
        "Do you offer upfront pricing?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "water-filtration",
    "route": "/services/water-filtration",
    "name": "Water Filtration",
    "card_description": "Whole-home filtration and softener installation",
    "page_description": "Whole-home water filtration and softener installation. Cleaner, safer water from every tap. Licensed plumbers, upfront pricing. Get a quote.",
    "meta_title": "Water Filtration - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "DropHalf",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Droplet",
      "glyph": "drop split by a vertical line",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "bearded plumber in a yellow hard hat and safety glasses installing a blue whole-home water filter housing with red valves",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, bearded plumber in a yellow hard hat and safety glasses installing a blue whole-home water filter housing with red valves. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Whole-Home Water Filtration"
        },
        {
          "tag": "p",
          "approx_words": 29
        },
        {
          "tag": "h3",
          "heading": "Why Filter Your Water"
        },
        {
          "tag": "p",
          "approx_words": 24
        },
        {
          "tag": "h2",
          "heading": "Systems Matched to Your Home"
        },
        {
          "tag": "p",
          "approx_words": 28
        },
        {
          "tag": "h3",
          "heading": "Maintenance and Support"
        },
        {
          "tag": "p",
          "approx_words": 27
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "What are the benefits of whole-home water filtration?",
        "What’s the difference between a filter and a softener?",
        "How do I know if I need water treatment?",
        "Where is the system installed?",
        "How much maintenance does it need?",
        "Are your installers licensed?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  },
  {
    "slug": "sump-pump-services",
    "route": "/services/sump-pump-services",
    "name": "Sump Pump Services",
    "card_description": "Install and repair pumps that keep basements dry and flood-free.",
    "page_description": "Sump pump installation and repair to keep your basement dry and flood-free. Licensed plumbers, same-day service, upfront pricing. Book now.",
    "meta_title": "Sump Pump Services - CorePlumb Plumbing Services",
    "icon": {
      "component_name": "Flower",
      "library": "@phosphor-icons/react regular (1.5px stroke look); lucide fallback: Flower",
      "glyph": "8-petal flower",
      "size": "40px",
      "color": "#002454, #1C6BCF on card hover"
    },
    "hero_image": {
      "subject": "technician in a blue shirt servicing a green submersible sump pump in a basement pit, backup battery beside it",
      "aspect_ratio": "1920:1000 (shown 1440x400 cover)",
      "generation_prompt": "Photorealistic editorial photo, technician in a blue shirt servicing a green submersible sump pump in a basement pit, backup battery beside it. Natural light, shallow depth of field, crisp detail, neutral-cool grade, clean and professional, no text, no logos, wide 1.92:1 framing."
    },
    "body_outline": {
      "blocks": [
        {
          "tag": "h2",
          "heading": "Sump Pump Installation and Repair"
        },
        {
          "tag": "p",
          "approx_words": 32
        },
        {
          "tag": "h3",
          "heading": "Signs Your Pump Is Failing"
        },
        {
          "tag": "p",
          "approx_words": 25
        },
        {
          "tag": "h2",
          "heading": "Stay Dry Year-Round"
        },
        {
          "tag": "p",
          "approx_words": 25
        },
        {
          "tag": "h3",
          "heading": "Routine Testing and Maintenance"
        },
        {
          "tag": "p",
          "approx_words": 27
        }
      ],
      "structure": "h2 → p → h3 → p → h2 → p → h3 → p (8 blocks, no lists or links)",
      "note": "Headings are short UI copy and may be reused; write original paragraphs on each heading topic."
    },
    "faq": {
      "questions": [
        "What does a sump pump do?",
        "How do I know if my sump pump is failing?",
        "How often should a sump pump be replaced?",
        "Do I need a battery backup?",
        "Can you install a sump pump where there isn’t one?",
        "How fast can you help with a flooding basement?"
      ],
      "answers": "not captured — write 1–2 sentence answers (~15–25 words)"
    }
  }
];
