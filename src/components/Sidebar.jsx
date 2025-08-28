import React, { useMemo, useState } from "react";
import { assets, dummyPlans } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import moment from "moment";

const Sidebar = () => {
  const {
    chats = [],
    setSelectedChat,
    selectedChat,
    theme,
    setTheme,
    navigate,
    user,
  } = useAppContext();
  const [search, setSearch] = useState("");

  // memoized filtered list
  const filteredChats = useMemo(() => {
    const q = (search || "").trim().toLowerCase();
    if (!q) return chats;
    return chats.filter((c) => (c.name || "").toLowerCase().includes(q));
  }, [chats, search]);

  const formatDate = (d) => {
    if (!d) return "";
    const date =
      typeof d === "number" || /^\d+$/.test(String(d).trim())
        ? new Date(Number(d))
        : new Date(String(d).trim());
    return isNaN(date) ? "" : date.toLocaleString();
  };

  return (
    <aside className="flex flex-col h-screen min-w-[18rem] max-w-[20rem] bg-gradient-to-br from-slate-50/95 via-white/95 to-blue-50/95 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 border-r border-slate-200/60 dark:border-slate-700/60 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full p-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-gradient-to-r from-blue-900 to-indigo-500 rounded-lg shadow-lg">
              <img
                src={assets.apnagpt}
                alt="Logo"
                className="w-8 h-8 object-contain filter brightness-90 invert"
              />
            </div>
            <div>
              <h1 className="text-base font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Assistant
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AI Powered
              </p>
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <button 
          onClick={() => {
            // Create new chat logic here
            const newChat = {
              _id: Date.now().toString(),
              name: "New Chat",
              messages: [],
              createdAt: new Date().toISOString()
            };
            setSelectedChat?.(newChat);
          }}
          className="group relative mb-4 p-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center gap-2">
            <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <span className="text-sm font-bold">+</span>
            </div>
            <span className="text-sm">New Chat</span>
          </div>
        </button>

        {/* Search */}
        <div className="relative mb-4 group">
          <input
            type="text"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-10 pr-4 bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-600/60 rounded-lg text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 shadow-md focus:shadow-lg focus:bg-white dark:focus:bg-slate-800 focus:border-blue-400/60 dark:focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors duration-300">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path
                d="M21 21l-4.35-4.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Chats list - Compact design */}
        <div className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar pr-1">
          {filteredChats?.length > 0 ? (
            filteredChats.map((chat, index) => {
              const lastMsg = chat.messages?.[chat.messages.length - 1] || null;
              const isSelected = selectedChat?._id === chat._id;
              const formattedDate = lastMsg?.createdAt
                ? moment(lastMsg.createdAt).fromNow()
                : chat.createdAt
                ? moment(chat.createdAt).fromNow()
                : null;

              return (
                <div
                  key={chat._id}
                  className={`group relative p-2.5 rounded-lg transition-all duration-200 cursor-pointer transform hover:scale-[1.01] border ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-300/50 dark:border-blue-600/50 shadow-md shadow-blue-500/10"
                      : "bg-white/40 dark:bg-slate-800/40 hover:bg-white/60 dark:hover:bg-slate-700/60 border-slate-200/30 dark:border-slate-600/30 hover:border-slate-300/50 dark:hover:border-slate-500/50 hover:shadow-sm"
                  }`}
                  onClick={() => setSelectedChat?.(chat)}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Chat Avatar - Smaller */}
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-semibold text-xs shadow-sm ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                          : "bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {(chat.name || "U").charAt(0).toUpperCase()}
                    </div>

                    {/* Chat Content - Compact */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3
                          className={`font-medium text-sm truncate ${
                            isSelected
                              ? "text-blue-800 dark:text-blue-200"
                              : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {chat.name || "Untitled Chat"}
                        </h3>

                        {formattedDate && (
                          <span
                            className={`text-xs flex-shrink-0 ml-2 ${
                              isSelected
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            {formattedDate}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 leading-relaxed">
                        {lastMsg?.text || (
                          <span className="italic text-slate-400 dark:text-slate-500">
                            {lastMsg
                              ? "No message content"
                              : "Start a new conversation"}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Delete Button - Smaller */}
                    <button
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-red-100 dark:hover:bg-red-900/40 text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: deleteChat(chat._id)
                      }}
                      title="Delete chat"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Selected indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r-full"></div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {search ? "No matching chats found" : "No conversations yet"}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                {search
                  ? "Try a different search term"
                  : "Start a new chat to get going"}
              </p>
            </div>
          )}
        </div>

        {/* Navigation Cards - More compact */}
        <div className="space-y-2.5 mt-4">
          {/* Community Images */}
          <div
            onClick={() => navigate?.("/community")}
            className="group relative p-3 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-violet-950/50 dark:via-purple-950/50 dark:to-indigo-950/50 border border-violet-200/50 dark:border-violet-700/50 rounded-lg cursor-pointer hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-violet-900/30 transition-all duration-300 overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate?.("/community")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <div className="p-1.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-md shadow-md group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-violet-800 dark:text-violet-200 group-hover:text-violet-900 dark:group-hover:text-violet-100">
                  Community Gallery
                </h3>
                <p className="text-xs text-violet-600 dark:text-violet-400">
                  Discover shared creations
                </p>
              </div>
              <div className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div
            onClick={() => navigate?.("/credits")}
            className="group relative p-3 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/50 dark:via-green-950/50 dark:to-teal-950/50 border border-emerald-200/50 dark:border-emerald-700/50 rounded-lg cursor-pointer hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-900/30 transition-all duration-300 overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate?.("/credits")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <div className="p-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-md shadow-md group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-emerald-800 dark:text-emerald-200 group-hover:text-emerald-900 dark:group-hover:text-emerald-100">
                    Credits
                  </h3>
                  <span className="px-1.5 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-md shadow-sm">
                    {user?.credits || 0}
                  </span>
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Manage your balance
                </p>
              </div>
              <div className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle - More compact */}
          <label className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors duration-200">
            <div className="relative">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme?.(theme === "dark" ? "light" : "dark")}
                className="sr-only peer"
                aria-label="Toggle dark mode"
              />

              {/* Track - smaller */}
              <div className="block w-12 h-6 rounded-full bg-gray-300 dark:bg-slate-600 peer-checked:bg-indigo-500 transition-colors duration-500"></div>

              {/* Thumb - smaller */}
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transform transition-all duration-500 
                ${
                  theme === "dark"
                    ? "translate-x-6 bg-indigo-200 shadow-lg shadow-indigo-400/50"
                    : ""
                }`}
              ></div>
            </div>

            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200 font-medium select-none">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </label>

          {/* User Account - Positioned better */}
          <div
            onClick={() => navigate?.("/account")}
            className="p-3 bg-gradient-to-r from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-700/50 border border-slate-200/50 dark:border-slate-600/50 rounded-lg cursor-pointer hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-slate-900/20 transition-all duration-300 flex items-center gap-3"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate?.("/account")}
          >
            <div className="p-1.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-md shadow-md">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                User Account
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Profile & Settings
              </p>
            </div>
            <div className="opacity-50 transition-all duration-300">
              <svg
                className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(99, 102, 241, 0.8) 0%,
            rgba(59, 130, 246, 0.8) 100%
          );
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(99, 102, 241, 1) 0%,
            rgba(59, 130, 246, 1) 100%
          );
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transform,
          .hover\\:scale-\\[1\\.01\\],
          .hover\\:scale-105,
          .hover\\:-translate-y-0\\.5,
          .hover\\:translate-x-0\\.5,
          .hover\\:rotate-90 {
            transition: none !important;
            transform: none !important;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group:nth-child(n) {
          animation: fadeInUp 0.2s ease-out forwards;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;