import { FaCheck } from "react-icons/fa6"
import useBookmarkManager from "../BookmarkState"

const sortBy = ['Recently added', 'Recently visited', 'Most visited']

function SortDropdown() {
    const handleSortChange = useBookmarkManager(state => state.handleSortChange);
    const sort = useBookmarkManager(state => state.sort);

  return (
    <div className="w-50 rounded-lg bg-neutral0 dark:bg-neutral600D border border-neutral100 dark:border-neutral500D p-2 shadow-profile absolute top-13 right-0 z-50">
        {sortBy.map(item => <button onClick={()=> handleSortChange(item)} key={item} className="p-2 flex items-center gap-2 justify-between text-neutral800 dark:text-neutral100D text-preset4m w-full">{item} {sort === item && <FaCheck className="w-4 h-4 text-neutral800 dark:text-neutral100D"/>}</button>)} 
    </div>
  )
}

export default SortDropdown