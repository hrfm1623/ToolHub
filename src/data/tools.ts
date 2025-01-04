import { Tool } from "../types/tool";
import {
  Github,
  Figma,
  Code,
  Image,
  FileText,
  Calculator,
  Clock,
  Calendar,
  QrCode,
  Hash,
  Type,
  Palette,
  Link,
  Share2,
  FileSearch,
  Download,
  Languages,
  Mail,
} from "lucide-react";

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
    platforms: ["browser", "cli"],
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
    platforms: ["browser"],
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
    platforms: ["vscode"],
    languages: ["javascript", "typescript", "python", "java", "go", "rust"],
    relatedTools: ["github"],
    alternativeTools: ["intellij"],
  },
  {
    id: "image-optimizer",
    title: "Image Optimizer",
    description: "画像を品質を維持したまま最適化",
    icon: Image,
    url: "https://squoosh.app",
    category: "画像処理",
    platforms: ["browser"],
    longDescription:
      "ブラウザベースの高度な画像最適化ツール。様々なフォーマットに対応し、プレビューを確認しながら最適な設定を選択できます。",
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "JSONデータのフォーマットとバリデーション",
    icon: FileText,
    url: "https://jsonformatter.org",
    category: "開発ツール",
    platforms: ["browser", "vscode"],
    languages: ["javascript"],
    longDescription:
      "JSONデータを見やすく整形し、構文の検証も行えるオンラインツール。データの圧縮や展開、異なるフォーマット間の変換にも対応しています。",
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    description: "様々な単位の変換ツール",
    icon: Calculator,
    url: "https://unitconverters.net",
    category: "ユーティリティ",
    platforms: ["browser"],
    longDescription:
      "長さ、重さ、温度など、あらゆる単位の変換に対応したツール。直感的なインターフェースで素早く正確な変換が可能です。",
  },
  {
    id: "world-clock",
    title: "World Clock",
    description: "世界各地のタイムゾーンを確認",
    icon: Clock,
    url: "https://worldtimebuddy.com",
    category: "時間管理",
    platforms: ["browser"],
    longDescription:
      "世界中の時刻を一目で確認できるツール。ミーティングのスケジュール調整やリモートワークでの時差確認に便利です。",
  },
  {
    id: "date-calculator",
    title: "Date Calculator",
    description: "日付の計算や期間の算出",
    icon: Calendar,
    url: "https://timeanddate.com/date/duration.html",
    category: "時間管理",
    platforms: ["browser"],
    longDescription:
      "日付間の期間計算、特定の日数後の日付算出など、日付に関する計算を簡単に行えるツール。",
  },
  {
    id: "qr-generator",
    title: "QR Code Generator",
    description: "URLやテキストからQRコードを生成",
    icon: QrCode,
    url: "https://qr-code-generator.com",
    category: "ユーティリティ",
    platforms: ["browser"],
    longDescription:
      "様々なデータ形式に対応したQRコード生成ツール。カスタマイズ可能なデザインオプションも提供しています。",
  },
  {
    id: "hash-generator",
    title: "Hash Generator",
    description: "各種ハッシュ値の生成",
    icon: Hash,
    url: "https://passwordsgenerator.net/sha256-hash-generator",
    category: "開発ツール",
    platforms: ["browser", "cli"],
    languages: ["javascript"],
    longDescription:
      "MD5、SHA-1、SHA-256など、様々なハッシュアルゴリズムに対応したハッシュ値生成ツール。",
  },
  {
    id: "lorem-ipsum",
    title: "Lorem Ipsum Generator",
    description: "デザイン用のダミーテキスト生成",
    icon: Type,
    url: "https://loremipsum.io",
    category: "コンテンツ",
    platforms: ["browser"],
    longDescription:
      "デザインやレイアウトの確認用に、様々な長さやフォーマットのダミーテキストを生成できるツール。",
  },
  {
    id: "color-palette",
    title: "Color Palette Generator",
    description: "プロジェクト用のカラースキーム作成",
    icon: Palette,
    url: "https://coolors.co",
    category: "デザイン",
    platforms: ["browser"],
    longDescription:
      "カラーパレットの生成や編集、保存が可能なツール。色のハーモニーやアクセシビリティも考慮したパレット作成をサポートします。",
    relatedTools: ["figma"],
  },
  {
    id: "amazon-url-shortener",
    title: "Amazon URL Shortener",
    description: "Amazonの商品URLを短縮・整形",
    icon: Link,
    url: "https://amazon-url-shortener.vercel.app",
    category: "URL管理",
    platforms: ["browser"],
    longDescription:
      "Amazonの長いURLから不要なパラメータを削除し、シンプルで共有しやすいURLに変換します。アフィリエイトパラメータの付与にも対応。",
  },
  {
    id: "temp-mail",
    title: "Temp Mail",
    description: "使い捨てメールアドレス生成",
    icon: Mail,
    url: "https://temp-mail.org",
    category: "プライバシー",
    platforms: ["browser"],
    longDescription:
      "一時的なメールアドレスを即座に生成。サービスの登録時やニュースレターの購読など、個人のメールアドレスを使いたくない場合に便利です。",
  },
  {
    id: "deepl",
    title: "DeepL",
    description: "高精度な機械翻訳",
    icon: Languages,
    url: "https://www.deepl.com/translator",
    category: "翻訳",
    platforms: ["browser", "vscode"],
    longDescription:
      "AIを活用した高精度な翻訳サービス。自然な翻訳結果と専門用語への対応が特徴で、ビジネス文書や技術文書の翻訳に最適です。",
    pricing: [
      {
        name: "Free",
        price: 0,
        currency: "USD",
        billingPeriod: "free",
        features: [
          "月500,000文字まで無料",
          "基本的な翻訳機能",
          "Webサイト翻訳",
        ],
      },
      {
        name: "Pro",
        price: 30,
        currency: "USD",
        billingPeriod: "monthly",
        features: [
          "無制限の翻訳",
          "ドキュメント翻訳",
          "用語集機能",
          "チーム共有",
        ],
      },
    ],
  },
  {
    id: "file-converter",
    title: "File Converter",
    description: "各種ファイル形式の変換",
    icon: FileSearch,
    url: "https://cloudconvert.com",
    category: "ファイル変換",
    platforms: ["browser"],
    longDescription:
      "200以上のファイル形式に対応したオンラインファイル変換ツール。画像、動画、音声、ドキュメント、アーカイブなど、あらゆる形式の変換が可能です。",
  },
  {
    id: "youtube-downloader",
    title: "YouTube Downloader",
    description: "YouTube動画のダウンロード",
    icon: Download,
    url: "https://yt-dl.org",
    category: "ダウンロード",
    platforms: ["cli"],
    languages: ["python"],
    githubUrl: "https://github.com/yt-dlp/yt-dlp",
    documentationUrl: "https://github.com/yt-dlp/yt-dlp#readme",
    longDescription:
      "YouTubeやその他の動画サイトから動画をダウンロードできるコマンドラインツール。様々な品質オプションや字幕のダウンロードにも対応。",
    installCommands: {
      pip: "pip install yt-dlp",
    },
  },
  {
    id: "share-files",
    title: "File Transfer",
    description: "一時的なファイル共有サービス",
    icon: Share2,
    url: "https://wetransfer.com",
    category: "ファイル共有",
    platforms: ["browser"],
    longDescription:
      "大容量ファイルを一時的に共有できるサービス。メールアドレスを使用して簡単にファイルを送信でき、リンクの有効期限も設定可能です。",
    pricing: [
      {
        name: "Free",
        price: 0,
        currency: "USD",
        billingPeriod: "free",
        features: [
          "2GBまでのファイル転送",
          "7日間のリンク有効期限",
          "基本的な共有機能",
        ],
      },
      {
        name: "Pro",
        price: 12,
        currency: "USD",
        billingPeriod: "monthly",
        features: [
          "20GBまでのファイル転送",
          "カスタム有効期限",
          "パスワード保護",
          "ストレージ機能",
        ],
      },
    ],
  },
];
