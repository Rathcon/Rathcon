import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Project = {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior Design' | 'Renovations';
  image: string;
  description: string;
  dataAiHint: string;
};

export type Testimonial = {
  id: number;
  name: string;
  company: string;
  quote: string;
  avatar: string;
  dataAiHint: string;
};
