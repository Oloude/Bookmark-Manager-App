import { RiHome6Line } from "react-icons/ri"
import useBookmarkManager from "../BookmarkState"
import { HiOutlineArchiveBox } from "react-icons/hi2"
import { MdClose } from "react-icons/md"
import frequencyCount from "../utils/frequencyCount"

function SidebarSmall() {
    const darkMode = useBookmarkManager(state => state.darkMode);
    const closeSidebar = useBookmarkManager(state => state.closeSidebar);
    const tags = useBookmarkManager(state => state.tags);
    const showArchived = useBookmarkManager(state => state.showArchived);
    const showAll = useBookmarkManager(state => state.showAll);
    const isShowArchived = useBookmarkManager(state => state.isShowArchived);
    const isShowAll = useBookmarkManager(state => state.isShowAll);

    const tagCount = Object.entries(frequencyCount(tags.flat()));

  return (
    <div className="w-full bg-overlay/70 dark:bg-neutral900D/60 min-h-screen h-screen  fixed  top-0 left-0 z-60  lg:hidden">
    <div className='flex flex-col w-74 bg-neutral0 dark:bg-neutral800D border border-neutral300 dark:border-neutral500D gap-4 h-full relative overflow-y-auto'>
        <button onClick={closeSidebar} className="cursor-pointer w-8 h-8 absolute top-1 right-2  flex items-center justify-center"><MdClose className="w-5 h-5 text-neutral900 dark:text-neutral0"/></button>
        <header className="px-5 pt-5 pb-2.5"><img src={darkMode ? 'images/logo-dark-theme.svg' :"/images/logo-light-theme.svg"} alt="" /></header>
        <section className="px-4 pb-5 flex flex-col gap-4">
            <div className="flex flex-col w-full">
                <button onClick={showAll} className={`flex items-center gap-3 rounded-md px-3 py-2 my-0.5 ${isShowAll ?  'border-neutral100 dark:text-neutral0 dark:border-neutral500D bg-neutral100 dark:bg-neutral500D text-neutral900' : 'border-transparent text-neutral800 dark:text-neutral100D' } border  text-preset3m `}><RiHome6Line className={`w-5 h-5 dark:text-neutral0 ${isShowAll ? 'text-neutral900' : 'text-neutral800'}`}/> Home</button>
                <button onClick={showArchived} className={`flex items-center gap-3 rounded-md px-3 py-2 my-0.5 border  text-preset3m ${isShowArchived ? 'border-neutral100 dark:text-neutral0 dark:border-neutral500D bg-neutral100 dark:bg-neutral500D text-neutral900' : 'border-transparent text-neutral800 dark:text-neutral100D' }`}><HiOutlineArchiveBox className={`w-5 h-5 dark:text-neutral0 ${isShowArchived ? 'text-neutral900' : 'text-neutral800'}`}/> Archived</button>
            </div>
            <div className="flex flex-col">
                <h3 className="px-3 pb-1 text-slate100 text-xs font-bold dark:text-neutral100D">TAGS</h3>
                <div className="flex flex-col">
                    {
                        tagCount.map(([tag, count])=> (<div key={tag} className="my-0.5 px-3 py-2 rounded-md flex items-center justify-between">
                            <label htmlFor="" className="flex items-center gap-2 text-preset3m text-neutral800 dark:text-neutral100D"><input type="checkbox" name="" id="" /> {tag}</label>
                            <div className="px-2 py-0.5 flex items-center justify-between text-preset5 text-neutral800 dark:text-neutral0 rounded-full bg-neutral100 dark:bg-neutral600D border border-neutral300 dark:border-neutral400D w-5.25 h-5.25">{count}</div>

                        </div>))
                    }

                </div>

            </div>

        </section>
    </div>
    </div>
  )
}

export default SidebarSmall