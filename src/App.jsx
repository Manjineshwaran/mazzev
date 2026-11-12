import { useEffect, useRef, useState } from 'react'
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  WhatsAppIcon,
} from './components/Icons'

const PHONE = '0764393211'
const PHONE_INTL = '+46764393211'
const EMAIL = 'info@mazzev.com'
const WEB3FORMS_ACCESS_KEY = '7d810e2d-be5e-4358-a3bf-11b33cbbde80'
const INSTAGRAM_URL = 'https://instagram.com/mazzev.official'
const INSTAGRAM_ID = 'mazzev.official'
const FACEBOOK_URL = 'https://facebook.com/mazzevofficial'
const FACEBOOK_ID = 'facebook.com/mazzevofficial'
const WHATSAPP_URL = 'https://wa.me/46764393211'

const CATEGORIES = [
  { id: 'all', label: 'All products' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'rice', label: 'Rice' },
  { id: 'oil', label: 'Oil' },
  { id: 'vegetables', label: 'Vegetables' },
  { id: 'textile', label: 'Textile' },
  { id: 'home-decor', label: 'Home decor' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'toys', label: 'Toys' },
  { id: 'cosmetics', label: 'Cosmetics' },
]

const PRODUCTS = [
  { cat: 'oil', name: 'Sesame oil', desc: 'For cooking, massage and daily wellness.', code: 'MZ-001', pack: '500 ml', tags: ['Oil', 'Indian food', 'Cooking'] },
  { cat: 'oil', name: 'Groundnut oil', desc: 'An everyday cooking oil for frying and sautéing.', code: 'MZ-002', pack: '500 ml', tags: ['Oil', 'Indian food', 'Cooking'] },
  { cat: 'oil', name: 'Coconut oil', desc: 'For cooking, hair and skin care.', code: 'MZ-003', pack: '500 ml', tags: ['Oil', 'Indian food', 'Hair & skin'] },
  { cat: 'rice', name: 'Rice', desc: 'A staple Indian rice for everyday meals.', code: 'MZ-004', pack: '25 kg bag', tags: ['Rice', 'Indian food', 'Staple'] },
  { cat: 'snacks', name: 'Small peanut bar', desc: 'Minimum order 10 kg.', code: 'MZ-005', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Regular peanut bar', desc: 'Minimum order 10 kg.', code: 'MZ-006', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Regular crushed peanut bar', desc: 'Minimum order 10 kg.', code: 'MZ-007', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Large peanut bar', desc: 'Minimum order 10 kg.', code: 'MZ-008', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Large crushed peanut bar', desc: 'Minimum order 10 kg.', code: 'MZ-009', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Peanut family pack', desc: 'Minimum order 10 kg.', code: 'MZ-010', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Regular peanut bar (20 pcs)', desc: 'Minimum order 10 kg.', code: 'MZ-011', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Small peanut bar pack (20 pcs)', desc: 'Minimum order 10 kg.', code: 'MZ-012', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Peanut balls pack', desc: 'Minimum order 10 kg.', code: 'MZ-013', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'White sesame balls pack', desc: 'Minimum order 10 kg.', code: 'MZ-014', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Black sesame balls pack', desc: 'Minimum order 10 kg.', code: 'MZ-015', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Puffed rice balls pack', desc: 'Minimum order 10 kg.', code: 'MZ-016', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Puffed rice'] },
  { cat: 'snacks', name: 'Roasted gram ball pack', desc: 'Minimum order 10 kg.', code: 'MZ-017', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Roasted gram'] },
  { cat: 'snacks', name: 'Peanut round', desc: 'Minimum order 10 kg.', code: 'MZ-018', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'White sesame round', desc: 'Minimum order 10 kg.', code: 'MZ-019', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Black sesame round', desc: 'Minimum order 10 kg.', code: 'MZ-020', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Peanut sliced candy pack', desc: 'Minimum order 10 kg.', code: 'MZ-021', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Crushed peanut sliced candy pack', desc: 'Minimum order 10 kg.', code: 'MZ-022', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Peanut sliced candy box', desc: 'Minimum order 10 kg.', code: 'MZ-023', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'White sesame sliced candy box', desc: 'Minimum order 10 kg.', code: 'MZ-024', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Black sesame sliced candy box', desc: 'Minimum order 10 kg.', code: 'MZ-025', pack: '10 kg', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Peanut balls PET jar', desc: 'Minimum order 10 kg.', code: 'MZ-026', pack: 'PET jar', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'White sesame balls PET jar', desc: 'Minimum order 10 kg.', code: 'MZ-027', pack: 'PET jar', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Black sesame balls PET jar', desc: 'Minimum order 10 kg.', code: 'MZ-028', pack: 'PET jar', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'snacks', name: 'Roasted gram balls PET jar', desc: 'Minimum order 10 kg.', code: 'MZ-029', pack: 'PET jar', tags: ['Snacks', 'Indian food', 'Roasted gram'] },
  { cat: 'snacks', name: 'Peanut sliced candy PET jar', desc: 'Minimum order 10 kg.', code: 'MZ-030', pack: 'PET jar', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Peanut candy jar', desc: 'Minimum order 10 kg.', code: 'MZ-031', pack: 'Glass jar', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Crushed peanut candy PET jar', desc: 'Minimum order 10 kg.', code: 'MZ-032', pack: 'PET jar', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Small peanut bar jar', desc: 'Minimum order 10 kg.', code: 'MZ-033', pack: 'Glass jar', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Small crushed peanut bar jar', desc: 'Minimum order 10 kg.', code: 'MZ-034', pack: 'Glass jar', tags: ['Snacks', 'Indian food', 'Peanut'] },
  { cat: 'snacks', name: 'Small black sesame bar jar', desc: 'Minimum order 10 kg.', code: 'MZ-035', pack: 'Glass jar', tags: ['Snacks', 'Indian food', 'Sesame'] },
  { cat: 'textile', name: 'Cotton mesh bags', desc: 'Reusable cotton mesh bags for shopping and storage.', code: 'MZ-036', pack: '1 pc', tags: ['Textile', 'Cotton', 'Reusable'] },
  { cat: 'toys', name: 'Wooden teether rattle', desc: 'A wooden teether and rattle toy that makes a gentle sound.', code: 'MZ-037', pack: '1 pc', tags: ['Kids', 'Wooden', 'Toy'] },
]

const WHY = [
  ['Rooted in India', 'Products come from makers we know and trust.'],
  ['Chosen with care', 'A small range, picked for quality and honest sourcing.'],
  ['Clear information', 'You see what a product is and where it comes from.'],
  ['Made for Europe', 'Imported and delivered to customers across Europe.'],
]

const STEPS = [
  ['Chosen in India', 'We work with a trusted sourcing partner and select each product by hand.'],
  ['Shipped to Europe', 'Goods are imported and checked before they reach you.'],
  ['Delivered to you', 'You get quality products at a fair price, with clear information.'],
]

const FAQ = [
  [
    'How do I order?',
    `Send an email to ${EMAIL} or call ${PHONE_INTL} with the products you want. You can also reach us via Instagram (@${INSTAGRAM_ID}) or WhatsApp. The minimum order for snacks is 10 kg. We reply with details and delivery information.`,
  ],
  ['Where do the products come from?', 'They come from makers in India, sourced through a trusted partner.'],
  [
    'What products do you sell?',
    'Cold-pressed oils, rice, snacks, cotton textiles and wooden toys for kids. We add more as the range grows.',
  ],
]

const getCatLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? ''

const FEATURED_PRODUCTS = [
  'Sesame oil',
  'Groundnut oil',
  'Peanut family pack',
  'Peanut balls PET jar',
]

function ClockIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function TruckIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function ShieldCheckIcon({ className = '', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const CATEGORY_IMAGES = {
  snacks: '/products/category-snacks.jpg',
  rice: '/products/category-rice.jpg',
  oil: '/products/category-oil.jpg',
  vegetables: '/products/category-vegetables.jpg',
  textile: '/products/category-textile.jpg',
  'home-decor': '/products/category-home-decor.jpg',
  lifestyle: '/products/category-lifestyle.jpg',
  toys: '/products/category-toys.jpg',
  cosmetics: '/products/category-cosmetics.jpg',
}

function CategoryVisual({ catId }) {
  if (CATEGORY_IMAGES[catId]) {
    return (
      <img
        className="cat-photo"
        src={CATEGORY_IMAGES[catId]}
        alt=""
        loading="lazy"
        width="640"
        height="480"
      />
    )
  }

  switch (catId) {
    case 'rice':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <path d="M40 105 L35 45 C35 38 48 35 80 35 C112 35 125 38 125 45 L120 105 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
          <path d="M48 45 Q80 50 112 45" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="52" y="60" width="56" height="30" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
          <text x="80" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350F" fontFamily="serif">RICE</text>
          <path d="M125 95 Q140 60 145 25" fill="none" stroke="#D97706" strokeWidth="2" />
          <ellipse cx="140" cy="35" rx="4" ry="7" transform="rotate(30 140 35)" fill="#FBBF24" />
          <ellipse cx="135" cy="50" rx="4" ry="7" transform="rotate(20 135 50)" fill="#FBBF24" />
          <ellipse cx="132" cy="65" rx="4" ry="7" transform="rotate(10 132 65)" fill="#FBBF24" />
        </svg>
      )
    case 'oil':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <rect x="35" y="45" width="34" height="60" rx="6" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
          <rect x="44" y="30" width="16" height="15" fill="#EAB308" />
          <rect x="42" y="25" width="20" height="6" rx="2" fill="#A16207" />
          <path d="M52 65 Q60 75 52 85 Q44 75 52 65" fill="#EAB308" />
          <rect x="80" y="38" width="42" height="67" rx="8" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
          <rect x="93" y="20" width="16" height="18" fill="#D97706" />
          <rect x="90" y="15" width="22" height="6" rx="2" fill="#92400E" />
          <path d="M101 55 C101 55 114 72 114 80 C114 88 108 94 101 94 C94 94 88 88 88 80 C88 72 101 55 101 55 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
        </svg>
      )
    case 'vegetables':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <circle cx="50" cy="75" r="22" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
          <path d="M50 53 Q45 45 42 42 M50 53 Q55 45 58 42 M50 53 L50 44" stroke="#15803D" strokeWidth="2.5" fill="none" />
          <path d="M125 35 L75 95 C72 98 68 96 68 92 L80 45 C81 40 86 38 90 40 Z" fill="#F97316" stroke="#C2410C" strokeWidth="2" />
          <path d="M125 35 L135 22 M125 35 L140 30 M125 35 L132 40" stroke="#16A34A" strokeWidth="2.5" />
          <path d="M110 95 C125 90 135 70 125 55 C120 48 110 50 102 60 C92 72 95 90 110 95 Z" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" />
          <path d="M125 55 L132 45 M122 52 L128 48" stroke="#15803D" strokeWidth="2.5" />
        </svg>
      )
    case 'textile':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <path d="M50 50 L40 105 Q80 115 120 105 L110 50 Z" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />
          <path d="M50 60 L110 60 M47 75 L113 75 M44 90 L116 90" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M65 50 L60 108 M80 50 L80 112 M95 50 L100 108" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M60 50 C60 25 100 25 100 50" fill="none" stroke="#B45309" strokeWidth="3" />
        </svg>
      )
    case 'home-decor':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <path d="M35 85 Q80 115 125 85 Q115 65 80 65 Q45 65 35 85 Z" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <ellipse cx="80" cy="72" rx="35" ry="8" fill="#B45309" />
          <path d="M80 65 C80 65 95 48 95 38 C95 28 88 22 80 15 C72 22 65 28 65 38 C65 48 80 65 80 65 Z" fill="#FDE047" stroke="#EA580C" strokeWidth="1.5" />
          <path d="M80 60 C80 60 88 50 88 42 C88 35 84 30 80 25 C76 30 72 35 72 42 C72 50 80 60 80 60 Z" fill="#F97316" />
        </svg>
      )
    case 'lifestyle':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <path d="M45 55 Q80 110 115 55 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
          <ellipse cx="80" cy="55" rx="35" ry="10" fill="#92400E" />
          <rect x="75" y="25" width="10" height="45" rx="4" transform="rotate(-25 80 45)" fill="#D97706" stroke="#78350F" strokeWidth="1.5" />
          <path d="M40 45 Q55 20 75 35 Q55 50 40 45 Z" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
          <path d="M120 45 Q105 20 85 35 Q105 50 120 45 Z" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
        </svg>
      )
    case 'toys':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <circle cx="80" cy="45" r="28" fill="#FBBF24" stroke="#B45309" strokeWidth="2.5" />
          <circle cx="80" cy="45" r="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <rect x="74" y="73" width="12" height="38" rx="5" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <circle cx="80" cy="112" r="6" fill="#F59E0B" />
        </svg>
      )
    case 'cosmetics':
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <rect x="45" y="45" width="30" height="55" rx="5" fill="#A7F3D0" stroke="#059669" strokeWidth="2" />
          <rect x="53" y="32" width="14" height="13" fill="#6EE7B7" />
          <rect x="50" y="25" width="20" height="7" rx="2" fill="#047857" />
          <rect x="85" y="65" width="40" height="35" rx="6" fill="#FDE047" stroke="#D97706" strokeWidth="2" />
          <rect x="82" y="55" width="46" height="10" rx="3" fill="#B45309" />
          <circle cx="105" cy="40" r="4" fill="#F59E0B" />
          <circle cx="105" cy="30" r="5" fill="#F472B6" />
          <circle cx="114" cy="36" r="5" fill="#F472B6" />
          <circle cx="112" cy="46" r="5" fill="#F472B6" />
          <circle cx="98" cy="46" r="5" fill="#F472B6" />
          <circle cx="96" cy="36" r="5" fill="#F472B6" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 160 120" className="cat-svg" aria-hidden="true">
          <circle cx="80" cy="60" r="30" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
        </svg>
      )
  }
}

