/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Testimonial, FounderInfo } from './types';

export const STATS = [
  { value: '50+', label: 'Luxury Projects Delivered' },
  { value: '10+', label: 'Years of Architectural Excellence' },
  { value: '100%', label: 'Bespoke Client Satisfaction' },
  { value: '5.0', label: 'Google Rating' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Vedant Rathi',
    rating: 5,
    review: 'Very professional, customer centric yet quality first and functionality driven approach.',
    location: 'Aundh, Pune',
    date: 'February 2026'
  },
  {
    id: 't2',
    name: 'Suraj Somani',
    rating: 5,
    review: 'Great experience and satisfying. Good quality work.',
    location: 'Aundh, Pune',
    date: 'April 2026'
  },
  {
    id: 't3',
    name: 'Roshni Lee',
    rating: 5,
    review: 'Your sense of style and detailing is just perfect. I love how everything has come together.',
    location: 'Kalyani Nagar, Pune',
    date: 'January 2026'
  },
  {
    id: 't4',
    name: 'Abhijit Padhye',
    rating: 5,
    review: 'They fit everything in your budget. The team from Sako Design Studio is always at site to look after the work and getting it in time.',
    location: 'Baner, Pune',
    date: 'May 2026'
  },
  {
    id: 't5',
    name: 'Shivani Mandhani',
    rating: 5,
    review: 'I highly recommend them to anyone seeking high-quality interior design solutions.',
    location: 'Aundh, Pune',
    date: 'March 2026'
  },
  {
    id: 't6',
    name: 'Omkar Shinde',
    rating: 5,
    review: 'One of the best interior design studios in Pune.',
    location: 'Aundh, Pune',
    date: 'December 2025'
  }
];

