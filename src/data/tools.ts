import { 
  Image, 
  FileText, 
  Calculator, 
  Clock, 
  Calendar,
  QrCode,
  Hash,
  Type,
  Palette
} from 'lucide-react';

export const tools = [
  {
    title: 'Image Optimizer',
    description: 'Compress and optimize your images without quality loss',
    icon: Image,
    url: 'https://squoosh.app',
    category: 'Images'
  },
  {
    title: 'JSON Formatter',
    description: 'Format and validate JSON data with syntax highlighting',
    icon: FileText,
    url: 'https://jsonformatter.org',
    category: 'Development'
  },
  {
    title: 'Unit Converter',
    description: 'Convert between different units of measurement',
    icon: Calculator,
    url: 'https://unitconverters.net',
    category: 'Utilities'
  },
  {
    title: 'World Clock',
    description: 'Check time across different time zones',
    icon: Clock,
    url: 'https://worldtimebuddy.com',
    category: 'Time'
  },
  {
    title: 'Date Calculator',
    description: 'Calculate dates, duration between dates, and more',
    icon: Calendar,
    url: 'https://timeanddate.com/date/duration.html',
    category: 'Time'
  },
  {
    title: 'QR Code Generator',
    description: 'Create QR codes for URLs, text, and more',
    icon: QrCode,
    url: 'https://qr-code-generator.com',
    category: 'Utilities'
  },
  {
    title: 'Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256 hashes',
    icon: Hash,
    url: 'https://passwordsgenerator.net/sha256-hash-generator',
    category: 'Development'
  },
  {
    title: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for designs',
    icon: Type,
    url: 'https://loremipsum.io',
    category: 'Content'
  },
  {
    title: 'Color Palette Generator',
    description: 'Create beautiful color schemes for your projects',
    icon: Palette,
    url: 'https://coolors.co',
    category: 'Design'
  }
];