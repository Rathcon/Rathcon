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
    completedDate: '2024-11-20'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Comprehensive Construction & Civil Works Project',
    description: 'Complete construction and civil works project at Arga Naval Base, Karwar, Karnataka. This comprehensive project includes Naval Base Main Gate construction, residential complex development, interior design & finishing, commercial building renovation, tile installation, and granite & marble work. Our expertise covers all aspects from structural construction to fine finishing touches.',
    type: 'commercial',
    category: 'Comprehensive Construction',
    location: 'Arga Naval Base, Karwar, Karnataka',
    area: '150,000 sq ft',
    duration: '24 months',
    value: '₹25 Crores',
    images: [
      '/WhatsApp Image 2025-08-06 at 8.54.41 AM.jpeg',
      '/WhatsApp Image 2025-08-06 at 8.54.41 AM (1).jpeg',
      '/WhatsApp Image 2025-08-06 at 8.54.42 AM.jpeg',
      '/WhatsApp Image 2025-08-06 at 8.54.42 AM (1).jpeg',
      '/WhatsApp Image 2025-08-06 at 8.54.42 AM (2).jpeg',
      '/WhatsApp Image 2025-08-06 at 8.54.43 AM.jpeg'
    ],
    features: [
      'Naval Base Main Gate Construction',
      'Residential Complex Development',
      'Interior Design & Finishing',
      'Commercial Building Renovation',
      'Tile Installation',
      'Granite & Marble Work',
      'Structural Construction',
      'Fine Finishing Touches'
    ],
    client: 'Indian Navy',
    completedDate: '2024-12-15',
    status: 'completed'
  }
];
