import { create } from "zustand";
import data from "../src/data.json";

function getTags(bookmarks) {
  return bookmarks.map((bookmark) => [...bookmark.tags]);
}

const useBookmarkManager = create((set) => {
  const bookmarkData = data.bookmarks;

  return {
    bookmarkData,
    darkMode: false,
    isSidebarOpen: false,
    tags: getTags(bookmarkData),

    openSidebar: () => set({ isSidebarOpen: true }),
    closeSidebar: () => set({ isSidebarOpen: false }),
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  };
});
export default useBookmarkManager;
