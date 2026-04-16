import { LuArrowDownUp } from "react-icons/lu"
import useBookmarkManager from "../BookmarkState";
import SortDropdown from "./SortDropdown";


function Header() {
  const isShowArchived = useBookmarkManager(state => state.isShowArchived);
  const isShowAll = useBookmarkManager(state => state.isShowAll);
  const toggleSortDropdown = useBookmarkManager(state => state.toggleSortDropdown);
  const showSortDropdown = useBookmarkManager(state => state.showSortDropdown);
  const selectedTag = useBookmarkManager(state => state.selectedTag );


  return (
    <header className="flex items-center gap-3 justify-between relative">
        <h1 className="text-preset2b text-neutral900 dark:text-neutral0 flex flex-col md:items-center gap-2 md:flex-row">
          {isShowArchived && 'Archived bookmarks'}
          {isShowAll && 'All bookmarks'}
          {selectedTag.length > 0 && <>Bookmarks tagged:<span>{selectedTag.join(', ')}</span></>}
        </h1>
        <button onClick={toggleSortDropdown} className="px-3 py-2.5 shrink-0 flex items-center gap-2.5 rounded-md border border-neutral400 dark:border-neutral400D bg-neutral0 dark:bg-neutral800D text-preset3m text-neutral900 dark:text-neutral0
        hover:outline-2 hover:outline-offset-2  hover:outline-teal700 dark:hover:outline-neutral100D focus:ouline-2 focus:outline-offset-2 focus:outline-teal700 dark:focus:outline-neutral100D">
          <LuArrowDownUp className="text-neutral900 dark:text-neutral0 w-5 h-5"/> Sort by</button>
        {showSortDropdown && <SortDropdown/>}
    </header>
  )
}

export default Header