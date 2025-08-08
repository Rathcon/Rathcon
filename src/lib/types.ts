import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: any;
  title: string;
  description: string;
  image?: string;
  features?: string[];
}

export interface Client {
  id: string;
  name: string;
  company?: string;
  project: string;
  testimonial: string;
  rating: number;
  image?: string;
  location?: string;
  projectType: string;
  projectValue?: string;
  completedDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'residential' | 'commercial' | 'renovation' | 'interior';
  category: string;
  location: string;
  area: string;
  duration: string;
  value: string;
  images: string[];
  features: string[];
  client: string;
  completedDate: string;
  status: 'completed' | 'ongoing' | 'upcoming';
}

export type Testimonial = {
  id: number;
  name: string;
  company: string;
  quote: string;
  avatar: string;
  dataAiHint: string;
};

export type TimelineEvent = {
  year: string;
  event: string;
  description: string;
};
