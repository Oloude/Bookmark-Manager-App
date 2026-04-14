import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <nav className="px-4 py-3 bg-neutral0 border-b border-neutral300 flex justify-between items-center gap-3 lg:fixed w-full">
        <div className="flex items-center gap-2.5">
            <button className="border border-neutral400 bg-neutral0 p-2.5 rounded-md lg:hidden"><IoIosMenu className="w-5 h-5 text-neutral900"/></button>
            <div className="border border-neutral400 rounded-md flex items-center gap-2 p-2.5 max-w-80">
                <FiSearch className="w-5 h-5 text-neutral800 shrink-0"/>
                <input type="search" name="" id="" className="w-full text-preset4m text-neutral800" placeholder="Search by title..." />

            </div>

        </div>
        <div className="flex items-center gap-2.5">
            <button className="shrink-0 px-2.5 py-2.5 bg-teal700 rounded-lg border-image inset-shadow-input flex items-center justify-center gap-1 text-preset3m text-neutral0">
                <FaPlus className="text-neutral0 w-4 h-4"/> <span className="hidden md:inline">Add Bookmark</span></button>
            <button className="shrink-0"><img src="/images/image-avatar.webp" alt="" className="w-10 h-10 rounded-full"/></button>
        </div>
    </nav>
  )
}

export default Navbar