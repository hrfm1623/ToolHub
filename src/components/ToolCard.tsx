import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Info, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addFavorite, removeFavorite } from "../store/favoriteSlice";
import { Tool } from "../types/tool";

export const ToolCard: React.FC<Tool> = (tool) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.tools);
  const isFavorite = favorites.some((favTool) => favTool.id === tool.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(tool.id));
    } else {
      dispatch(addFavorite(tool));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 text-indigo-600 dark:text-indigo-400">
            <tool.icon />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {tool.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tool.description}
            </p>
          </div>
        </div>
        <button
          onClick={handleFavoriteClick}
          className={`p-2 rounded-full ${
            isFavorite
              ? "text-red-500 dark:text-red-400"
              : "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
          }`}
        >
          <Heart className={isFavorite ? "fill-current" : ""} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tool.platforms?.map((platform) => (
          <span
            key={platform}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
          >
            {platform}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between space-x-4">
        <Link
          to={`/tools/${tool.id}`}
          className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <Info className="h-4 w-4 mr-1" />
          詳細を見る
        </Link>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          開く
        </a>
      </div>
    </div>
  );
};
