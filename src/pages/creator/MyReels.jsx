/**
 * MyReels.jsx
 *
 * Purpose: Creator's personal reels management page
 *
 * Features:
 * - Reels grid display with video thumbnails
 * - Upload new reels functionality
 * - Performance metrics for each reel
 * - Filtering and sorting options
 * - Dark theme with glassmorphism design
 *
 * Backend Integration:
 * - Fetch creator's uploaded reels
 * - Upload video files and metadata
 * - Track reel performance analytics
 * - Manage reel visibility and settings
 */

import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const MyReels = () => {
  const { user } = useAuth();
  const [reels, setReels] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [isUploading, setIsUploading] = useState(false);

  // Sample reels data (replace with API call)
  useEffect(() => {
    const sampleReels = [
      {
        id: 1,
        title: "Summer Fashion Haul",
        thumbnail:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
        views: 125340,
        likes: 8920,
        comments: 342,
        shares: 156,
        duration: "0:45",
        uploadDate: "2024-01-15",
        status: "published",
        engagement: 7.2,
      },
      {
        id: 2,
        title: "Skincare Routine Morning",
        thumbnail:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop",
        views: 89230,
        likes: 6150,
        comments: 278,
        shares: 89,
        duration: "1:12",
        uploadDate: "2024-01-12",
        status: "published",
        engagement: 6.9,
      },
      {
        id: 3,
        title: "Workout Motivation",
        thumbnail:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
        views: 67890,
        likes: 4320,
        comments: 189,
        shares: 67,
        duration: "0:38",
        uploadDate: "2024-01-10",
        status: "published",
        engagement: 6.4,
      },
      {
        id: 4,
        title: "Recipe Tutorial",
        thumbnail:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
        views: 45210,
        likes: 3890,
        comments: 156,
        shares: 45,
        duration: "2:15",
        uploadDate: "2024-01-08",
        status: "draft",
        engagement: 8.6,
      },
    ];
    setReels(sampleReels);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
        // Add new reel to the list (replace with actual API call)
        const newReel = {
          id: Date.now(),
          title: "New Upload",
          thumbnail:
            "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=600&fit=crop",
          views: 0,
          likes: 0,
          comments: 0,
          shares: 0,
          duration: "1:00",
          uploadDate: new Date().toISOString().split("T")[0],
          status: "processing",
          engagement: 0,
        };
        setReels((prev) => [newReel, ...prev]);
      }, 2000);
    }
  };

  const getFilteredReels = () => {
    let filtered = reels;

    if (selectedFilter !== "all") {
      filtered = filtered.filter((reel) => reel.status === selectedFilter);
    }

    // Sort reels
    switch (sortBy) {
      case "newest":
        return filtered.sort(
          (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate),
        );
      case "oldest":
        return filtered.sort(
          (a, b) => new Date(a.uploadDate) - new Date(b.uploadDate),
        );
      case "views":
        return filtered.sort((a, b) => b.views - a.views);
      case "engagement":
        return filtered.sort((a, b) => b.engagement - a.engagement);
      default:
        return filtered;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "text-green-400";
      case "draft":
        return "text-yellow-400";
      case "processing":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Reels
              </h1>
              <p className="text-gray-400 mt-2">
                Manage your content and track performance
              </p>
            </div>

            {/* Upload Button */}
            <div className="relative">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  isUploading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Upload Reel
                  </>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Reels", value: reels.length, icon: "📹" },
            {
              label: "Total Views",
              value: formatNumber(
                reels.reduce((sum, reel) => sum + reel.views, 0),
              ),
              icon: "👁️",
            },
            {
              label: "Total Likes",
              value: formatNumber(
                reels.reduce((sum, reel) => sum + reel.likes, 0),
              ),
              icon: "❤️",
            },
            {
              label: "Avg Engagement",
              value: `${(reels.reduce((sum, reel) => sum + reel.engagement, 0) / reels.length || 0).toFixed(1)}%`,
              icon: "📊",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {["all", "published", "draft", "processing"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400/50"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="views">Most Views</option>
            <option value="engagement">Best Engagement</option>
          </select>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getFilteredReels().map((reel) => (
            <div
              key={reel.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-lg text-xs font-medium">
                  {reel.duration}
                </div>

                {/* Status */}
                <div
                  className={`absolute top-3 right-3 ${getStatusColor(reel.status)} text-xs font-medium`}
                >
                  {reel.status.toUpperCase()}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2 line-clamp-2">
                  {reel.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Uploaded {new Date(reel.uploadDate).toLocaleDateString()}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center text-gray-400">
                    <span className="mr-1">👁️</span>
                    {formatNumber(reel.views)}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="mr-1">❤️</span>
                    {formatNumber(reel.likes)}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="mr-1">💬</span>
                    {formatNumber(reel.comments)}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="mr-1">📊</span>
                    {reel.engagement}%
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300">
                    Edit
                  </button>
                  <button className="flex-1 bg-gray-600/20 hover:bg-gray-600/30 text-gray-400 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300">
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredReels().length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No reels found
            </h3>
            <p className="text-gray-500 mb-6">
              {selectedFilter === "all"
                ? "Upload your first reel to get started"
                : `No reels with status "${selectedFilter}"`}
            </p>
            <label
              htmlFor="video-upload"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Upload Your First Reel
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReels;