const PRODUCT_IMAGES = {
  'Sesame oil': '/products/sesame-oil-cutout.png',
  'Groundnut oil': '/products/groundnut-oil-cutout.png',
  'Coconut oil': '/products/coconut-oil-cutout.png',
  Rice: '/products/rice-cutout.png',
  'Small peanut bar': '/products/peanut-bar-small-cutout.png',
  'Regular peanut bar': '/products/peanut-bar-regular-cutout.png',
  'Regular crushed peanut bar': '/products/peanut-bar-regular-crushed-cutout.png',
  'Large peanut bar': '/products/peanut-bar-large-cutout.png',
  'Large crushed peanut bar': '/products/peanut-bar-large-crushed-cutout.png',
  'Peanut family pack': '/products/peanut-family-pack-cutout.png',
  'Regular peanut bar (20 pcs)': '/products/peanut-bar-20pcs-cutout.png',
  'Small peanut bar pack (20 pcs)': '/products/peanut-bar-20pcs-cutout.png',
  'Peanut balls pack': '/products/peanut-balls-pack-cutout.png',
  'White sesame balls pack': '/products/white-sesame-balls-pack-cutout.png',
  'Black sesame balls pack': '/products/black-sesame-balls-pack-cutout.png',
  'Puffed rice balls pack': '/products/puffed-rice-balls-pack-cutout.png',
  'Roasted gram ball pack': '/products/roasted-gram-balls-pack-cutout.png',
  'Peanut round': '/products/peanut-round-cutout.png',
  'White sesame round': '/products/white-sesame-round-cutout.png',
  'Black sesame round': '/products/black-sesame-round-cutout.png',
  'Peanut sliced candy pack': '/products/peanut-sliced-candy-pack-cutout.png',
  'Crushed peanut sliced candy pack': '/products/crushed-peanut-sliced-candy-pack-cutout.png',
  'Peanut sliced candy box': '/products/peanut-sliced-candy-box-cutout.png',
  'White sesame sliced candy box': '/products/white-sesame-sliced-candy-box-cutout.png',
  'Black sesame sliced candy box': '/products/black-sesame-sliced-candy-box-cutout.png',
  'Peanut balls PET jar': '/products/peanut-balls-jar-cutout.png',
  'White sesame balls PET jar': '/products/white-sesame-balls-jar-cutout.png',
  'Black sesame balls PET jar': '/products/black-sesame-balls-jar-cutout.png',
  'Roasted gram balls PET jar': '/products/roasted-gram-balls-jar-cutout.png',
  'Peanut sliced candy PET jar': '/products/peanut-sliced-candy-jar-cutout.png',
  'Peanut candy jar': '/products/peanut-candy-jar-cutout.png',
  'Crushed peanut candy PET jar': '/products/crushed-peanut-candy-jar-cutout.png',
  'Small peanut bar jar': '/products/small-peanut-bar-jar-cutout.png',
  'Small crushed peanut bar jar': '/products/small-crushed-peanut-bar-jar-cutout.png',
  'Small black sesame bar jar': '/products/small-black-sesame-bar-jar-cutout.png',
  'Cotton mesh bags': '/products/cotton-mesh-bags-cutout.png',
  'Wooden teether rattle': '/products/wooden-teether-cutout.png',
}