export const FOUNDER_INFO: FounderInfo = {
  name: 'Sanjana Chacko',
  role: 'Principal Interior Architect & Lead Designer',
  bio: 'Driven by an uncompromising commitment to quality and architectural symmetry, Sanjana Chacko leads Sako Design Studio, elevating spaces into international-standard luxury. With deep field expertise across elite Pune neighborhoods, Sanjana directly oversees every single job site—bringing technical precision and sensory warmth together to construct spaces matching our clients\' highest lifestyle aspirations.',
  image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w800',
  philosophy: 'We do not decorate walls. We draft functional monuments configured for private luxury, matching absolute beauty with robust ergonomics.',
  values: [
    {
      title: 'Site-First Supervision',
      description: 'Unlike generic firms, our senior design team is on-site personally. We guarantee absolute fidelity between design renders and the physical build.'
    },
    {
      title: 'Symmetrical Modern Aesthetic',
      description: 'We adhere to architectural principles of scale, contrast, and light, crafting an unmistakable air of timeless warmth and curated opulence.'
    },
    {
      title: 'Honest Material Integrity',
      description: 'No cheap substitutions. We select elite marbles, custom brass, high-gauge structural framework, and tailored veneers meant to gracefully age over generations.'
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'The Obsidian Suite',
    subtitle: 'Ultra-Luxury Living & Entertainment Lounge',
    category: 'Living Rooms',
    description: 'A bespoke living experience commissioned in Pune, embracing deep charcoals, rich beige textures, and custom brass partitions. The design maximizes ambient natural light while creating mood-driven evening scenes with integrated brass chandeliers.',
    location: 'Aundh, Pune',
    year: '2025',
    size: '1,200 sq.ft.',
    challenge: 'The original layout had low suspended beams and restrictive utility pipes that shattered the visual continuity of the ceiling plains.',
    solution: 'Designed a staggered, floating oak-veneer ceiling profile accented with light troughs, weaving the structural concrete elements into premium architectural zoning.',
    materials: ['Italian Statuario Marble', 'Brushed Champagne Brass', 'American Charcoal Oak', 'Premium Bouclé Fabrics'],
    mainImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWzNoKeMWsxiVRWuZfmtcSJtFBfZM1PIn-7har-TfnsUAnbUc1UMjn3O5Vt4G9rmhfdBjXGY8a92hTza7jDBwK7a3ceb8RiPb97GhB4D_9yB--RvgcJiThkxbjQzSa3sDpfdoH9g=w1200-h800-k-no',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHd3kKO-DVtTCksiUwsf4n56bJURfdWtkWRddMyIj216Rq_d_5uFnU4PSX2T0KjEfIkf4nUmInvUcunQSJg3vCQUHyIh1LlUoPGsfLn1kvhjaT8iIvTYKjn5FXNtM-74faukQlr=w1200-h1200-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w1200-h1200-k-no'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWzNoKeMWsxiVRWuZfmtcSJtFBfZM1PIn-7har-TfnsUAnbUc1UMjn3O5Vt4G9rmhfdBjXGY8a92hTza7jDBwK7a3ceb8RiPb97GhB4D_9yB--RvgcJiThkxbjQzSa3sDpfdoH9g=w1200-h800-k-no'
  },
  {
    id: 'p2',
    title: 'The Aurelia Penthouse Bedroom',
    subtitle: 'Warm Minimalist Primary Sanctuary',
    category: 'Bedrooms',
    description: 'A private bedroom suite drafted to foster restoration. Staggered wooden slatting, rich silk upholstery, and soft indirect lighting elements construct an oasis of elegant structural design.',
    location: 'Aundh, Pune',
    year: '2026',
    size: '850 sq.ft.',
    challenge: 'A massive north-facing structural glass column disrupted the symmetry of the main headboard focal point.',
    solution: 'Engineered a wrapping travertine and cedar-slat headboards module that completely integrated the column into a hidden reading nook and bedside shelving unit.',
    materials: ['Sandblasted Travertine', 'Natural Cedar Slats', 'Raw Silk Paneling', 'Bespoke Linen Bedding'],
    mainImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHd3kKO-DVtTCksiUwsf4n56bJURfdWtkWRddMyIj216Rq_d_5uFnU4PSX2T0KjEfIkf4nUmInvUcunQSJg3vCQUHyIh1LlUoPGsfLn1kvhjaT8iIvTYKjn5FXNtM-74faukQlr=w1200-h1200-k-no',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w1200-h1200-k-no'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHd3kKO-DVtTCksiUwsf4n56bJURfdWtkWRddMyIj216Rq_d_5uFnU4PSX2T0KjEfIkf4nUmInvUcunQSJg3vCQUHyIh1LlUoPGsfLn1kvhjaT8iIvTYKjn5FXNtM-74faukQlr=w1200-h1200-k-no'
  },
  {
    id: 'p3',
    title: 'Calacatta Culinary Forge',
    subtitle: 'Elite Residential Modular Kitchen',
    category: 'Modular Kitchen',
    description: 'A professional chef-grade kitchen for high-end hosting. Blends highly detailed Calacatta marble slab islands with concealed high-tech appliances and soft-touch champagne gold lacquer.',
    location: 'Aundh, Pune',
    year: '2025',
    size: '450 sq.ft.',
    challenge: 'Maintaining a clean minimalist kitchen canvas while ensuring swift accessibility to a massive array of Indian spices and heavy cooking items.',
    solution: 'Designed an motorized pocket-door pantry mechanism integrated within the bookmatched marble backsplash pane, completely sealing spices away at the touch of a sensory pad.',
    materials: ['Calacatta Gold Marble', 'Champagne Lacquer', 'Hidden Touch Gola Profiles', 'Miele Professional Systems'],
    mainImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w1200-h1200-k-no',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGntLk27eeZbQFdZwVt7-dIRM7ZvVNkxVCql6LDj6erBmmVaSY1VGxHaFQXHZMefodUu0bwwPo3hcE0fb9UpwKBaAiJtb8U_4PoVHOv5Z0iP7imIMgVQGxql6LUH9RCf2LmHjA=w1200-h1200-k-no'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w1200-h1200-k-no'
  },
  {
    id: 'p4',
    title: 'The Aundh Creative Suite',
    subtitle: 'Bespoke Corporate Executive Headquarters',
    category: 'Office Spaces',
    description: 'An commanding, calm executive experience customized for high productivity. Highlights include structured soundproof glass walls, dynamic acoustic paneling, and custom marble-clad reception lounges.',
    location: 'Aundh, Pune',
    year: '2026',
    size: '2,200 sq.ft.',
    challenge: 'A long, rectangular floor plan created a corridor-effect that robbed inner workstations of direct solar access.',
    solution: 'Erected curved smart-glass partitioning that toggles opacity, permitting deep solar penetration during standard operations and instant privacy during client board meetings.',
    materials: ['Nero Marquina Marble', 'Acoustic Wool Paneling', 'Smart Electrochromic Glass', 'Premium Matte Black Steel'],
    mainImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGntLk27eeZbQFdZwVt7-dIRM7ZvVNkxVCql6LDj6erBmmVaSY1VGxHaFQXHZMefodUu0bwwPo3hcE0fb9UpwKBaAiJtb8U_4PoVHOv5Z0iP7imIMgVQGxql6LUH9RCf2LmHjA=w1200-h1200-k-no',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF6CkpDWXaVAbxJ5Qv3uFRwcdrxeG7AyXeM3uRXxPAzKpklNH7USDP97q4EcAbSB67nUGln6-tSewFyGqtBdZprJ-lMbAv1cNnXNdMD7PmdpOsTFUZzaMzTIfFzomW30KbxZNc=w1200-h900-k-no'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGntLk27eeZbQFdZwVt7-dIRM7ZvVNkxVCql6LDj6erBmmVaSY1VGxHaFQXHZMefodUu0bwwPo3hcE0fb9UpwKBaAiJtb8U_4PoVHOv5Z0iP7imIMgVQGxql6LUH9RCf2LmHjA=w1200-h1200-k-no'
  },
  {
    id: 'p5',
    title: 'The Bronze Canopy Estate',
    subtitle: 'Prestige Full-Floor Modern Villa',
    category: 'Residential',
    description: 'A multi-generational full-floor residential villa tailored with premium bespoke joinery. Includes customized lighting scenarios, private elevator lounge, double-height ceilings, and warm bronze-toned textures.',
    location: 'Aundh, Pune',
    year: '2025',
    size: '4,500 sq.ft.',
    challenge: 'Satisfying the traditional multi-generational open principles (Vastu) while delivering a highly private luxury retreat for younger family members.',
    solution: 'Designed handcarved sliding bronze screen panels (Jaali partitions) that zone sections beautifully, keeping visual airflow fluid while permitting quick acoustic locking.',
    materials: ['Bespoke Hammered Bronze', 'Greek Volakas Marble', 'Imported Walnut Veneer', 'Velvet Drapery'],
    mainImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF6CkpDWXaVAbxJ5Qv3uFRwcdrxeG7AyXeM3uRXxPAzKpklNH7USDP97q4EcAbSB67nUGln6-tSewFyGqtBdZprJ-lMbAv1cNnXNdMD7PmdpOsTFUZzaMzTIfFzomW30KbxZNc=w1200-h900-k-no',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWzNoKeMWsxiVRWuZfmtcSJtFBfZM1PIn-7har-TfnsUAnbUc1UMjn3O5Vt4G9rmhfdBjXGY8a92hTza7jDBwK7a3ceb8RiPb97GhB4D_9yB--RvgcJiThkxbjQzSa3sDpfdoH9g=w1200-h800-k-no'
    ]
  },
  {
    id: 'p6',
    title: 'Sako Designer Studio Office',
    subtitle: 'Dynamic Creative Lab & Showroom',
    category: 'Commercial',
    description: 'A sensory-rich showcase space designed to brief luxury clients. Incorporates samples libraries elegantly hidden within sandblasted white concrete panels.',
    location: 'Aundh, Pune',
    year: '2026',
    size: '1,500 sq.ft.',
    challenge: 'Hosting an extensive samples library of hundreds of marbles, veneers, and hardware options without letting the studio look cluttered or dusty.',
    solution: 'Engineered clean pivot-flush columns that swing 180 degrees, keeping complex material sheets tucked seamlessly away until client presentations.',
    materials: ['Exposed White Concrete', 'Polished Microcement', 'Minimal Led Track Systems', 'Custom Brass Cabinets'],
    mainImage: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w1200-h1200-k-no',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGntLk27eeZbQFdZwVt7-dIRM7ZvVNkxVCql6LDj6erBmmVaSY1VGxHaFQXHZMefodUu0bwwPo3hcE0fb9UpwKBaAiJtb8U_4PoVHOv5Z0iP7imIMgVQGxql6LUH9RCf2LmHjA=w1200-h1200-k-no'
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Immersion & Spatial Discovery',
    description: 'We meet in our Aundh studio or at your site for a comprehensive lifestyle discovery. We explore your tactile preferences, visual lifestyle values, and financial target scopes.'
  },
  {
    step: '02',
    title: 'Symmetry & Conceptual Drafting',
    description: 'We develop highly detailed architectural plans and layout models, pairing precise CAD plans with gorgeous photorealistic 3D renders matching our bespoke beige and charcoal luxurious themes.'
  },
  {
    step: '03',
    title: 'Tactile Material Curation',
    description: 'Together, we select customized marbles, veneers, metals, and premium hardware. Our material logs are fully transparent with absolutely no surprises.'
  },
  {
    step: '04',
    title: 'Bespoke Supervisor Execution',
    description: "Sako Design Studio's lead designers directly direct the build at your Pune site. Our elite specialized craftsmen carry out calculations with absolute mechanical discipline."
  },
  {
    step: '05',
    title: 'Elite White-Glove Handover',
    description: 'We conduct rigorous deep cleaning, final styling touch-ups, and a walk-through. Your keys are presented with our official structural materials guarantee certificate.'
  }
];

