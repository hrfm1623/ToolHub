import React, { useEffect } from "react";
import { Search, Wrench } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToolCard } from "./components/ToolCard";
import { ToolDetail } from "./components/ToolDetail";
import { ThemeToggle } from "./components/ThemeToggle";
import { FilterPanel } from "./components/FilterPanel";
import { tools } from "./data/tools";
import { RootState } from "./store/store";
import { setSearchTerm } from "./store/filterSlice";

const ToolDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find((t) => t.id === id);
  if (!tool) return <div>ツールが見つかりません</div>;

  const relatedTools = tool.relatedTools
    ? tools.filter((t) => tool.relatedTools?.includes(t.id))
    : [];
  const alternativeTools = tool.alternativeTools
    ? tools.filter((t) => tool.alternativeTools?.includes(t.id))
    : [];

  return (
    <ToolDetail
      tool={tool}
      relatedTools={relatedTools}
      alternativeTools={alternativeTools}
    />
  );
};

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const favorites = useSelector((state: RootState) => state.favorites.tools);
  const {
    searchTerm,
    selectedCategory,
    selectedPlatforms,
    selectedLanguages,
    priceRange,
    sortBy,
    sortOrder,
  } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const filteredTools = tools
    .filter((tool) => {
      // テキスト検索
      const matchesSearch =
        tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());

      // カテゴリフィルター
      const matchesCategory =
        !selectedCategory || tool.category === selectedCategory;

      // プラットフォームフィルター
      const matchesPlatform =
        selectedPlatforms.length === 0 ||
        (tool.platforms &&
          tool.platforms.some((platform) =>
            selectedPlatforms.includes(platform)
          ));

      // 言語フィルター
      const matchesLanguage =
        selectedLanguages.length === 0 ||
        (tool.languages &&
          tool.languages.some((language) =>
            selectedLanguages.includes(language)
          ));

      // 価格フィルター
      const matchesPrice =
        (!priceRange.min && !priceRange.max) ||
        (tool.pricing &&
          tool.pricing.some(
            (plan) =>
              (!priceRange.min || plan.price >= priceRange.min) &&
              (!priceRange.max || plan.price <= priceRange.max)
          ));

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPlatform &&
        matchesLanguage &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "name":
          comparison = a.title.localeCompare(b.title);
          break;
        case "category":
          comparison = a.category.localeCompare(b.category);
          break;
        case "platform":
          comparison = (a.platforms?.[0] || "").localeCompare(
            b.platforms?.[0] || ""
          );
          break;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

  return (
    <Router>
      <Routes>
        <Route path="/tools/:id" element={<ToolDetailWrapper />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Wrench className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                      <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                        ToolBox
                      </h1>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>
              </header>

              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <FilterPanel />
                  </div>
                  <div className="lg:col-span-3">
                    {favorites.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          お気に入り
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {favorites.map((tool) => (
                            <ToolCard key={tool.id} {...tool} />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                          すべてのツール
                        </h2>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {filteredTools.length}件
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                        <input
                          type="text"
                          placeholder="ツールを検索..."
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 sm:text-sm transition-colors"
                          value={searchTerm}
                          onChange={(e) =>
                            dispatch(setSearchTerm(e.target.value))
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredTools.map((tool) => (
                        <ToolCard key={tool.id} {...tool} />
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
