import { Tool } from "../types/tool";
import {
  Github,
  Figma,
  Code,
  Image,
  FileText,
  Calculator,
  Clock,
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
  Camera,
  Music,
  Video,
  PenTool,
  Wallet,
  ListTodo,
  StickyNote,
  MessageSquare,
  Calculator as CalcIcon,
  DollarSign,
  CalendarDays,
} from "lucide-react";

export const tools: Tool[] = [
  {
    id: "github",
    title: "GitHub",
    description: "ソースコード管理とコラボレーションのためのプラットフォーム",
    icon: Github,
    url: "https://github.com",
    category: "バージョン管理",
    platforms: ["windows", "mac", "browser"],
    difficulty: "intermediate",
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
    rating: 4.8,
    downloadCount: 5000000,
  },
  {
    id: "figma",
    title: "Figma",
    description: "ブラウザベースのUIデザインツール",
    icon: Figma,
    url: "https://www.figma.com",
    category: "デザイン",
    platforms: ["browser"],
    difficulty: "intermediate",
    longDescription:
      "Figmaは、チームでのデザイン作業を効率化するためのクラウドベースのデザインツールです。リアルタイムコラボレーション、プロトタイピング、デザインシステムの管理などの機能を提供します。",
    rating: 4.7,
    downloadCount: 2000000,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "軽量で高機能なコードエディタ",
    icon: Code,
    url: "https://code.visualstudio.com",
    category: "開発ツール",
    platforms: ["windows", "mac"],
    difficulty: "intermediate",
    longDescription:
      "Microsoft社が開発した無料のコードエディタ。豊富な拡張機能と使いやすいインターフェースで、プログラミングの効率を大幅に向上させます。",
    rating: 4.8,
    downloadCount: 3000000,
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
    platforms: ["browser"],
    difficulty: "intermediate",
    longDescription:
      "JSONデータを見やすく整形し、構文の検証も行えるオンラインツール。データの圧縮や展開、異なるフォーマット間の変換にも対応しています。",
    rating: 4.2,
    downloadCount: 500000,
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
    title: "日付計算",
    description: "日数計算・年齢計算",
    icon: CalendarDays,
    url: "https://keisan.casio.jp/exec/system/1161228943",
    category: "計算・換算",
    platforms: ["browser"],
    difficulty: "beginner",
    longDescription:
      "日付間の日数計算や年齢計算、曜日判定などができるツール。期間の計算や締め日の算出に便利。",
    rating: 4.2,
    downloadCount: 400000,
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
    platforms: ["browser"],
    difficulty: "intermediate",
    longDescription:
      "MD5、SHA-1、SHA-256など、様々なハッシュアルゴリズムに対応したハッシュ値生成ツール。",
    rating: 4.0,
    downloadCount: 300000,
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
    id: "url-shortener",
    title: "URL Shortener",
    description: "長いURLを短く簡潔に変換",
    icon: Link,
    url: "https://bitly.com",
    category: "URL管理",
    platforms: ["browser"],
    longDescription:
      "長いURLを短く、共有しやすい形式に変換できるサービス。クリック数の追跡やカスタムドメインにも対応しています。",
    pricing: [
      {
        name: "Free",
        price: 0,
        currency: "USD",
        billingPeriod: "free",
        features: [
          "月50URLまで短縮可能",
          "基本的なクリック分析",
          "QRコード生成",
        ],
      },
      {
        name: "Basic",
        price: 8,
        currency: "USD",
        billingPeriod: "monthly",
        features: [
          "無制限のURL短縮",
          "詳細な分析機能",
          "カスタムバックハーフ",
          "URLのタグ付け",
        ],
      },
    ],
    rating: 4.5,
    downloadCount: 1000000,
    difficulty: "beginner",
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
    platforms: ["windows", "mac", "browser", "android", "ios"],
    difficulty: "beginner",
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
    rating: 4.6,
    downloadCount: 1500000,
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
    platforms: ["windows", "mac"],
    difficulty: "intermediate",
    longDescription:
      "YouTubeやその他の動画サイトから動画をダウンロードできるツール。様々な品質オプションや字幕のダウンロードにも対応。",
    rating: 4.3,
    downloadCount: 800000,
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
  {
    id: "pdf-tools",
    title: "PDFツール",
    description: "PDF結合・分割・圧縮",
    icon: FileText,
    url: "https://www.ilovepdf.com/ja",
    category: "文書・ファイル",
    platforms: ["browser"],
    longDescription:
      "PDFファイルの結合、分割、圧縮、変換など、様々な編集機能を提供するオンラインツール。",
  },
  {
    id: "image-editor",
    title: "画像編集ツール",
    description: "画像の編集・加工・フィルター",
    icon: Image,
    url: "https://pixlr.com/ja/",
    category: "文書・ファイル",
    platforms: ["browser"],
    longDescription:
      "プロ級の画像編集機能を提供するオンラインツール。フィルター、エフェクト、トリミング、サイズ変更など多彩な機能を搭載。",
  },
  {
    id: "ocr-tool",
    title: "テキスト抽出（OCR）",
    description: "画像からテキストを抽出",
    icon: FileSearch,
    url: "https://www.onlineocr.net/ja/",
    category: "文書・ファイル",
    platforms: ["browser"],
    longDescription:
      "画像や写真からテキストを抽出するOCRツール。多言語対応で高精度な認識が可能。",
  },
  {
    id: "video-editor",
    title: "動画編集ツール",
    description: "動画のカット・結合・変換",
    icon: Video,
    url: "https://www.kapwing.com",
    category: "メディア編集",
    platforms: ["browser"],
    longDescription:
      "ブラウザベースの動画編集ツール。カット、結合、字幕追加、エフェクトなど、基本的な編集機能を提供。",
  },
  {
    id: "audio-editor",
    title: "音声編集ツール",
    description: "音声ファイルの編集・変換",
    icon: Music,
    url: "https://audiomass.co",
    category: "メディア編集",
    platforms: ["browser"],
    longDescription:
      "音声ファイルの編集、変換、エフェクト追加などができるオンラインツール。",
  },
  {
    id: "gif-maker",
    title: "GIF作成ツール",
    description: "画像や動画からGIFを作成",
    icon: Camera,
    url: "https://ezgif.com/maker",
    category: "メディア編集",
    platforms: ["browser"],
    longDescription:
      "画像や動画からGIFアニメーションを作成できるツール。サイズ調整、速度変更、エフェクト追加なども可能。",
  },
  {
    id: "money-manager",
    title: "家計簿ツール",
    description: "収支管理・予算管理",
    icon: Wallet,
    url: "https://zaim.net",
    category: "生活便利",
    platforms: ["browser"],
    longDescription:
      "簡単な操作で収支を記録・管理できる家計簿ツール。グラフやレポートで支出傾向を分析可能。",
  },
  {
    id: "todo-list",
    title: "ToDoリスト",
    description: "タスク管理・リマインダー",
    icon: ListTodo,
    url: "https://todoist.com/ja",
    category: "生活便利",
    platforms: ["browser"],
    longDescription:
      "シンプルで使いやすいタスク管理ツール。期限設定、優先度管理、リマインダー機能を搭載。",
  },
  {
    id: "note-taking",
    title: "ノートツール",
    description: "メモ・ノート作成",
    icon: StickyNote,
    url: "https://evernote.com/ja-jp",
    category: "生活便利",
    platforms: ["browser"],
    longDescription:
      "メモやノートを作成・整理できるツール。テキスト、画像、ウェブクリップなど様々な情報を保存可能。",
  },
  {
    id: "text-checker",
    title: "文章校正ツール",
    description: "文章の校正・添削",
    icon: MessageSquare,
    url: "https://www.grammarly.com",
    category: "コミュニケーション",
    platforms: ["browser"],
    longDescription:
      "文章の誤字脱字チェックや表現の改善提案を行うツール。ビジネス文書や論文作成に便利。",
  },
  {
    id: "business-card",
    title: "名刺作成",
    description: "オリジナル名刺のデザイン",
    icon: PenTool,
    url: "https://www.canva.com/ja_jp/create/business-cards/",
    category: "コミュニケーション",
    platforms: ["browser"],
    longDescription:
      "プロフェッショナルな名刺をデザインできるツール。豊富なテンプレートとカスタマイズ機能を提供。",
  },
  {
    id: "tax-calculator",
    title: "消費税計算",
    description: "消費税の計算・内税外税変換",
    icon: CalcIcon,
    url: "https://keisan.casio.jp/exec/system/1161228975",
    category: "計算・換算",
    platforms: ["browser"],
    longDescription:
      "消費税の計算や内税・外税の変換を行えるツール。複数の税率に対応し、一括計算も可能。",
  },
  {
    id: "currency-converter",
    title: "通貨換算",
    description: "リアルタイムの為替レート換算",
    icon: DollarSign,
    url: "https://www.xe.com/ja/",
    category: "計算・換算",
    platforms: ["browser"],
    longDescription:
      "世界各国の通貨をリアルタイムのレートで換算できるツール。履歴グラフや通貨情報も確認可能。",
  },
];