export const FAQS = [
  {
    question: 'Where is Sako Design Studio located, and do you serve outside Pune?',
    answer: 'Our main office & design gallery is located at Nagras Rd, Shambhu Vihar Society, Aundh, Pune, Maharashtra 411067. We primarily focus our site operations dynamically in Pune to allow our senior design leaders to inspect work physically every day.'
  },
  {
    question: 'How is Sako Design Studio involved in my project directly?',
    answer: 'Unlike massive commercial design chains and aggregator companies where your project is offloaded to junior interns, our principal team personally creates the architectural space concepts, curates materials with you, and maintains a daily physical presence at the construction site to log work and enforce absolute quality benchmarks.'
  },
  {
    question: 'Can you work within a custom fixed budget?',
    answer: 'Absolutely. We are highly experienced in fitting luxury aesthetics within specified budget scopes. We achieve this through smart material engineering and direct sourcing of premium timber and stones, which completely eliminates middle-man markup fees.'
  },
  {
    question: 'What is the standard timeline for delivering a luxury 3BHK penthouse or office?',
    answer: 'Proper luxury cannot be rushed, but efficiency is crucial. Typically, high-end residential interiors take 45 to 75 working days from approval of designs. We create a strict timeline schedule at the beginning and track the progress on-site every day to avoid any delays.'
  },
  {
    question: 'Is there a warranty or after-handover service for the custom woodwork and plumbing?',
    answer: 'Yes. All our bespoke structural storage cabinets, modular solutions, and electrical/woodwork systems come with a comprehensive structural warranty. We design systems to last decades and provide ongoing maintenance check-ups.'
  }
];
