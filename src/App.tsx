import React, { useState } from "react";
import { Search, Wrench } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { ToolCard } from "./components/ToolCard";
import { ToolDetail } from "./components/ToolDetail";
import { tools } from "./data/tools";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Router>
      <Routes>
        <Route path="/tools/:id" element={<ToolDetailWrapper />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Wrench className="h-8 w-8 text-indigo-600" />
                      <h1 className="ml-3 text-2xl font-bold text-gray-900">
                        ToolBox
                      </h1>
                    </div>
                  </div>
                </div>
              </header>

              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search tools..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        !selectedCategory
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => setSelectedCategory("")}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          selectedCategory === category
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} {...tool} />
                  ))}
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
