import { assets } from './assets'

export type RatingLabel = 'OUTSTANDING' | 'EXCELLENT' | 'VERY GOOD'
export type BadgeTone = 'gold' | 'blue'
export type DotTone = 'blue' | 'gold' | 'green'

export type Program = {
  rank: number
  name: string
  goTo: string
  href: string
  rating: string
  label: RatingLabel
  logo: string
  badge?: { text: string; tone: BadgeTone }
  bullets: string[]
  featured?: boolean
  accordion?: { title: string; body: string }
}

export const programs: Program[] = [
  {
    rank: 1,
    name: 'Noom',
    goTo: 'Go to Noom',
    href: 'https://www.noom.com',
    rating: '9.9',
    label: 'OUTSTANDING',
    logo: assets.logoNoom,
    badge: { text: 'BEST PRICES', tone: 'gold' },
    featured: true,
    bullets: [
      "Limited Time Offer: Noom's GLP-1 Program For $79/mo",
      'Stronger doses available at $149/mo (was $199)',
      'Accepts insurance but not required - HSA/FSA eligible',
      '100% online prescriptions with fast & free shipping',
      'Delivered to your door in 7 days or less',
    ],
    accordion: {
      title: 'Why Noom is most popular?',
      body: 'Noom combines doctor-prescribed GLP-1 medication with habit coaching that is included — not an upsell. Plans start at $79/mo, bill insurance when you qualify, and ship free in 7 days or less. That mix of clinical care, accountability, and price is why it leads this ranking.',
    },
  },
  {
    rank: 2,
    name: 'Remedy Meds',
    goTo: 'Go to Remedy Meds',
    href: 'https://www.remedymeds.com',
    rating: '9.7',
    label: 'EXCELLENT',
    logo: assets.logoRemedy,
    badge: { text: 'Best Refund Guarantee', tone: 'blue' },
    bullets: [
      'Get $120 Off Your First Month',
      'Trusted by over 200,000 members',
      'Lose 15% of your body weight or get a FULL REFUND',
      'No Insurance Needed. No Hidden Fees. Ships immediately!',
    ],
  },
  {
    rank: 3,
    name: 'Hers',
    goTo: 'Go to Hers',
    href: 'https://www.forhers.com',
    rating: '9.5',
    label: 'VERY GOOD',
    logo: assets.logoHers,
    bullets: [
      'Ozempic®, Wegovy®, Mounjaro®, Zepbound®, compounded GLP-1 & oral kits',
      '$0 membership. Pay upfront for 1–12 months',
      '24/7 licensed provider access via app',
    ],
  },
  {
    rank: 4,
    name: 'Hims',
    goTo: 'Go to Hims',
    href: 'https://www.hims.com',
    rating: '9.4',
    label: 'VERY GOOD',
    logo: assets.logoHims,
    bullets: [
      '100% online, personalized weight loss plans',
      'Licensed providers to check eligibility',
      'No insurance required. Free expedited shipping',
    ],
  },
  {
    rank: 5,
    name: 'Sprout',
    goTo: 'Go to Sprout',
    href: 'https://www.sprout.health',
    rating: '9.2',
    label: 'VERY GOOD',
    logo: assets.logoSprout,
    bullets: [
      'Affordable GLP-1 Medications Starting at Under $7/Day',
      'Quick 2-minute quiz, Doctor-prescribed within 48 hours',
      'Same Price for All Dosages. Free Fast Shipping. No membership or hidden fees EVER!',
    ],
  },
  {
    rank: 6,
    name: 'Ivim',
    goTo: 'Go to Ivim',
    href: 'https://www.ivimhealth.com',
    rating: '9.1',
    label: 'VERY GOOD',
    logo: assets.logoIvim,
    bullets: [
      'Save over 50% on Zepbound, Mounjaro, Ozempic, and Wegovy',
      'Doctor-designed, 100% online Rx with fast, free shipping',
      'Access for $0, qualify in 2 minutes, no insurance needed',
    ],
  },
  {
    rank: 7,
    name: 'Eden',
    goTo: 'Go to Eden',
    href: 'https://www.tryeden.com',
    rating: '9.0',
    label: 'VERY GOOD',
    logo: assets.logoEden,
    bullets: [
      'No memberships or hidden costs. Same price at every dose.',
      'Warranty included: Follow the plan and lose up to 10%, or get a refund.',
      'Fast, free shipping + real human support and guidance included.',
    ],
  },
]

export const stats = [
  { value: '20%', label: 'avg. body-weight reduction', icon: assets.iconBody },
  { value: '$79', label: 'microdose start / month', icon: assets.iconPills },
  { value: '7', label: 'days to your door', icon: assets.iconCalendar },
  { value: '9.9', label: 'Forbes Health rating', icon: assets.iconStar },
]

export const timeline = [
  {
    tag: 'WEEK 1',
    title: 'Online visit & prescription',
    body: 'A licensed provider reviews your health history and, if you qualify, prescribes your GLP-1, no in-person visit.',
    status: 'Prescribed',
    tone: 'blue' as DotTone,
  },
  {
    tag: 'WEEK 2',
    title: 'Medication arrives',
    body: 'Your first month ships free, discreetly, to your door within 7 days.',
    status: 'Delivered',
    tone: 'blue' as DotTone,
  },
  {
    tag: 'MONTH 1',
    title: 'The noise quiets',
    body: 'Appetite and cravings ease as your dose ramps. Coaching helps you build the habits around it.',
    status: 'Cravings ease',
    tone: 'gold' as DotTone,
  },
  {
    tag: 'MONTH 3',
    title: 'Momentum builds',
    body: 'Steady, sustainable loss. Your plan adjusts to how your body is responding.',
    status: 'Loss compounds',
    tone: 'gold' as DotTone,
  },
  {
    tag: 'MONTH 6',
    title: 'A new baseline',
    body: 'Many members reach meaningful, lasting change - with support the whole way.',
    status: 'New baseline',
    tone: 'green' as DotTone,
  },
]

export const reasons = [
  {
    title: 'Controls appetite at the source',
    body: 'GLP-1s send strong fullness signals to your brain, so smaller portions satisfy.',
  },
  {
    title: 'Coaching that keeps you accountable',
    body: 'Unlimited provider access and habit coaching included - not an upsell.',
  },
  {
    title: 'Works with insurance & HSA/FSA',
    body: 'One of the few programs that bills insurance; microdose plans start at $79/mo.',
  },
  {
    title: 'Free shipping in 7 days or less',
    body: '100% online, prescribed and delivered without the pharmacy runaround.',
  },
]
