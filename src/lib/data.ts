import type { Client, Project } from './types';

export const clients: Client[] = [
  {
    id: '1',
    name: 'Rajesh Patel',
    company: 'Patel Enterprises',
    project: 'Luxury Villa Construction',
    testimonial: 'Rathcon Construction delivered our dream home exactly as promised. Their attention to detail and quality craftsmanship is exceptional. The project was completed on time and within budget. Highly recommended!',
    rating: 5,
    location: 'Thane West',
    projectType: 'Residential Construction',
    projectValue: '₹2.5 Crores',
    completedDate: '2024-12-15'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    company: 'Sharma Family',
    project: 'Kitchen Renovation & Interior Design',
    testimonial: 'The kitchen renovation exceeded our expectations. The team was professional, creative, and delivered a beautiful, functional space. The granite work and tile installation are perfect.',
    rating: 5,
    location: 'Navi Mumbai',
    projectType: 'Interior Design & Renovation',
    projectValue: '₹15 Lakhs',
    completedDate: '2024-11-20'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    company: 'Kumar Developers',
    project: 'Commercial Office Complex',
    testimonial: 'Rathcon Construction built our 5-story office complex with outstanding quality. Their project management skills and timely delivery impressed us. Great team to work with!',
    rating: 5,
    location: 'Mumbai Central',
    projectType: 'Commercial Construction',
    projectValue: '₹8 Crores',
    completedDate: '2024-10-30'
  },
  {
    id: '4',
    name: 'Sunita Desai',
    company: 'Desai Residency',
    project: 'Complete Home Renovation',
    testimonial: 'They transformed our old house into a modern masterpiece. From structural changes to finishing touches, everything was done with precision. The marble and granite work is stunning.',
    rating: 5,
    location: 'Thane East',
    projectType: 'Renovation & Remodeling',
    projectValue: '₹45 Lakhs',
    completedDate: '2024-09-15'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    company: 'Singh Properties',
    project: 'Apartment Complex Development',
    testimonial: 'Rathcon Construction handled our 50-unit apartment project with excellence. Their expertise in large-scale construction and attention to quality standards is commendable.',
    rating: 5,
    location: 'Kalyan',
    projectType: 'Residential Development',
    projectValue: '₹12 Crores',
    completedDate: '2024-08-25'
  },
  {
    id: '6',
    name: 'Meera Iyer',
    company: 'Iyer Boutique',
    project: 'Retail Store Interior',
    testimonial: 'Our boutique interior design was executed perfectly. The team understood our vision and created a beautiful, functional space that attracts customers. Excellent work!',
    rating: 5,
    location: 'Andheri West',
    projectType: 'Commercial Interior',
    projectValue: '₹25 Lakhs',
    completedDate: '2024-07-10'
  },
  {
    id: '7',
    name: 'Ramesh Gupta',
    company: 'Gupta Manufacturing',
    project: 'Industrial Warehouse',
    testimonial: 'The warehouse construction was completed ahead of schedule with superior quality. Rathcon Construction\'s expertise in industrial projects is outstanding.',
    rating: 5,
    location: 'Bhiwandi',
    projectType: 'Industrial Construction',
    projectValue: '₹6 Crores',
    completedDate: '2024-06-20'
  },
  {
    id: '8',
    name: 'Anjali Mehta',
    company: 'Mehta Family',
    project: 'Bathroom Remodeling',
    testimonial: 'Our bathroom renovation is beautiful and functional. The tile work and plumbing fixtures are installed perfectly. The team was clean and professional throughout.',
    rating: 5,
    location: 'Powai',
    projectType: 'Bathroom Remodeling',
    projectValue: '₹8 Lakhs',
    completedDate: '2024-05-15'
  },
  {
    id: '9',
    name: 'Deepak Verma',
    company: 'Verma Real Estate',
    project: 'Townhouse Development',
    testimonial: 'Rathcon Construction built our premium townhouse project with exceptional quality. Their understanding of luxury construction and attention to detail is remarkable.',
    rating: 5,
    location: 'Thane West',
    projectType: 'Luxury Residential',
    projectValue: '₹4 Crores',
    completedDate: '2024-04-30'
  },
  {
    id: '10',
    name: 'Kavita Reddy',
    company: 'Reddy Clinic',
    project: 'Medical Clinic Interior',
    testimonial: 'Our medical clinic interior was designed and executed with precision. The space is both functional and welcoming for patients. Excellent workmanship!',
    rating: 5,
    location: 'Thane Central',
    projectType: 'Healthcare Interior',
    projectValue: '₹35 Lakhs',
    completedDate: '2024-03-25'
  },
  {
    id: '11',
    name: 'Suresh Malhotra',
    company: 'Malhotra Group',
    project: 'Restaurant Interior Design',
    testimonial: 'The restaurant interior design is stunning and functional. Rathcon Construction created the perfect ambiance for our dining establishment. Highly satisfied!',
    rating: 5,
    location: 'Bandra West',
    projectType: 'Hospitality Interior',
    projectValue: '₹50 Lakhs',
    completedDate: '2024-02-15'
  },
  {
    id: '12',
    name: 'Lakshmi Nair',
    company: 'Nair Family',
    project: 'Complete Home Construction',
    testimonial: 'Our dream home was built with love and precision. Rathcon Construction made the entire process smooth and enjoyable. The quality of construction is outstanding.',
    rating: 5,
    location: 'Nerul',
    projectType: 'Custom Home Construction',
    projectValue: '₹3.2 Crores',
    completedDate: '2024-01-20'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Villa - Thane West',
    description: 'A stunning 4BHK luxury villa with modern amenities, premium finishes, and beautiful landscaping. Features include a home theater, gym, and rooftop garden.',
    type: 'residential',
    category: 'Luxury Villa',
    location: 'Thane West, Mumbai',
    area: '4,500 sq ft',
    duration: '12 months',
    value: '₹2.5 Crores',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    features: ['4 BHK', 'Home Theater', 'Gym', 'Rooftop Garden', 'Premium Finishes'],
    client: 'Rajesh Patel',
    completedDate: '2024-12-15',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Modern Kitchen Renovation',
    description: 'Complete kitchen transformation with custom cabinets, granite countertops, and modern appliances. Includes smart storage solutions and beautiful tile work.',
    type: 'renovation',
    category: 'Kitchen Remodeling',
    location: 'Navi Mumbai',
    area: '250 sq ft',
    duration: '6 weeks',
    value: '₹15 Lakhs',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'
    ],
    features: ['Custom Cabinets', 'Granite Countertops', 'Modern Appliances', 'Smart Storage'],
    client: 'Priya Sharma',
    completedDate: '2024-11-20',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Commercial Office Complex',
    description: '5-story modern office complex with state-of-the-art facilities, energy-efficient design, and premium finishes. Includes parking and landscaped areas.',
    type: 'commercial',
    category: 'Office Building',
    location: 'Mumbai Central',
    area: '25,000 sq ft',
    duration: '18 months',
    value: '₹8 Crores',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    ],
    features: ['5 Stories', 'Modern Design', 'Energy Efficient', 'Premium Finishes'],
    client: 'Amit Kumar',
    completedDate: '2024-10-30',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Complete Home Renovation',
    description: 'Transformation of an old house into a modern family home with structural changes, new electrical systems, and beautiful interior design.',
    type: 'renovation',
    category: 'Home Renovation',
    location: 'Thane East',
    area: '2,800 sq ft',
    duration: '8 months',
    value: '₹45 Lakhs',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    features: ['Structural Changes', 'Modern Interior', 'New Electrical', 'Marble Finishes'],
    client: 'Sunita Desai',
    completedDate: '2024-09-15',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Apartment Complex Development',
    description: '50-unit premium apartment complex with modern amenities, landscaped gardens, and community facilities. Includes parking and security systems.',
    type: 'residential',
    category: 'Apartment Complex',
    location: 'Kalyan',
    area: '75,000 sq ft',
    duration: '24 months',
    value: '₹12 Crores',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
    ],
    features: ['50 Units', 'Modern Amenities', 'Landscaped Gardens', 'Security Systems'],
    client: 'Vikram Singh',
    completedDate: '2024-08-25',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Boutique Interior Design',
    description: 'Elegant boutique interior with custom displays, premium lighting, and beautiful finishes. Creates the perfect shopping experience for customers.',
    type: 'interior',
    category: 'Retail Interior',
    location: 'Andheri West',
    area: '1,200 sq ft',
    duration: '4 weeks',
    value: '₹25 Lakhs',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    ],
    features: ['Custom Displays', 'Premium Lighting', 'Beautiful Finishes', 'Customer Experience'],
    client: 'Meera Iyer',
    completedDate: '2024-07-10',
    status: 'completed'
  },
  {
    id: '7',
    title: 'Industrial Warehouse',
    description: 'Large-scale industrial warehouse with modern facilities, efficient layout, and advanced security systems. Built for optimal storage and operations.',
    type: 'commercial',
    category: 'Industrial Building',
    location: 'Bhiwandi',
    area: '50,000 sq ft',
    duration: '12 months',
    value: '₹6 Crores',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    features: ['Large Scale', 'Modern Facilities', 'Efficient Layout', 'Security Systems'],
    client: 'Ramesh Gupta',
    completedDate: '2024-06-20',
    status: 'completed'
  },
  {
    id: '8',
    title: 'Luxury Bathroom Remodeling',
    description: 'Premium bathroom renovation with imported tiles, modern fixtures, and spa-like features. Includes custom cabinetry and premium finishes.',
    type: 'renovation',
    category: 'Bathroom Remodeling',
    location: 'Powai',
    area: '180 sq ft',
    duration: '3 weeks',
    value: '₹8 Lakhs',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'
    ],
    features: ['Imported Tiles', 'Modern Fixtures', 'Spa Features', 'Custom Cabinetry'],
    client: 'Anjali Mehta',
    completedDate: '2024-05-15',
    status: 'completed'
  },
  {
    id: '9',
    title: 'Premium Townhouse Development',
    description: 'Exclusive townhouse development with luxury amenities, modern design, and premium finishes. Each unit features high-end appliances and beautiful landscaping.',
    type: 'residential',
    category: 'Townhouse Development',
    location: 'Thane West',
    area: '3,200 sq ft',
    duration: '14 months',
    value: '₹4 Crores',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    features: ['Luxury Amenities', 'Modern Design', 'Premium Finishes', 'High-end Appliances'],
    client: 'Deepak Verma',
    completedDate: '2024-04-30',
    status: 'completed'
  },
  {
    id: '10',
    title: 'Medical Clinic Interior',
    description: 'Professional medical clinic interior with modern design, comfortable waiting areas, and efficient workspace layout. Includes specialized medical equipment areas.',
    type: 'interior',
    category: 'Healthcare Interior',
    location: 'Thane Central',
    area: '2,500 sq ft',
    duration: '6 weeks',
    value: '₹35 Lakhs',
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
    ],
    features: ['Modern Design', 'Comfortable Waiting', 'Efficient Layout', 'Medical Equipment'],
    client: 'Kavita Reddy',
    completedDate: '2024-03-25',
    status: 'completed'
  },
  {
    id: '11',
    title: 'Restaurant Interior Design',
    description: 'Elegant restaurant interior with custom lighting, beautiful seating arrangements, and premium finishes. Creates the perfect dining atmosphere.',
    type: 'interior',
    category: 'Hospitality Interior',
    location: 'Bandra West',
    area: '3,500 sq ft',
    duration: '8 weeks',
    value: '₹50 Lakhs',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
    ],
    features: ['Custom Lighting', 'Beautiful Seating', 'Premium Finishes', 'Dining Atmosphere'],
    client: 'Suresh Malhotra',
    completedDate: '2024-02-15',
    status: 'completed'
  },
  {
    id: '12',
    title: 'Custom Dream Home',
    description: 'Beautiful custom home built with love and precision. Features modern design, premium materials, and personalized touches throughout.',
    type: 'residential',
    category: 'Custom Home',
    location: 'Nerul',
    area: '3,800 sq ft',
    duration: '16 months',
    value: '₹3.2 Crores',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    features: ['Modern Design', 'Premium Materials', 'Personalized Touches', 'Quality Construction'],
    client: 'Lakshmi Nair',
    completedDate: '2024-01-20',
    status: 'completed'
  }
];
