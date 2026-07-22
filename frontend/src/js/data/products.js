// UrbanCraft — Product Data Catalog

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'living-room', name: 'Living Room' },
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'dining', name: 'Dining' },
  { id: 'office', name: 'Office' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'custom', name: 'Custom' },
];

export const products = [
  // ── Living Room ──
  {
    id: 'lr-01',
    name: 'Milano Luxury Sofa',
    category: 'living-room',
    categoryLabel: 'Living Room',
    material: 'Teak Wood, Premium Fabric',
    dimensions: '220 × 90 × 85 cm',
    price: 89500,
    description: 'The Milano Luxury Sofa embodies refined comfort. Handcrafted from solid teak with premium upholstery, its generous proportions and deep cushions invite you to relax after a long day. The clean Scandinavian lines pair effortlessly with modern and traditional interiors alike.',
    customizable: true,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
    ],
  },
  {
    id: 'lr-02',
    name: 'Artisan TV Console',
    category: 'living-room',
    categoryLabel: 'Living Room',
    material: 'Sheesham Wood, Brass Hardware',
    dimensions: '180 × 45 × 55 cm',
    price: 42000,
    description: 'A statement entertainment unit crafted from premium Sheesham wood with hand-finished brass hardware. Spacious cable management and adjustable shelving keep your living room organized while making a lasting impression.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    ],
  },
  {
    id: 'lr-03',
    name: 'Nordic Coffee Table',
    category: 'living-room',
    categoryLabel: 'Living Room',
    material: 'Walnut Wood, Tempered Glass',
    dimensions: '120 × 60 × 45 cm',
    price: 28500,
    description: 'Minimalist elegance meets functional design. The Nordic Coffee Table features a solid walnut base with a tempered glass top, creating an airy centerpiece that opens up your living space.',
    customizable: false,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80',
    ],
  },
  {
    id: 'lr-04',
    name: 'Heritage Bookshelf',
    category: 'living-room',
    categoryLabel: 'Living Room',
    material: 'Solid Oak, Iron Frame',
    dimensions: '100 × 35 × 200 cm',
    price: 35000,
    description: 'An industrial-meets-classic bookshelf that combines solid oak shelving with a matte iron frame. Five tiers of generous storage space for books, décor, and collectibles.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    ],
  },

  // ── Bedroom ──
  {
    id: 'bd-01',
    name: 'Vienna King Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    material: 'Teak Wood, Upholstered Headboard',
    dimensions: '210 × 190 × 120 cm',
    price: 78000,
    description: 'The Vienna King Bed combines solid teak construction with a luxuriously upholstered headboard. The integrated side tables and under-bed storage make this a masterpiece of form and function.',
    customizable: true,
    badge: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    ],
  },
  {
    id: 'bd-02',
    name: 'Oslo Wardrobe',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    material: 'MDF with Walnut Veneer',
    dimensions: '200 × 60 × 220 cm',
    price: 65000,
    description: 'The Oslo Wardrobe offers a perfect blend of Scandinavian aesthetics and smart storage. Sliding doors glide silently, revealing adjustable shelves, drawers, and dedicated hanging sections.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    ],
  },
  {
    id: 'bd-03',
    name: 'Luna Bedside Table',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    material: 'Mango Wood, Marble Top',
    dimensions: '50 × 40 × 55 cm',
    price: 14500,
    description: 'Compact elegance for your bedside. The Luna pairs natural mango wood with a polished marble top, featuring a hidden drawer and an open shelf for your essentials.',
    customizable: false,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1532323544230-7191fd1f003f?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    ],
  },
  {
    id: 'bd-04',
    name: 'Serenity Dressing Table',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    material: 'Sheesham Wood, Mirror',
    dimensions: '120 × 45 × 150 cm',
    price: 32000,
    description: 'A beautifully crafted dressing table with a large mirror, multiple drawers, and hidden compartments. The warm Sheesham wood finish adds sophistication to any bedroom.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80',
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80',
    ],
  },

  // ── Dining ──
  {
    id: 'dn-01',
    name: 'Farmhouse Dining Set',
    category: 'dining',
    categoryLabel: 'Dining',
    material: 'Solid Teak, 6 Chairs',
    dimensions: '180 × 90 × 76 cm (Table)',
    price: 95000,
    description: 'Gather the family around this stunning 6-seater dining set. The solid teak table features a live-edge finish, paired with six ergonomically designed chairs upholstered in premium linen.',
    customizable: true,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80',
    ],
  },
  {
    id: 'dn-02',
    name: 'Compact Dining Table',
    category: 'dining',
    categoryLabel: 'Dining',
    material: 'Rubberwood, 4 Chairs',
    dimensions: '120 × 80 × 76 cm',
    price: 45000,
    description: 'Designed for smaller spaces without compromising on style. This 4-seater dining set features a sleek rubberwood table with rounded edges and matching cushioned chairs.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80',
      'https://images.unsplash.com/photo-1595514535415-dae8580c416c?w=800&q=80',
    ],
  },
  {
    id: 'dn-03',
    name: 'Rustic Bar Cabinet',
    category: 'dining',
    categoryLabel: 'Dining',
    material: 'Reclaimed Wood, Iron',
    dimensions: '100 × 45 × 120 cm',
    price: 38000,
    description: 'A conversation-starting bar cabinet made from reclaimed wood with industrial iron accents. Features wine rack, glass holders, and adjustable shelving for your spirits collection.',
    customizable: false,
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    ],
  },
  {
    id: 'dn-04',
    name: 'Windsor Dining Chairs (Set of 2)',
    category: 'dining',
    categoryLabel: 'Dining',
    material: 'Ash Wood, Fabric Seat',
    dimensions: '45 × 50 × 90 cm each',
    price: 18500,
    description: 'Classic Windsor-inspired chairs updated with contemporary proportions. The curved backrest and contoured fabric seat provide exceptional comfort for long dinner conversations.',
    customizable: false,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80',
    ],
  },

  // ── Office ──
  {
    id: 'of-01',
    name: 'Executive Desk',
    category: 'office',
    categoryLabel: 'Office',
    material: 'Walnut Wood, Steel Legs',
    dimensions: '160 × 80 × 76 cm',
    price: 55000,
    description: 'Command your workspace with this premium executive desk. The solid walnut surface provides ample room for multiple monitors while the integrated cable management keeps your setup clean.',
    customizable: true,
    badge: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80',
    ],
  },
  {
    id: 'of-02',
    name: 'Ergonomic Office Chair',
    category: 'office',
    categoryLabel: 'Office',
    material: 'Mesh Back, Leather Seat',
    dimensions: '65 × 65 × 110-120 cm',
    price: 32000,
    description: 'Designed for all-day comfort. Adjustable lumbar support, breathable mesh back, and premium leather seat ensure productivity without the ache. Height and tilt adjustable.',
    customizable: false,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&q=80',
    ],
  },
  {
    id: 'of-03',
    name: 'Modular Storage Unit',
    category: 'office',
    categoryLabel: 'Office',
    material: 'MDF, Oak Veneer',
    dimensions: '120 × 40 × 180 cm',
    price: 28000,
    description: 'Organize your office with style. This modular storage system features open shelves, closed cabinets, and filing drawers that you can configure to suit your workflow.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80',
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
    ],
  },
  {
    id: 'of-04',
    name: 'Standing Desk Converter',
    category: 'office',
    categoryLabel: 'Office',
    material: 'Bamboo, Aluminium',
    dimensions: '80 × 50 × 15-45 cm',
    price: 22000,
    description: 'Transition seamlessly between sitting and standing with this elegant bamboo standing desk converter. Pneumatic height adjustment and a spacious work surface.',
    customizable: false,
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80',
    ],
  },

  // ── Hospitality ──
  {
    id: 'hs-01',
    name: 'Hotel Suite Package',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    material: 'Mixed Premium Woods',
    dimensions: 'Custom Configuration',
    price: 250000,
    description: 'Complete hotel suite furniture package including king bed, wardrobe, writing desk, lounge chair, bedside tables, and luggage rack. Designed for luxury hospitality with durability for daily use.',
    customizable: true,
    badge: 'B2B',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d955f3e47?w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    ],
  },
  {
    id: 'hs-02',
    name: 'Restaurant Booth Seating',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    material: 'Oak Frame, Leather Upholstery',
    dimensions: '150 × 60 × 110 cm per unit',
    price: 45000,
    description: 'Premium booth seating designed for restaurants and cafés. The solid oak frame provides stability while the leather upholstery offers a luxurious dining experience for your guests.',
    customizable: true,
    badge: 'B2B',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    ],
  },
  {
    id: 'hs-03',
    name: 'Café Table & Chairs Set',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    material: 'Metal Frame, Plywood Seat',
    dimensions: '70 × 70 × 75 cm (Table)',
    price: 18000,
    description: 'Stackable café furniture built for commercial use. The powder-coated metal frame withstands heavy daily use while the contoured plywood seat adds warmth and comfort.',
    customizable: true,
    badge: '',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80',
    ],
  },
  {
    id: 'hs-04',
    name: 'Lobby Lounge Set',
    category: 'hospitality',
    categoryLabel: 'Hospitality',
    material: 'Walnut, Premium Velvet',
    dimensions: '200 × 80 × 75 cm (Sofa)',
    price: 120000,
    description: 'Make a grand first impression. This lobby furniture set includes a 3-seater sofa, two accent chairs, and a marble-top center table — designed to welcome guests with sophistication.',
    customizable: true,
    badge: 'Premium',
    images: [
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80',
      'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800&q=80',
    ],
  },

  // ── Custom ──
  {
    id: 'cu-01',
    name: 'Bespoke Furniture Design',
    category: 'custom',
    categoryLabel: 'Custom',
    material: 'Your Choice',
    dimensions: 'Custom',
    price: 0,
    description: 'Tell us your vision and we\'ll bring it to life. Our master craftsmen work with you to design and build one-of-a-kind furniture pieces that perfectly match your space and style.',
    customizable: true,
    badge: 'Custom',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    ],
  },
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId) {
  if (categoryId === 'all') return products;
  return products.filter(p => p.category === categoryId);
}

export function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.material.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

export function formatPrice(price) {
  if (price === 0) return 'Get Quote';
  return '₹' + price.toLocaleString('en-IN');
}
