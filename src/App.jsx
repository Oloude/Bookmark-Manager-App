import { useEffect } from "react"
import useBookmarkManager from "./BookmarkState"
import Reset from "./components/auth/Reset";

function App() {
  const darkMode = useBookmarkManager(state => state.darkMode)

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode])
  return (
    <div className="bg-neutral100 dark:bg-neutral900D w-full min-h-screen flex font-manrope">
      <Reset/>
    </div>
  )
}

export default App