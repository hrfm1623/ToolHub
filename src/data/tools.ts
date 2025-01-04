import { Tool } from "../types/tool";
import { Github, Figma, Code } from "lucide-react";

export const tools: Tool[] = [
  {
    id: "github",
    title: "GitHub",
    description: "ソースコード管理とコラボレーションのためのプラットフォーム",
    icon: Github,
    url: "https://github.com",
    category: "バージョン管理",
    githubUrl: "https://github.com/github",
    documentationUrl: "https://docs.github.com",
    platforms: ["web"],
    languages: ["javascript", "typescript", "python", "java", "go", "rust"],
    longDescription:
      "GitHubは、世界最大のソフトウェア開発プラットフォームです。オープンソースプロジェクトのホスティング、バージョン管理、コードレビュー、イシュー管理など、包括的な開発ワークフローをサポートします。",
    pricing: [
      {
        name: "Free",
        price: 0,
        currency: "USD",
        billingPeriod: "free",
        features: [
          "無制限のパブリックリポジトリ",
          "無制限のプライベートリポジトリ",
          "基本的なイシュー管理",
          "GitHub Actions（月2,000分）",
        ],
      },
      {
        name: "Team",
        price: 4,
        currency: "USD",
        billingPeriod: "monthly",
        features: [
          "すべてのFree機能",
          "プロジェクト管理",
          "チームレビュー",
          "ドラフトプルリクエスト",
        ],
      },
    ],
  },
  {
    id: "figma",
    title: "Figma",
    description: "ブラウザベースのUIデザインツール",
    icon: Figma,
    url: "https://www.figma.com",
    category: "デザイン",
    platforms: ["web"],
    languages: ["typescript"],
    documentationUrl: "https://help.figma.com",
    longDescription:
      "Figmaは、チームでのデザイン作業を効率化するためのクラウドベースのデザインツールです。リアルタイムコラボレーション、プロトタイピング、デザインシステムの管理などの機能を提供します。",
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "軽量で高機能なコードエディタ",
    icon: Code,
    url: "https://code.visualstudio.com",
    category: "開発ツール",
    githubUrl: "https://github.com/microsoft/vscode",
    documentationUrl: "https://code.visualstudio.com/docs",
    platforms: ["windows", "mac", "linux"],
    languages: ["javascript", "typescript", "python", "java", "go", "rust"],
    relatedTools: ["github"],
    alternativeTools: ["sublime-text", "atom"],
  },
];
