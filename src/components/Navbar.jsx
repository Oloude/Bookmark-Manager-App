import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import useBookmarkManager from "../BookmarkState";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
    const openSidebar = useBookmarkManager(state => state.openSidebar);
    const showProfileDropdown = useBookmarkManager(state => state.showProfileDropdown);
    const toggleProfileDropdown = useBookmarkManager(state => state.toggleProfileDropdown);
    
  return (
    <nav className="px-4 py-3 bg-neutral0 dark:bg-neutral800D border-b border-neutral300 dark:border-neutral500D flex justify-between items-center gap-3 md:px-8 md:py-4 fixed w-full lg:w-auto lg:left-74 lg:right-0">
        <div className="flex items-center gap-2.5">
            <button onClick={openSidebar} className="border border-neutral400 dark:border-neutral400D bg-neutral0 dark:bg-neutral800D p-2.5 rounded-md lg:hidden"><IoIosMenu className="w-5 h-5 text-neutral900 dark:text-neutral0"/></button>
            <div className="border border-neutral400 dark:border-neutral500D dark:bg-neutral600D rounded-md flex items-center gap-2 p-2.5 max-w-80">
                <FiSearch className="w-5 h-5 text-neutral800 shrink-0 dark:text-neutral100D"/>
                <input type="search" name="" id="" className="w-full text-preset4m text-neutral800 dark:text-neutral100D" placeholder="Search by title..." />

            </div>

        </div>
        <div className="flex items-center gap-2.5">
            <button className="shrink-0 px-2.5 py-2.5 bg-teal700 rounded-lg border-image inset-shadow-input flex items-center justify-center gap-1 text-preset3m text-neutral0">
                <FaPlus className="text-neutral0 w-4 h-4"/> <span className="hidden md:inline">Add Bookmark</span></button>
            <button onClick={toggleProfileDropdown} className="shrink-0 cursor-pointer rounded-full hover:outline-2 hover:outline-offset-2  hover:outline-teal700 dark:hover:outline-neutral100D focus:ouline-2 focus:outline-offset-2 focus:outline-teal700 dark:focus:outline-neutral100D"><img src="/images/image-avatar.webp" alt="" className="w-10 h-10 rounded-full"/></button>
        </div>
        {showProfileDropdown && <ProfileDropdown/>}
    </nav>
  )
}

export default Navbar