import { FaRegMoon } from "react-icons/fa6"
import { FiLogOut, FiSun } from "react-icons/fi"
import { PiPaletteBold } from "react-icons/pi"
import useBookmarkManager from "../BookmarkState"


function ProfileDropdown() {
    const darkMode = useBookmarkManager(state => state.darkMode);
    const toggleDarkMode = useBookmarkManager(state => state.toggleDarkMode);

  return (
    <div className="w-62 rounded-lg bg-neutral0 dark:bg-neutral600D border border-neutral100 dark:border-neutral500D shadow-profile absolute top-16 right-6 z-100">
        <div className="flex items-center px-4 py-3 border-b border-slate200 dark:border-neutral500D gap-3">
            <img src="/images/image-avatar.webp" alt="" className="w-10 h-10 rounded-full"/>
            <div>
                <h3 className="text-preset4s text-neutral900 dark:text-neutral0">Emily Carter</h3>
                <p className="text-preset4m text-neutral800 dark:text-neutral100D">emily101@email.com</p>
            </div>
        </div>
        <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <PiPaletteBold className="w-4 h-4 text-neutral800 dark:text-neutral100D"/>
                <h5 className="text-preset4m text-neutral800 dark:text-neutral100D">Theme</h5>
            </div>
            <button onClick={toggleDarkMode} className="bg-neutral100 dark:bg-neutral500D border border-neutral100 dark:border-neutral300D rounded-sm p-0.5 h-7.5 w-16 flex items-center">
                <span className={`px-2 py-1.5 rounded-sm ${darkMode ? 'bg-transparent': 'bg-neutral0 dark:bg-neutral600D'}`}><FiSun className="text-neutral900 dark:text-neutral0 w-3.5 h-3.5"/></span>
                <span className={`px-2 py-1.5 rounded-sm ${darkMode ? 'bg-neutral0 dark:bg-neutral600D': 'bg-transparent'}`}><FaRegMoon className="text-neutral900 dark:text-neutral0 w-3.5 h-3.5"/></span>
            </button>

        </div>
        <button className="border-t border-slate200 dark:border-neutral500D px-4 py-3 w-full">
            <button className="flex items-center gap-3 text-preset4m text-neutral800 dark:text-neutral100D">
                <FiLogOut className="w-4 h-4 text-neutral800 dark:text-neutral100D"/>
                Logout
            </button>
           
        </button>
    </div>
  )
}

export default ProfileDropdown