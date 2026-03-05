export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  rate: string;
  image: string;
  bio: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Vikram Singh',
    role: 'Master Elite Trainer',
    experience: '12+ Years',
    specialties: ['Body Recomposition', 'Olympic Lifting', 'Nutrition'],
    rate: '₹5,000 / Session',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    bio: 'Former national athlete specializing in high-performance transformations for executives.'
  },
  {
    id: '2',
    name: 'Ananya Iyer',
    role: 'Senior Yoga & Wellness Coach',
    experience: '8 Years',
    specialties: ['Ashtanga Yoga', 'Mindfulness', 'Flexibility'],
    rate: '₹3,500 / Session',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    bio: 'Certified in Rishikesh, Ananya brings a holistic approach to physical and mental well-being.'
  },
  {
    id: '3',
    name: 'Rohan Malhotra',
    role: 'Strength & Conditioning Specialist',
    experience: '10 Years',
    specialties: ['Powerlifting', 'Functional Training', 'Injury Rehab'],
    rate: '₹4,200 / Session',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    bio: 'Dedicated to building resilient bodies through scientifically-backed strength protocols.'
  }
];

export const PLANS: MembershipPlan[] = [
  {
    id: 'silver',
    name: 'Prestige',
    price: '₹15,000',
    period: 'Month',
    features: ['Access to all facilities', '2 Personal training sessions', 'Locker access', 'Steam & Sauna']
  },
  {
    id: 'gold',
    name: 'Elite',
    price: '₹35,000',
    period: 'Month',
    isPopular: true,
    features: ['24/7 Priority Access', '8 Personal training sessions', 'Private Valet', 'Nutrition Consultation', 'Spa Access']
  },
  {
    id: 'platinum',
    name: 'Imperial',
    price: '₹2,50,000',
    period: 'Year',
    features: ['Unlimited PT', 'Private Suite Access', 'Dedicated Concierge', 'Global Partner Gym Access', 'Monthly Wellness Retreats']
  }
];
