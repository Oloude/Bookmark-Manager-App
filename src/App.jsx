import { useEffect } from "react"
import useBookmarkManager from "./BookmarkState"
import Reset from "./components/auth/Reset";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const darkMode = useBookmarkManager(state => state.darkMode)

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode])
  return (
    <main className="bg-neutral100 dark:bg-neutral900D w-full min-h-screen flex font-manrope">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Navbar/>

      </div>
      
    </main>
  )
}

export default App