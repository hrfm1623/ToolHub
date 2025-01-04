import { LucideIcon } from "lucide-react";

export type PricingPlan = {
  name: string;
  price: number;
  currency: string;
  billingPeriod: "monthly" | "yearly" | "one-time" | "free";
  features: string[];
};

export type Tutorial = {
  title: string;
  description: string;
  url: string;
  type: "video" | "article" | "documentation";
};

export type Platform = "windows" | "mac" | "browser" | "android" | "ios";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  category: string;
  // 詳細情報
  longDescription?: string;
  tutorials?: Tutorial[];
  pricing?: PricingPlan[];
  platforms?: Platform[];
  difficulty?: Difficulty;
  features?: string[];
  lastUpdated?: string;
  rating?: number;
  downloadCount?: number;
  relatedTools?: string[]; // Tool IDs
  alternativeTools?: string[]; // Tool IDs
}

export interface FavoriteTool extends Tool {
  addedAt: string;
}
