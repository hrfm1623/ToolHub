import React from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tool } from "../types/tool";
import { RootState } from "../store/store";
import { addFavorite, removeFavorite } from "../store/favoriteSlice";

interface ToolCardProps extends Tool {
  className?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  url,
  category,
  className = "",
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((tool) => tool.id === id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(
        addFavorite({ id, title, description, icon: Icon, url, category })
      );
    }
  };

  return (
    <Link
      to={`/tools/${id}`}
      className={`block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all ${className}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="w-10 h-10 text-indigo-600 dark:text-indigo-400">
            <Icon />
          </div>
          <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <button
          onClick={handleFavoriteClick}
          className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${
            isFavorite ? "text-yellow-500" : "text-gray-400 dark:text-gray-500"
          }`}
        >
          <Star
            className="w-5 h-5"
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
          {category}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
          onClick={(e) => e.stopPropagation()}
        >
          詳細を見る →
        </a>
      </div>
    </Link>
  );
};
