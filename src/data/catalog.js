export const products = [
  { id: 1, name: 'Roasted Peanut Snack', cat: 'Food & pantry', price: 39, unit: '100 g', emoji: '🥜', tag: 'Sample item' },
  { id: 2, name: 'Botanical Wellness Blend', cat: 'Wellness', price: 129, unit: 'Illustrative pack', emoji: '🌿', tag: 'New arrival' },
  { id: 3, name: 'Woven Everyday Tote', cat: 'Lifestyle', price: 249, unit: 'One piece', emoji: '👜', tag: 'Thoughtful find' },
  { id: 4, name: 'Reusable Storage Set', cat: 'Home & living', price: 99, unit: 'Set of 3', emoji: '🏡', tag: 'Everyday essential' },
  { id: 5, name: 'Indian Spice Selection', cat: 'Food & pantry', price: 79, unit: 'Gift set', emoji: '🌶️', tag: 'Customer favourite' },
  { id: 6, name: 'Daily Care Essentials', cat: 'Wellness', price: 149, unit: 'Illustrative pack', emoji: '🧴', tag: 'Explore' },
  { id: 7, name: 'Handwoven Market Bag', cat: 'Lifestyle', price: 189, unit: 'One piece', emoji: '🧺', tag: 'Small-batch style' },
  { id: 8, name: 'Kitchen Utility Bundle', cat: 'Home & living', price: 159, unit: 'Bundle', emoji: '🍽️', tag: 'Bundle idea' },
]

export const filters = ['All', 'Food & pantry', 'Wellness', 'Home & living', 'Lifestyle']

export const categories = [
  { filter: 'Food & pantry', icon: '🥜', title: 'Food & pantry', text: 'Flavours for every day' },
  { filter: 'Wellness', icon: '✿', title: 'Wellness', text: 'Feel-good essentials' },
  { filter: 'Home & living', icon: '⌂', title: 'Home & living', text: 'Useful everyday finds' },
  { filter: 'Lifestyle', icon: '✧', title: 'Lifestyle', text: 'Little things that matter' },
]

export const trustItems = [
  { icon: '◇', title: 'Curated selection', text: 'Products for everyday life' },
  { icon: '↗', title: 'Built to grow', text: 'Consumer and trade shopping' },
  { icon: '♡', title: 'Customer first', text: 'Helpful service and support' },
  { icon: '◎', title: 'European ambition', text: 'Designed for cross-border growth' },
]

export const tradeCards = [
  { icon: '🚢', title: 'Import sourcing', text: 'Discover supplier and product sourcing opportunities.' },
  { icon: '🌍', title: 'Export opportunities', text: 'Explore routes to new markets and international buyers.' },
  { icon: '🤝', title: 'Trade partnerships', text: 'Build relationships with distributors and retailers.' },
  { icon: '📋', title: 'Request a trade quote', text: 'Share product, quantity and destination details.' },
]

export const aboutCards = [
  {
    icon: 'megaphone',
    title: 'Experienced',
    text: 'Building a growing collection of everyday essentials for customers and businesses.',
  },
  {
    icon: 'draft',
    title: 'Commitment To Customer',
    text: 'Building trusting relations with customers across Europe.',
  },
  {
    icon: 'quality',
    title: 'Quality Seeker',
    text: 'Prioritise quality of products for a better customer experience.',
  },
  {
    icon: 'licensed',
    title: 'Trusted Partners',
    text: 'Working with selected suppliers and authenticated partners from different parts of the world.',
  },
]

export const aboutStory = {
  title: 'About Mazzev',
  paragraphs: [
    'Mazzev is an international trading and commerce brand rooted in India, with a growing outlook across Sweden and Europe. We focus on everyday essentials spanning food, wellness, home and lifestyle — thoughtfully selected for customers and businesses.',
    'Our vision is simple: make it easier to discover useful products with clear information, dependable service and responsible growth. From pantry staples to wellness finds, we aim to bring considered choices into daily life.',
    'Whether you are shopping for your home or exploring wholesale and trade partnerships, Mazzev is built to connect suppliers, products and markets with care.',
  ],
  image:
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
  imageAlt: 'Wooden bowls filled with grains, beans and seeds',
}

export const supportTopics = [
  { icon: '📦', title: 'Orders & delivery', text: 'Order status and delivery questions' },
  { icon: '↩', title: 'Returns & refunds', text: 'Understand the next steps' },
  { icon: '☷', title: 'Product questions', text: 'Help choosing the right item' },
  { icon: '✉', title: 'Contact MAZZEV', text: 'Get in touch with our team' },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'import-export', label: 'Import & Export' },
  { id: 'products', label: 'Products & Shop' },
  { id: 'offers', label: 'Offers' },
  { id: 'wholesale', label: 'Wholesale / Business' },
  { id: 'about', label: 'About Us' },
  { id: 'support', label: 'Contact & Service' },
]

export const infoPages = {
  contact: 'Contact MAZZEV',
  delivery: 'Delivery & returns',
  privacy: 'Privacy & cookies',
  terms: 'Terms & conditions',
}

export function formatPrice(amount) {
  return `SEK ${amount.toLocaleString('sv-SE')}`
}
