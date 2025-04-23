import coconutOil from '../assets/coconut-oil.jpg';
import groundnutOil from '../assets/groundnut-oil.jpg';
import sesameOil from '../assets/sesame-oil.jpg';
import coldPressedCoconutOil from '../assets/coldpressedcoconut-oil.jpg';

export const products = [
  {
    id: 1,
    name: 'Coconut Oil',
    description: 'Pure and natural coconut oil, cold-pressed for maximum benefits',
    prices: {
      '0.5': 100,
      '1': 180,
      '5': 850
    },
    originalPrices: {
      '0.5': 120,
      '1': 200,
      '5': 950
    },
    image: coconutOil,
    category: 'Coconut',
    benefits: [
      'Rich in healthy fatty acids',
      'Ideal for cooking and hair care',
      'Natural antibacterial properties',
      'Promotes heart health'
    ],
    specifications: {
      'Processing': 'Cold Pressed',
      'Packaging': 'Food Grade PET Bottle',
      'Shelf Life': '12 months',
      'Storage': 'Store in a cool, dry place'
    }
  },
  {
    id: 2,
    name: 'Groundnut Oil',
    description: 'Premium quality groundnut oil for authentic taste',
    prices: {
      '0.5': 150,
      '1': 270,
      '5': 1250
    },
    originalPrices: {
      '0.5': 170,
      '1': 300,
      '5': 1400
    },
    image: groundnutOil,
    category: 'Groundnut',
    benefits: [
      'High in monounsaturated fats',
      'Rich in Vitamin E',
      'Perfect for deep frying',
      'Natural antioxidants'
    ],
    specifications: {
      'Processing': 'Wood Pressed',
      'Packaging': 'Food Grade PET Bottle',
      'Shelf Life': '12 months',
      'Storage': 'Store in a cool, dry place'
    }
  },
  {
    id: 3,
    name: 'Sesame Oil',
    description: 'Traditional wood-pressed sesame oil for authentic flavor',
    prices: {
      '0.5': 200,
      '1': 380,
      '5': 1800
    },
    originalPrices: {
      '0.5': 220,
      '1': 400,
      '5': 1900
    },
    image: sesameOil,
    category: 'Sesame',
    benefits: [
      'Rich in antioxidants',
      'Traditional wood-pressed',
      'Perfect for South Indian cuisine',
      'Natural preservative properties'
    ],
    specifications: {
      'Processing': 'Wood Pressed',
      'Packaging': 'Food Grade PET Bottle',
      'Shelf Life': '12 months',
      'Storage': 'Store in a cool, dry place'
    }
  },
  {
    id: 4,
    name: 'Cold Pressed Coconut Oil',
    description: 'Premium cold-pressed coconut oil for superior quality',
    prices: {
      '0.5': 180,
      '1': 320,
      '5': 1500
    },
    originalPrices: {
      '0.5': 200,
      '1': 350,
      '5': 1600
    },
    image: coldPressedCoconutOil,
    category: 'Coconut',
    benefits: [
      'Retains all natural nutrients',
      'No heat processing',
      'Ideal for skincare',
      'Maximum health benefits'
    ],
    specifications: {
      'Processing': 'Cold Pressed',
      'Packaging': 'Food Grade PET Bottle',
      'Shelf Life': '12 months',
      'Storage': 'Store in a cool, dry place'
    }
  }
];