/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageType = 'home' | 'about' | 'projects' | 'project-detail' | 'testimonials' | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  location: string;
  year: string;
  size: string;
  challenge: string;
  solution: string;
  materials: string[];
  mainImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  review: string;
  location?: string;
  date?: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  bio: string;
  image: string;
  philosophy: string;
  values: {
    title: string;
    description: string;
  }[];
}
