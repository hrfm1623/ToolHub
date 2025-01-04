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

export type Platform = "vscode" | "intellij" | "browser" | "cli";
export type ProgrammingLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "go"
  | "rust"
  | "other";

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
  languages?: ProgrammingLanguage[];
  githubUrl?: string;
  documentationUrl?: string;
  relatedTools?: string[]; // Tool IDs
  alternativeTools?: string[]; // Tool IDs
  installCommands?: {
    npm?: string;
    yarn?: string;
    pnpm?: string;
    pip?: string;
    cargo?: string;
    go?: string;
  };
}

export interface FavoriteTool extends Tool {
  addedAt: string;
}
