import { LuArrowDownUp } from "react-icons/lu"


function Header() {
  return (
    <header className="flex items-center gap-3 justify-between">
        <h1 className="text-preset2b text-neutral900 dark:text-neutral0">All bookmarks</h1>
        <button className="px-3 py-2.5 flex items-center gap-2.5 rounded-md border border-neutral400 dark:border-neutral400D bg-neutral0 dark:bg-neutral800D text-preset3m text-neutral900 dark:text-neutral0"><LuArrowDownUp className="text-neutral900 dark:text-neutral0 w-5 h-5"/> Sort by</button>
    </header>
  )
}

export default Header