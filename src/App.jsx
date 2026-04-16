import { useEffect } from "react"
import useBookmarkManager from "./BookmarkState"
import Reset from "./components/auth/Reset";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SidebarSmall from "./components/SideBarSmall";
import Header from "./components/Header";
import Bookmarks from "./components/Bookmarks";
import DeleteModal from "./components/DeleteModal";
import UnarchiveModal from "./components/UnarchiveModal";
import ArchiveModal from "./components/ArchiveModal";
import AddBookmarkModal from "./components/AddBookmarkModal";
import EditBookmarkModal from "./components/EditBookmarkModal";

function App() {
  const darkMode = useBookmarkManager(state => state.darkMode);
  const isSidebarOpen = useBookmarkManager(state => state.isSidebarOpen);

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode])

  return (
    <main className="bg-neutral100 dark:bg-neutral900D w-full min-h-screen flex font-manrope">
      {isSidebarOpen && <SidebarSmall/>}
      <EditBookmarkModal/>
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Navbar/>
        <div className="flex flex-col gap-5 px-4 pt-6 pb-16 md:px-8 md:pt-8 md:mt-17 lg:ml-74 lg:mt-15">
          <Header/>
          <Bookmarks/>
        </div>


      </div>
      
    </main>
  )
}

export default App