function getProductImage(name = '') {
  return PRODUCT_IMAGES[name] || null
}

function PinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Product({ cat, name, desc, onOpen }) {
  const image = getProductImage(name)

  return (
    <div
      className="item item-clickable"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen?.()
        }
      }}
      aria-label={`View details for ${name}`}
    >
      <div className={`pic${image ? ' has-image' : ''}`}>
        {image ? (
          <img src={image} alt={name} loading="lazy" width="640" height="480" />
        ) : (
          name
        )}
      </div>
      <div className="t">
        <span className="cat">{getCatLabel(cat)}</span>
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className="item-foot">
          <span className="item-min">Minimum order: 10 kg</span>
          <span className="item-view">View details →</span>
        </div>
      </div>
    </div>
  )
}

const TRUST_ITEMS = [
  { icon: TruckIcon, text: 'Shipping across Europe' },
  { icon: ShieldCheckIcon, text: '100% original products' },
  { icon: MailIcon, text: 'Ask us anything' },
  { icon: PinIcon, text: 'Direct from Indian makers' },
]

function ProductModal({ product, onClose, onPrev, onNext }) {
  const isSnack = product.cat === 'snacks'
  const minQty = isSnack ? 10 : 1
  const unit = isSnack ? 'kg' : 'pc'
  const [qty, setQty] = useState(minQty)
  const [closing, setClosing] = useState(false)
  const dialogRef = useRef(null)
  const image = getProductImage(product.name)

  useEffect(() => {
    setQty(minQty)
    setClosing(false)
  }, [product.name, minQty])

  useEffect(() => {
    const prevFocus = document.activeElement
    dialogRef.current?.focus()
    return () => prevFocus?.focus?.()
  }, [])

  function requestClose() {
    if (closing) return
    setClosing(true)
    setTimeout(onClose, 180)
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') requestClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  function onDialogKeyDown(e) {
    if (e.key !== 'Tab' || !dialogRef.current) return
    const focusables = dialogRef.current.querySelectorAll(
      'button, a[href], [tabindex]:not([tabindex="-1"])',
    )
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const mailSubject = encodeURIComponent(`Enquiry: ${product.name}`)
  const mailBody = encodeURIComponent(
    `Product: ${product.name}\nProduct code: ${product.code}\nQuantity: ${qty} ${unit}\nCategory: ${getCatLabel(product.cat)}`,
  )
  const mailto = `mailto:${EMAIL}?subject=${mailSubject}&body=${mailBody}`

  return (
    <div
      className={`pdp-overlay${closing ? ' closing' : ''}`}
      onClick={requestClose}
      role="presentation"
    >
      <div
        className="pdp-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdp-title"
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onDialogKeyDown}
      >
        <button
          type="button"
          className="pdp-close"
          onClick={requestClose}
          aria-label="Close product details"
        >
          <CloseIcon size={18} />
        </button>

        <div className="pdp-body">
          <div className="pdp-media">
            {image ? (
              <img src={image} alt={product.name} />
            ) : (
              <div className="pdp-media-fallback">{product.name}</div>
            )}
          </div>

          <div className="pdp-info">
            <h2 id="pdp-title" className="pdp-title">
              {product.name}
            </h2>
            <span className="pdp-cat">{getCatLabel(product.cat)}</span>
            <p className="pdp-code">Product code: {product.code}</p>
            <span className="pdp-stock">In stock</span>
            {product.pack && <p className="pdp-pack">Pack size: {product.pack}</p>}
            {isSnack && <p className="pdp-min">Minimum order: 10 kg</p>}

            <div className="pdp-qty">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(minQty, q - 1))}
                disabled={qty <= minQty}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="pdp-qty-value">
                {qty} {unit}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <div className="pdp-actions">
              <a className="btn pdp-send" href={mailto}>
                Send enquiry
              </a>
              <a className="btn secondary pdp-call" href={`tel:${PHONE_INTL}`}>
                Call us
              </a>
            </div>

            <div className="pdp-tabs" role="tablist">
              <span className="pdp-tab active" role="tab" aria-selected="true">
                Description
              </span>
            </div>
            <p className="pdp-desc">{product.desc}</p>

            <div className="pdp-tags">
              {(product.tags || []).map((t) => (
                <span key={t} className="pdp-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="pdp-trust">
              {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                <div className="pdp-trust-item" key={text}>
                  <span className="pdp-trust-icon">
                    <Icon size={15} />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pdp-nav">
              <button
                type="button"
                className="pdp-nav-btn"
                onClick={onPrev}
                disabled={!onPrev}
              >
                ← Previous product
              </button>
              <button
                type="button"
                className="pdp-nav-btn"
                onClick={onNext}
                disabled={!onNext}
              >
                Next product →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [shopMenuOpen, setShopMenuOpen] = useState(false)
  const [enquiryModal, setEnquiryModal] = useState(null)
  const [productModal, setProductModal] = useState(null)
  const [enquiryStatus, setEnquiryStatus] = useState('idle')
  const [enquiryError, setEnquiryError] = useState('')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = productModal ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [productModal])

  const searchQuery = search.trim().toLowerCase().replace(/\s+/g, ' ')
  const isCategorySearch =
    searchQuery.length > 0 &&
    CATEGORIES.some(
      (c) => c.id !== 'all' && c.label.toLowerCase().includes(searchQuery),
    )

  const visibleCategories = CATEGORIES.filter((c) => c.id !== 'all').filter(
    (cat) => {
      if (!searchQuery) return true
      if (isCategorySearch) {
        return cat.label.toLowerCase().includes(searchQuery)
      }
      return PRODUCTS.some(
        (p) =>
          p.cat === cat.id && p.name.toLowerCase().includes(searchQuery),
      )
    },
  )

  function productsForCategory(catId) {
    const all = PRODUCTS.filter((p) => p.cat === catId)
    if (!searchQuery || isCategorySearch) return all
    return all.filter((p) => p.name.toLowerCase().includes(searchQuery))
  }

  const dropdownResults = searchQuery
    ? visibleCategories.flatMap((c) => productsForCategory(c.id)).slice(0, 8)
    : []

  function openEnquiry(item) {
    setEnquiryStatus('idle')
    setEnquiryError('')
    setEnquiryModal(item)
  }

  function closeEnquiry() {
    setEnquiryModal(null)
    setEnquiryStatus('idle')
    setEnquiryError('')
  }

  async function handleSendEnquiry(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const contact = String(data.get('contact') || '').trim()
    const quantity = String(data.get('quantity') || '').trim()
    const message = String(data.get('message') || '').trim()
    const product =
      String(data.get('product') || '').trim() || enquiryModal?.name || 'Product'
    const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)

    setEnquiryStatus('sending')
    setEnquiryError('')

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Mazzev enquiry — ${product}`,
      from_name: 'Mazzev website',
      name,
      product,
      quantity: quantity || 'Not specified',
      contact,
      message,
      botcheck: false,
    }

    if (emailLike) {
      payload.email = contact
      payload.replyto = contact
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      const apiMessage = result.message || result.body?.message
      if (!response.ok || result.success !== true) {
        throw new Error(apiMessage || 'The enquiry could not be sent.')
      }
      setEnquiryStatus('sent')
    } catch (error) {
      setEnquiryStatus('error')
      setEnquiryError(
        error.message || `The enquiry could not be sent. Please email ${EMAIL}.`,
      )
    }
  }

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR - CONTINUOUS LOOP RUNNER */}
      <div className="bar" aria-label="Announcements & Quick Contacts">
        <div className="bar-marquee-track">
          {[1, 2].map((loopIdx) => (
            <div
              key={loopIdx}
              className="bar-marquee-content"
              aria-hidden={loopIdx === 2 ? 'true' : undefined}
            >
              <span className="bar-marquee-item">
                <b>Wellness rooted in India</b>
              </span>
              <span className="bar-dot-sep">✦</span>

              <a className="bar-marquee-item" href={`tel:${PHONE_INTL}`}>
                <PhoneIcon size={13} /> Orders &amp; Enquiries: <b>+46764393211</b>
              </a>
              <span className="bar-dot-sep">✦</span>

              <a className="bar-marquee-item" href={`mailto:${EMAIL}`}>
                <MailIcon size={13} /> <b>{EMAIL}</b>
              </a>
              <span className="bar-dot-sep">✦</span>

              <span className="bar-marquee-item">
                Direct Wholesale &amp; Retail Sourcing
              </span>
              <span className="bar-dot-sep">✦</span>

              <span className="bar-marquee-item">
                Delivering across Europe
              </span>
              <span className="bar-dot-sep">✦</span>

              <span className="bar-marquee-item">
                Pure Cold-Pressed Oils · Traditional Snacks · Chikki · Handloom Textiles
              </span>
              <span className="bar-dot-sep">✦</span>

              <a
                className="bar-marquee-item"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={13} /> WhatsApp Orders: <b>+46764393211</b>
              </a>
              <span className="bar-dot-sep">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. HEADER */}
      <header>
        <div className="wrap">
          <a className="brand" href="#top" id="top">
            <picture>
              <source
                media="(prefers-reduced-motion: reduce)"
                srcSet="/mazzev-peacock-still.png"
              />
              <img
                src="/mazzev-peacock.gif"
                alt="Mazzev"
                width="64"
                height="64"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            Mazzev
          </a>
          <nav aria-label="Main">
            <a href="#top">Home</a>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <a
                href="#shop"
                aria-haspopup="true"
                aria-expanded={shopMenuOpen}
                onClick={(e) => {
                  e.preventDefault()
                  setShopMenuOpen((o) => !o)
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Shop ▾
              </a>
              {shopMenuOpen && (
                <div className="dropdown-menu" role="menu">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setActive(c.id)
                        setShopMenuOpen(false)
                        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault()
                openEnquiry({
                  cat: 'general',
                  name: 'General enquiry',
                  desc: 'Tell us which products you are interested in.',
                  subject: 'General enquiry',
                })
              }}
            >
              Enquiry
            </a>
            <a href="#why">About us</a>
          </nav>

          <div className="header-tools">
            <div
              className="header-search"
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setSearchOpen(false)
                }
              }}
            >
              <SearchIcon size={15} className="shop-search-icon" />
              <input
                type="search"
                placeholder="Search products…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setSearchOpen(true)
                }}
                onFocus={() => setSearchOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSearchOpen(false)
                }}
                role="combobox"
                aria-expanded={searchOpen && search.trim().length > 0}
                aria-controls="search-dropdown"
                aria-label="Search products"
              />
              {searchOpen && search.trim() && (
                <div className="search-dropdown" id="search-dropdown" role="listbox">
                  {dropdownResults.length === 0 ? (
                    <div className="search-dropdown-empty">
                      No products found matching &quot;{search}&quot;
                    </div>
                  ) : (
                    dropdownResults.map((p) => {
                      const img = getProductImage(p.name)
                      return (
                      <button
                        key={p.name}
                        type="button"
                        role="option"
                        aria-selected="false"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setSearch('')
                          setSearchOpen(false)
                          setProductModal(p)
                        }}
                      >
                        {img && (
                          <img className="sd-img" src={img} alt="" loading="lazy" />
                        )}
                        <span className="sd-text">
                          <span className="sd-name">{p.name}</span>
                          <span className="sd-cat">{getCatLabel(p.cat)}</span>
                        </span>
                      </button>
                      )
                    })
                  )}
                </div>
              )}
            </div>
            <select
              className="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="sv">Svenska</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="it">Italiano</option>
              <option value="nl">Nederlands</option>
              <option value="pl">Polski</option>
              <option value="pt">Português</option>
              <option value="hi">हिन्दी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>
        </div>
      </header>

      {/* 3. HERO */}
      <div className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <h1>Everyday goods with Indian roots, made for life in Europe.</h1>
            <p>
              A modern general merchandise brand with Indian roots and a European outlook. Food,
              textiles and kids&apos; toys from trusted makers in India.
            </p>
          </div>
          <div className="hero-marquee-wrap">
            <span className="hero-products-label">Featured &amp; New Launches</span>
            <div className="hero-marquee">
              <div className="hero-marquee-track">
              {[0, 1].map((loopIdx) => (
                <div className="hero-marquee-content" key={loopIdx}>
                  {FEATURED_PRODUCTS.map((name) => {
                    const img = getProductImage(name)
                    if (!img) return null
                    return (
                      <img
                        className="hero-marquee-img"
                        key={`${loopIdx}-${name}`}
                        src={img}
                        alt={name}
                        title={name}
                        loading="eager"
                      />
                    )
                  })}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SHOP & CATEGORIES */}
      <section id="shop" className="shop-section">
        <div className="wrap">
          {/* WHY CHOOSE US TRUST STRIP (From example photo) */}
          <div className="trust-strip" aria-label="Why choose us">
            <div className="trust-strip-title">Why choose us?</div>
            <div className="trust-strip-items">
              <div className="trust-strip-item">
                <span className="trust-strip-icon-wrap clock-wrap">
                  <ClockIcon size={18} />
                </span>
                <div>
                  <strong>On time delivery</strong>
                  <small>Shipping Across Europe</small>
                </div>
              </div>

              <div className="trust-strip-item">
                <span className="trust-strip-icon-wrap truck-wrap">
                  <TruckIcon size={18} />
                </span>
                <div>
                  <strong>Direct wholesale sourcing</strong>
                  <small>Trusted Indian makers</small>
                </div>
              </div>

              <div className="trust-strip-item">
                <span className="trust-strip-icon-wrap shield-wrap">
                  <ShieldCheckIcon size={18} />
                </span>
                <div>
                  <strong>Quality assurance</strong>
                  <small>100% Original Products</small>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORIES HEADER */}
          <div className="categories-header text-center">
            <span className="section-badge">Browse By Range</span>
            <h2>Categories</h2>
            <p className="lead">
              Select a category box to explore our authentic Indian products and wholesale specialties.
            </p>
          </div>

          {/* CATEGORY BOXES GRID (Like in example photo) */}
          <div className="category-boxes-grid">
            {visibleCategories.map((cat) => {
              const catProducts = productsForCategory(cat.id)
              const catCount = catProducts.length
              const isOpen = active === cat.id
              const boxOpen = isOpen || searchQuery.length > 0
              return (
                <div
                  key={cat.id}
                  className={`cat-box ${boxOpen ? 'open' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(isOpen ? 'all' : cat.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(isOpen ? 'all' : cat.id)
                    }
                  }}
                  aria-expanded={boxOpen}
                  title={boxOpen ? `Close ${cat.label}` : `View ${cat.label}`}
                >
                  <div className="cat-box-header">
                    <span>{cat.label}</span>
                    <span className="cat-box-chevron" aria-hidden="true">
                      {boxOpen ? '▴' : '▾'}
                    </span>
                  </div>
                  <div className="cat-box-body">
                    <CategoryVisual catId={cat.id} />
                    <span className="cat-box-count">
                      {catCount > 0 ? `${catCount} ${catCount === 1 ? 'item' : 'items'}` : 'Wholesale available'}
                    </span>
                  </div>
                  {boxOpen && (
                    <div className="cat-box-products">
                      {catProducts.length === 0 ? (
                        <p className="cat-group-empty">
                          No products in this category yet.
                        </p>
                      ) : (
                        catProducts.map((p) => (
                          <Product
                            key={p.name}
                            {...p}
                            onOpen={() => setProductModal(p)}
                          />
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {searchQuery && visibleCategories.length === 0 && (
            <div className="search-empty">
              <p>No products found</p>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setSearch('')
                  setSearchOpen(false)
                }}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. WHY CHOOSE MAZZEV */}
      <section id="why" className="alt">
        <div className="wrap">
          <h2>Why choose Mazzev</h2>
          <p className="lead">Simple promises we can keep.</p>
          <div className="why">
            {WHY.map(([t, d]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <h2>How it works</h2>
          <p className="lead">Short, direct, and easy to follow.</p>
          <ol className="steps">
            {STEPS.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. QUESTIONS / FAQ */}
      <section id="faq" className="alt">
        <div className="wrap">
          <h2>Questions</h2>
          <p className="lead">If your question isn&apos;t here, contact us directly.</p>
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 8. SOCIAL MEDIA CONTENT */}
      <section id="social" className="social-section">
        <div className="wrap">
          <div className="section-head text-center">
            <span className="section-badge">Join Our Community</span>
            <h2>Follow Us on Social Media</h2>
            <p className="lead">
              Discover authentic Indian wellness stories, new batch arrivals, behind-the-scenes
              sourcing, and customer updates on our official social channels.
            </p>
          </div>

          <div className="social-cards-grid">
            {/* Instagram Card */}
            <div className="social-card social-card-insta">
              <div className="social-card-top">
                <div className="social-card-icon-wrap insta-bg">
                  <InstagramIcon size={26} />
                </div>
                <div className="social-card-meta">
                  <span className="social-platform">Instagram</span>
                  <span className="social-handle">{INSTAGRAM_ID}</span>
                </div>
              </div>
              <p className="social-card-desc">
                Follow our daily stories, new product batches, traditional recipes, and visual edits
                straight from Indian makers.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn insta-btn"
              >
                <InstagramIcon size={16} />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Facebook Card */}
            <div className="social-card social-card-fb">
              <div className="social-card-top">
                <div className="social-card-icon-wrap fb-bg">
                  <FacebookIcon size={26} />
                </div>
                <div className="social-card-meta">
                  <span className="social-platform">Facebook</span>
                  <span className="social-handle">{FACEBOOK_ID}</span>
                </div>
              </div>
              <p className="social-card-desc">
                Connect with our European trade community, read wholesale announcements, customer
                reviews, and brand updates.
              </p>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn fb-btn"
              >
                <FacebookIcon size={16} />
                <span>Visit Facebook Page</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="social-card social-card-wa">
              <div className="social-card-top">
                <div className="social-card-icon-wrap wa-bg">
                  <WhatsAppIcon size={26} />
                </div>
                <div className="social-card-meta">
                  <span className="social-platform">WhatsApp</span>
                  <span className="social-handle">+46764393211</span>
                </div>
              </div>
              <p className="social-card-desc">
                Message our team directly for instant quotes, wholesale orders, custom product
                requests, and quick questions.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn wa-btn"
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMPREHENSIVE FOOTER (Matching example photo layout) */}
      <footer id="contact" className="site-footer">
        <div className="wrap">
          <div className="footer-cols">
            <div className="footer-col">
              <h4>My Account</h4>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault()
                  openEnquiry({
                    cat: 'wholesale',
                    name: 'Wholesale enquiry',
                    desc: 'Wholesale and bulk order enquiry.',
                    subject: 'Wholesale enquiry',
                  })
                }}
              >
                Wholesale Enquiry
              </a>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault()
                  openEnquiry({
                    cat: 'status',
                    name: 'Order status enquiry',
                    desc: 'Inquire about order status and delivery details.',
                    subject: 'Order status enquiry',
                  })
                }}
              >
                Order Status
              </a>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault()
                  openEnquiry({
                    cat: 'sample',
                    name: 'Sample pack request',
                    desc: 'Request samples of our chikki, oils or rice.',
                    subject: 'Sample pack request',
                  })
                }}
              >
                Sample Requests
              </a>
              <a href={`mailto:${EMAIL}`}>Customer Support</a>
              <a href={`tel:${PHONE_INTL}`}>Direct Assistance</a>
            </div>

            <div className="footer-col">
              <h4>Information</h4>
              <a href="#why">Terms &amp; Conditions</a>
              <a href="#why">Privacy Policy</a>
              <a href="#how">Delivery &amp; Shipping</a>
              <a href="#faq">Sourcing Standards</a>
              <a href="#faq">Returns &amp; Quality Guarantee</a>
            </div>

            <div className="footer-col">
              <h4>About</h4>
              <a href="#why">About Mazzev</a>
              <a href="#how">How It Works</a>
              <a href="#why">Why Choose Us</a>
              <a href="#why">Rooted in India</a>
              <a href="#contact">Contact Us</a>
            </div>

            <div className="footer-col">
              <h4>Extras</h4>
              <a href="#shop">Snacks (Min 10 kg)</a>
              <a href="#shop">Wholesale Pricing</a>
              <a href="#shop">PET Jar Options</a>
              <a href="#why">Certificate of Quality</a>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault()
                  openEnquiry({
                    cat: 'custom',
                    name: 'Custom import sourcing',
                    desc: 'Request custom merchandise from India for European wholesale.',
                    subject: 'Custom import sourcing enquiry',
                  })
                }}
              >
                Custom Import Sourcing
              </a>
            </div>

            <div className="footer-col footer-col-contact">
              <h4>Contacts</h4>
              <p className="foot-contact-note">
                Direct wholesale sourcing and cross-border delivery across Europe.
              </p>
              <a className="foot-contact-link" href={`mailto:${EMAIL}`}>
                <MailIcon size={14} /> {EMAIL}
              </a>
              <a className="foot-contact-link" href={`tel:${PHONE_INTL}`}>
                <PhoneIcon size={14} /> {PHONE_INTL}
              </a>
              <a
                className="foot-contact-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={14} /> WhatsApp: +46764393211
              </a>
            </div>
          </div>

          {/* BOTTOM ROW: Payment Options, Social Media, and Logo */}
          <div className="footer-bottom-bar">
            <div className="footer-bottom-section">
              <span className="footer-bottom-title">Payment Option</span>
              <div className="payment-badges" aria-label="Accepted Payment & Trade Options">
                <span className="pay-badge mc">Mastercard</span>
                <span className="pay-badge visa">VISA</span>
                <span className="pay-badge amex">AMEX</span>
                <span className="pay-badge pp">PayPal</span>
                <span className="pay-badge sepa">SEPA Transfer</span>
                <span className="pay-badge inv">Invoice</span>
              </div>
            </div>

            <div className="footer-bottom-section">
              <span className="footer-bottom-title">Social Media</span>
              <div className="footer-social-icons">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-social-pill insta"
                  title={`Instagram: ${INSTAGRAM_ID}`}
                >
                  <InstagramIcon size={15} />
                  <span>{INSTAGRAM_ID}</span>
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-social-pill fb"
                  title="Facebook"
                >
                  <FacebookIcon size={15} />
                  <span>Facebook</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-social-pill wa"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={15} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="footer-brand-side">
              <a className="footer-brand" href="#top">
                <img src="/logo-mark.png" alt="Mazzev Logo" width="28" height="44" />
                <span>Mazzev</span>
              </a>
              <p className="footer-copy">© 2026 Mazzev. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* 8. PRODUCT DETAIL MODAL */}
      {productModal &&
        (() => {
          const list = PRODUCTS.filter((p) => p.cat === productModal.cat)
          const idx = list.findIndex((p) => p.name === productModal.name)
          return (
            <ProductModal
              product={productModal}
              onClose={() => setProductModal(null)}
              onPrev={
                idx > 0 ? () => setProductModal(list[idx - 1]) : null
              }
              onNext={
                idx >= 0 && idx < list.length - 1
                  ? () => setProductModal(list[idx + 1])
                  : null
              }
            />
          )
        })()}

      {/* 9. PRODUCT ENQUIRY MODAL */}
      {enquiryModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEnquiry()
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-enquiry-title"
        >
          <div className="modal-card">
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeEnquiry}
              aria-label="Close Enquiry Dialog"
            >
              <CloseIcon size={20} />
            </button>

            <span className="modal-cat">{getCatLabel(enquiryModal.cat)}</span>
            <h2 id="modal-enquiry-title">{enquiryModal.name}</h2>
            <p className="modal-desc">{enquiryModal.desc}</p>

            {enquiryStatus === 'sent' ? (
              <div className="modal-success">
                <strong>✓ Enquiry Received!</strong>
                <p>
                  Thank you. Your enquiry was sent to {EMAIL}. We will get back to you
                  shortly with pricing and delivery details.
                </p>
              </div>
            ) : (
              <>
                <form className="modal-form" onSubmit={handleSendEnquiry}>
                  <label htmlFor="enquiry-name">Your Name</label>
                  <input id="enquiry-name" name="name" required placeholder="Name or Company" />

                  <label htmlFor="enquiry-email">Email or Phone</label>
                  <input
                    id="enquiry-email"
                    name="contact"
                    required
                    placeholder="email@example.com or phone number"
                  />

                  <label htmlFor="enquiry-product">Product</label>
                  <select id="enquiry-product" name="product" required defaultValue="">
                    <option value="" disabled>
                      Select a product
                    </option>
                    {PRODUCTS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other / not listed">Other / not listed</option>
                  </select>

                  <label htmlFor="enquiry-quantity">Estimated Quantity</label>
                  <input
                    id="enquiry-quantity"
                    name="quantity"
                    placeholder="e.g. 10 kg, 20 kg, sample pack"
                  />

                  <label htmlFor="enquiry-msg">Message / Destination (optional)</label>
                  <textarea
                    id="enquiry-msg"
                    name="message"
                    rows="3"
                    defaultValue={`I am interested in ordering ${enquiryModal.name}. Please share pricing and shipping details.`}
                  />

                  {enquiryStatus === 'error' && <p className="modal-error">{enquiryError}</p>}

                  <button className="btn full-btn" type="submit" disabled={enquiryStatus === 'sending'}>
                    {enquiryStatus === 'sending' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
