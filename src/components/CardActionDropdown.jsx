import { FiCopy, FiEdit } from "react-icons/fi"
import { LiaUndoAltSolid } from "react-icons/lia"
import { LuArchive } from "react-icons/lu"
import { MdOutlinePushPin } from "react-icons/md"
import { RiDeleteBin6Line, RiShareBoxFill } from "react-icons/ri"


function CardActionDropdown() {
  return (
    <div className="bg-neutral0 dark:bg-neutral600D rounded-lg border border-neutral100 dark:border-neutral500D shadow-profile w-50 p-2 flex flex-col gap-1 absolute top-14 right-5 z-10">
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><RiShareBoxFill className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Visit</button>
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><FiCopy className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Copy URL</button>
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><MdOutlinePushPin className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Pin</button>
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><FiEdit className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Edit</button>
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><LuArchive className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Archive</button>
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><LiaUndoAltSolid className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Unarchive</button>
        <button className=" rounded-md p-2 flex items-center gap-2.5 text-neutral800 dark:text-neutral100D text-preset4m"><RiDeleteBin6Line className="text-neutral800 dark:text-neutral100D w-4 h-4"/> Delete Permanently</button>     
    </div>
  )
}

export default CardActionDropdown