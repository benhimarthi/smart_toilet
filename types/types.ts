
// 1. First, update your ProductionItem type definition in types.ts
export type ProductionItem = {
  title: string;
  year: string;
  image?: string;
  video?: string;
  description?: string;
  client?: string;
  director?: string; // New optional director field
  link?: string;
  itemCategoryName?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  items: ProductionItem[];
};

export type Client = {
  id: number;
  name: string;
  logo: string;
  category: string;
  description?: string;
}