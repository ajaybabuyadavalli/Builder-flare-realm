/**
 * CreatorProfile.jsx
 *
 * Purpose: Comprehensive profile management with portfolio showcase and brand testimonials
 *
 * Features:
 * - Profile card with photo upload and privacy toggle
 * - Editable panels for platforms, languages, categories
 * - Content portfolio grid with video previews
 * - Brand testimonials carousel
 * - Public/private profile preview
 * - Request review functionality
 * - Social media link management
 *
 * Backend Integration:
 * - Profile data updates
 * - Media upload handling
 * - Portfolio content management
 * - Testimonial collection system
 */

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

const CreatorProfile = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [previewMode, setPreviewMode] = useState("brand");
  const [profileData, setProfileData] = useState({
    name: "Ajay Kumar",
    bio: "Fashion & Lifestyle Content Creator | Inspiring millions with authentic style",
    location: "Mumbai, India",
    email: "ajay@example.com",
    phone: "+91 9876543210",
    isPublic: true,
    profilePhoto: null,
    coverPhoto: null,
    socialLinks: {
      instagram: "https://instagram.com/ajaykumar",
      youtube: "https://youtube.com/ajaykumar",
      tiktok: "https://tiktok.com/@ajaykumar",
      website: "https://ajaykumar.in",
    },
  });
  const [platforms, setPlatforms] = useState([
    {
      name: "Instagram",
      handle: "@ajaykumar",
      followers: "125K",
      verified: true,
    },
    { name: "YouTube", handle: "Ajay Kumar", followers: "89K", verified: true },
    { name: "TikTok", handle: "@ajaykumar", followers: "67K", verified: false },
  ]);
  const [languages, setLanguages] = useState(["English", "Hindi", "Marathi"]);
  const [categories, setCategories] = useState([
    "Fashion",
    "Lifestyle",
    "Travel",
    "Beauty",
  ]);
  const [portfolio, setPortfolio] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const fileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  // Sample portfolio data
  useEffect(() => {
    const samplePortfolio = [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
        platform: "Instagram",
        views: 125000,
        likes: 8920,
        comments: 342,
        title: "Summer Fashion Haul",
      },
      {
        id: 2,
        type: "video",
        url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop",
        platform: "YouTube",
        views: 89000,
        likes: 6150,
        comments: 278,
        title: "Skincare Routine",
      },
      {
        id: 3,
        type: "image",
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
        platform: "Instagram",
        views: 67890,
        likes: 4320,
        comments: 189,
        title: "Workout Motivation",
      },
      {
        id: 4,
        type: "video",
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
        platform: "TikTok",
        views: 45210,
        likes: 3890,
        comments: 156,
        title: "Recipe Tutorial",
      },
      {
        id: 5,
        type: "image",
        url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=600&fit=crop",
        platform: "Instagram",
        views: 78340,
        likes: 5890,
        comments: 234,
        title: "Travel Vlog",
      },
      {
        id: 6,
        type: "video",
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop",
        platform: "YouTube",
        views: 92150,
        likes: 7230,
        comments: 456,
        title: "Product Review",
      },
    ];
    setPortfolio(samplePortfolio);
  }, []);

  // Sample testimonials data
  useEffect(() => {
    const sampleTestimonials = [
      {
        id: 1,
        brandName: "StyleCo",
        campaign: "Summer Collection Launch",
        quote:
          "Ajay's content perfectly captured our brand aesthetic. The engagement rates exceeded our expectations by 40%!",
        rating: 5,
        brandLogo:
          "https://ui-avatars.com/api/?name=StyleCo&background=7c3aed&color=fff",
      },
      {
        id: 2,
        brandName: "FitTech",
        campaign: "App Promotion Campaign",
        quote:
          "Professional, creative, and delivers on time. Ajay's authentic approach made our app launch a huge success.",
        rating: 5,
        brandLogo:
          "https://ui-avatars.com/api/?name=FitTech&background=059669&color=fff",
      },
      {
        id: 3,
        brandName: "GlowBeauty",
        campaign: "Skincare Product Review",
        quote:
          "The 30-day skincare journey content was incredible. Ajay's honesty and detailed reviews built real trust with our audience.",
        rating: 5,
        brandLogo:
          "https://ui-avatars.com/api/?name=GlowBeauty&background=dc2626&color=fff",
      },
    ];
    setTestimonials(sampleTestimonials);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePhotoUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          [type]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addPlatform = () => {
    setPlatforms((prev) => [
      ...prev,
      { name: "", handle: "", followers: "", verified: false },
    ]);
  };

  const updatePlatform = (index, field, value) => {
    setPlatforms((prev) =>
      prev.map((platform, i) =>
        i === index ? { ...platform, [field]: value } : platform,
      ),
    );
  };

  const removePlatform = (index) => {
    setPlatforms((prev) => prev.filter((_, i) => i !== index));
  };

  const addLanguage = (language) => {
    if (language && !languages.includes(language)) {
      setLanguages((prev) => [...prev, language]);
    }
  };

  const removeLanguage = (language) => {
    setLanguages((prev) => prev.filter((l) => l !== language));
  };

  const addCategory = (category) => {
    if (category && !categories.includes(category)) {
      setCategories((prev) => [...prev, category]);
    }
  };

  const removeCategory = (category) => {
    setCategories((prev) => prev.filter((c) => c !== category));
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return "📷";
      case "youtube":
        return "📺";
      case "tiktok":
        return "🎵";
      case "facebook":
        return "📘";
      case "twitter":
        return "🐦";
      default:
        return "📱";
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-600"}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              👤 Creator Profile
            </h1>
            <p className="text-xl text-gray-400">
              Manage your profile and showcase your work
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-6 lg:mt-0">
            {/* Preview Mode Toggle */}
            <div className="flex bg-gray-800/50 rounded-xl p-1">
              <button
                onClick={() => setPreviewMode("brand")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  previewMode === "brand"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Brand View
              </button>
              <button
                onClick={() => setPreviewMode("public")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  previewMode === "public"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Public View
              </button>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 mb-8 relative overflow-hidden">
          {/* Cover Photo */}
          <div className="absolute inset-0">
            {profileData.coverPhoto ? (
              <img
                src={profileData.coverPhoto}
                alt="Cover"
                className="w-full h-full object-cover opacity-20"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            )}
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Profile Photo */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                  {profileData.profilePhoto ? (
                    <img
                      src={profileData.profilePhoto}
                      alt={profileData.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
                      {profileData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>

                {isEditing && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4"
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
                  </button>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handlePhotoUpload(e, "profilePhoto")}
                  className="hidden"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="text-3xl font-bold bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-purple-400"
                      />
                    ) : (
                      <h2 className="text-3xl font-bold text-white">
                        {profileData.name}
                      </h2>
                    )}
                    <div className="flex items-center space-x-3 mt-2">
                      <span className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-400 px-3 py-1 rounded-xl font-semibold border border-yellow-400/30">
                        🏆 Gold Creator
                      </span>
                      <span className="text-purple-400 font-semibold">
                        Score: 84/100
                      </span>
                    </div>
                  </div>

                  {/* Privacy Toggle */}
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">Private</span>
                    <button
                      onClick={() =>
                        setProfileData((prev) => ({
                          ...prev,
                          isPublic: !prev.isPublic,
                        }))
                      }
                      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                        profileData.isPublic ? "bg-green-600" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                          profileData.isPublic
                            ? "translate-x-7"
                            : "translate-x-1"
                        }`}
                      ></div>
                    </button>
                    <span className="text-gray-400">Public</span>
                  </div>
                </div>

                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        bio: e.target.value,
                      }))
                    }
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 resize-none"
                    rows="3"
                    placeholder="Tell brands about yourself..."
                  />
                ) : (
                  <p className="text-gray-300 text-lg mb-4">
                    {profileData.bio}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 text-gray-400">
                  <span className="flex items-center">
                    📍 {profileData.location}
                  </span>
                  <span className="flex items-center">
                    📧 {profileData.email}
                  </span>
                  <span className="flex items-center">
                    📱 {profileData.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editable Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Platforms */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">📱 Platforms</h3>
              {isEditing && (
                <button
                  onClick={addPlatform}
                  className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 p-2 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
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
                </button>
              )}
            </div>

            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">
                      {getPlatformIcon(platform.name)}
                    </span>
                    <div>
                      {isEditing ? (
                        <div className="space-y-1">
                          <input
                            type="text"
                            value={platform.name}
                            onChange={(e) =>
                              updatePlatform(index, "name", e.target.value)
                            }
                            className="bg-gray-800/50 border border-gray-600/50 rounded px-2 py-1 text-white text-sm"
                            placeholder="Platform name"
                          />
                          <input
                            type="text"
                            value={platform.handle}
                            onChange={(e) =>
                              updatePlatform(index, "handle", e.target.value)
                            }
                            className="bg-gray-800/50 border border-gray-600/50 rounded px-2 py-1 text-white text-sm"
                            placeholder="Handle"
                          />
                        </div>
                      ) : (
                        <>
                          <p className="text-white font-medium">
                            {platform.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {platform.handle}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-purple-400 font-bold">
                      {platform.followers}
                    </p>
                    <div className="flex items-center space-x-1">
                      {platform.verified && (
                        <span className="text-blue-400">✓</span>
                      )}
                      {isEditing && (
                        <button
                          onClick={() => removePlatform(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold mb-6">🗣️ Languages</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {languages.map((language) => (
                <span
                  key={language}
                  className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30 flex items-center space-x-2"
                >
                  <span>{language}</span>
                  {isEditing && (
                    <button
                      onClick={() => removeLanguage(language)}
                      className="text-blue-300 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditing && (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add language..."
                  className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addLanguage(e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold mb-6">🏷️ Categories</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <span
                  key={category}
                  className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-400/30 flex items-center space-x-2"
                >
                  <span>{category}</span>
                  {isEditing && (
                    <button
                      onClick={() => removeCategory(category)}
                      className="text-purple-300 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </span>
              ))}
            </div>

            {isEditing && (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add category..."
                  className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addCategory(e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Content Portfolio */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-8">
          <h3 className="text-xl font-bold mb-6">📸 Content Portfolio</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Play button for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Platform badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 text-white px-2 py-1 rounded-lg text-xs font-medium">
                      {getPlatformIcon(item.platform)} {item.platform}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>👁️ {formatNumber(item.views)}</span>
                    <span>❤️ {formatNumber(item.likes)}</span>
                    <span>💬 {formatNumber(item.comments)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">✨ Brand Testimonials</h3>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
              Request Review
            </button>
          </div>

          {testimonials.length > 0 && (
            <div className="relative">
              <div className="bg-gray-800/30 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonials[currentTestimonial].brandLogo}
                    alt={testimonials[currentTestimonial].brandName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-white">
                      {testimonials[currentTestimonial].brandName}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].campaign}
                    </p>
                  </div>
                </div>

                <blockquote className="text-gray-300 italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentTestimonial
                            ? "bg-purple-400"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
