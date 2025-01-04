import { useEffect, useState } from "react";
import { Search, Heart, Grid } from "lucide-react";
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
import { DraggableToolCard } from "./components/DraggableToolCard";
import { reorderFavorites } from "./store/favoriteSlice";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Logo } from "./components/Logo";

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
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  const {
    searchTerm,
    selectedCategory,
    selectedPlatforms,
    selectedDifficulty,
    priceRange,
    rating,
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

      // 難易度フィルター
      const matchesDifficulty =
        !selectedDifficulty ||
        (tool.difficulty && tool.difficulty === selectedDifficulty);

      // 価格フィルター
      const matchesPrice =
        (!priceRange.min && !priceRange.max) ||
        (tool.pricing &&
          tool.pricing.some(
            (plan) =>
              (!priceRange.min || plan.price >= priceRange.min) &&
              (!priceRange.max || plan.price <= priceRange.max)
          ));

      // 評価フィルター
      const matchesRating = !rating || (tool.rating && tool.rating >= rating);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPlatform &&
        matchesDifficulty &&
        matchesPrice &&
        matchesRating
      );
    })
    .sort((a, b) => {
      const ratingA = a.rating || 0;
      const ratingB = b.rating || 0;
      const downloadA = a.downloadCount || 0;
      const downloadB = b.downloadCount || 0;

      switch (sortBy) {
        case "rating":
          return sortOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
        case "downloadCount":
          return sortOrder === "asc"
            ? downloadA - downloadB
            : downloadB - downloadA;
        case "name":
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case "category":
          return sortOrder === "asc"
            ? a.category.localeCompare(b.category)
            : b.category.localeCompare(a.category);
        default:
          return 0;
      }
    });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(favorites);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(reorderFavorites(items));
  };

  return (
    <Router future={{ v7_startTransition: true }}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Logo />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <FilterPanel />
                  </div>
                  <div className="lg:col-span-3">
                    <div className="mb-8">
                      <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8">
                          <button
                            onClick={() => setActiveTab("all")}
                            className={`${
                              activeTab === "all"
                                ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300"
                            } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                          >
                            <Grid className="h-5 w-5 mr-2" />
                            すべてのツール
                            <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                              {filteredTools.length}
                            </span>
                          </button>
                          <button
                            onClick={() => setActiveTab("favorites")}
                            className={`${
                              activeTab === "favorites"
                                ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300"
                            } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                          >
                            <Heart className="h-5 w-5 mr-2" />
                            お気に入り
                            <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                              {favorites.length}
                            </span>
                          </button>
                        </nav>
                      </div>

                      <div className="mt-6">
                        <div className="relative mb-6">
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

                        {activeTab === "all" ? (
                          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                            {filteredTools.map((tool) => (
                              <ToolCard key={tool.id} {...tool} />
                            ))}
                          </div>
                        ) : (
                          <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="favorites">
                              {(provided) => (
                                <div
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                  className="space-y-6"
                                >
                                  {favorites.map((tool, index) => (
                                    <DraggableToolCard
                                      key={tool.id}
                                      tool={tool}
                                      index={index}
                                    />
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            }
          />
          <Route path="/tools/:id" element={<ToolDetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
