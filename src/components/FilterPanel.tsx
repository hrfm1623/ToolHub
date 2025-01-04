import React from "react";
import { SortAsc, SortDesc, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  togglePlatform,
  setDifficulty,
  setPriceRange,
  setRating,
  setSortBy,
  setSortOrder,
  resetFilters,
  FilterState,
} from "../store/filterSlice";
import { Platform, Difficulty } from "../types/tool";

const platforms: { value: Platform; label: string }[] = [
  { value: "windows", label: "Windows" },
  { value: "mac", label: "Mac" },
  { value: "browser", label: "ブラウザ" },
  { value: "android", label: "Android" },
  { value: "ios", label: "iOS" },
];

const difficulties: { value: Difficulty; label: string }[] = [
  { value: "beginner", label: "初心者向け" },
  { value: "intermediate", label: "中級者向け" },
  { value: "advanced", label: "上級者向け" },
];

export const FilterPanel: React.FC = () => {
  const dispatch = useDispatch();
  const {
    selectedPlatforms,
    selectedDifficulty,
    priceRange,
    rating,
    sortBy,
    sortOrder,
  } = useSelector((state: RootState) => state.filter);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          フィルター
        </h2>
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          リセット
        </button>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          対応プラットフォーム
        </h3>
        <div className="space-y-2">
          {platforms.map(({ value, label }) => (
            <label key={value} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedPlatforms.includes(value)}
                onChange={() => dispatch(togglePlatform(value))}
                className="rounded border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          難易度
        </h3>
        <div className="space-y-2">
          {difficulties.map(({ value, label }) => (
            <label key={value} className="flex items-center">
              <input
                type="radio"
                checked={selectedDifficulty === value}
                onChange={() => dispatch(setDifficulty(value))}
                name="difficulty"
                className="rounded-full border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          価格帯
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
              最小
            </label>
            <input
              type="number"
              min="0"
              value={priceRange.min || ""}
              onChange={(e) =>
                dispatch(
                  setPriceRange({
                    ...priceRange,
                    min: e.target.value ? Number(e.target.value) : null,
                  })
                )
              }
              className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
              最大
            </label>
            <input
              type="number"
              min="0"
              value={priceRange.max || ""}
              onChange={(e) =>
                dispatch(
                  setPriceRange({
                    ...priceRange,
                    max: e.target.value ? Number(e.target.value) : null,
                  })
                )
              }
              className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          評価
        </h3>
        <div className="flex items-center space-x-2">
          {[5, 4, 3, 2, 1].map((value) => (
            <button
              key={value}
              onClick={() =>
                dispatch(setRating(rating === value ? null : value))
              }
              className={`p-2 rounded-md ${
                rating === value
                  ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              <Star
                className={`h-5 w-5 ${
                  rating === value ? "fill-current" : "stroke-current"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          並び替え
        </h3>
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) =>
              dispatch(setSortBy(e.target.value as FilterState["sortBy"]))
            }
            className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-indigo-500 dark:focus:ring-indigo-400"
          >
            <option value="rating">評価</option>
            <option value="downloadCount">人気</option>
            <option value="name">名前</option>
            <option value="category">カテゴリ</option>
          </select>
          <button
            onClick={() =>
              dispatch(setSortOrder(sortOrder === "asc" ? "desc" : "asc"))
            }
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {sortOrder === "asc" ? (
              <SortAsc className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <SortDesc className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
