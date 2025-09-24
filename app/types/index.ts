// types/index.ts
export interface NavContent {
  home: string;
  about: string;
  speakers: string;
  schedule: string;
  sponsors: string;
  contact: string;
  register: string;
  exhibitor: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  cta: string;
  date: string;
  location: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface AboutContent {
  title: string;
  description: string;
  stats: Stat[];
}

export interface LastEventsContent {
  title: string;
  subtitle: string;
}

export interface SpeakersContent {
  title: string;
  subtitle: string;
}

export interface SponsorsContent {
  title: string;
  subtitle: string;
}

export interface FooterContent {
  description: string;
  quickLinks: string;
  contact: string;
  follow: string;
}

export interface LanguageContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  lastEvents: LastEventsContent;
  speakers: SpeakersContent;
  sponsors: SponsorsContent;
  footer: FooterContent;
}

export interface ContentData {
  EN: LanguageContent;
  FR: LanguageContent;
}

export type Language = 'EN' | 'FR';

export interface Event {
  id: number;
  year: string;
  location: string;
  image: string;
}

export interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  name: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface QuickLink {
  href: string;
  text: string;
}