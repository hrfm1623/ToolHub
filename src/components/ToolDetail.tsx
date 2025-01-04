import React from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Book,
  Copy,
  Check,
} from "lucide-react";
import { Tool, Tutorial, PricingPlan } from "../types/tool";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ToolDetailProps {
  tool: Tool;
  relatedTools?: Tool[];
  alternativeTools?: Tool[];
}

export const ToolDetail: React.FC<ToolDetailProps> = ({
  tool,
  relatedTools = [],
  alternativeTools = [],
}) => {
  const navigate = useNavigate();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const handleCopyCommand = (command: string, type: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(type);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const renderTutorials = (tutorials: Tutorial[]) => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">チュートリアル・使用例</h3>
      <div className="grid gap-4">
        {tutorials.map((tutorial) => (
          <a
            key={tutorial.url}
            href={tutorial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{tutorial.title}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {tutorial.description}
                </p>
              </div>
              <span className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
                {tutorial.type}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderPricing = (pricing: PricingPlan[]) => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">料金プラン</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricing.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow p-6">
            <h4 className="text-lg font-medium text-gray-900">{plan.name}</h4>
            <div className="mt-4">
              <span className="text-3xl font-bold text-gray-900">
                {plan.price === 0 ? "無料" : `${plan.price}${plan.currency}`}
              </span>
              {plan.billingPeriod !== "one-time" && (
                <span className="text-gray-500">
                  /{plan.billingPeriod === "monthly" ? "月" : "年"}
                </span>
              )}
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInstallCommands = (
    commands: NonNullable<Tool["installCommands"]>
  ) => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">インストール方法</h3>
      <div className="space-y-4">
        {Object.entries(commands).map(([type, command]) => (
          <div key={type} className="relative">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between text-white">
                <span className="text-sm font-mono">{command}</span>
                <button
                  onClick={() => handleCopyCommand(command, type)}
                  className="ml-4 p-2 hover:bg-gray-700 rounded"
                >
                  {copiedCommand === type ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <span className="absolute -top-3 left-4 px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          戻る
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 text-indigo-600">
                <tool.icon />
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {tool.title}
                </h1>
                <div className="flex items-center mt-2 space-x-4">
                  {tool.githubUrl && (
                    <a
                      href={tool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      GitHub
                    </a>
                  )}
                  {tool.documentationUrl && (
                    <a
                      href={tool.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Book className="h-5 w-5 mr-1" />
                      ドキュメント
                    </a>
                  )}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    公式サイト
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 prose prose-indigo max-w-none">
            <p className="text-gray-600">
              {tool.longDescription || tool.description}
            </p>
          </div>

          {tool.platforms && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                対応プラットフォーム
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {tool.languages && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                対応言語
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )}

          {tool.tutorials && renderTutorials(tool.tutorials)}
          {tool.pricing && renderPricing(tool.pricing)}
          {tool.installCommands && renderInstallCommands(tool.installCommands)}

          {(relatedTools.length > 0 || alternativeTools.length > 0) && (
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {relatedTools.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">関連ツール</h3>
                  <div className="space-y-4">
                    {relatedTools.map((relatedTool) => (
                      <button
                        key={relatedTool.id}
                        onClick={() => navigate(`/tools/${relatedTool.id}`)}
                        className="block w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 text-indigo-600">
                            <relatedTool.icon />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">
                              {relatedTool.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {relatedTool.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {alternativeTools.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">代替ツール</h3>
                  <div className="space-y-4">
                    {alternativeTools.map((altTool) => (
                      <button
                        key={altTool.id}
                        onClick={() => navigate(`/tools/${altTool.id}`)}
                        className="block w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 text-indigo-600">
                            <altTool.icon />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">
                              {altTool.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {altTool.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
