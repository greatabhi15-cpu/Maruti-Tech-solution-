export type PageId = 'home' | 'about' | 'services' | 'why-maruti' | 'contact';

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  category: string;
  iconName: string;
  features?: string[];
  turnaround?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  items: {
    title: string;
    details: string;
    badge?: string;
  }[];
}

export interface TrustPillar {
  num: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface QuickFixComparison {
  feature: string;
  quickFix: string;
  properSolution: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  issue: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
