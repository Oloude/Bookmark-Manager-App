import { FaEllipsisVertical } from "react-icons/fa6"
import { FiCalendar, FiClock, FiEye } from "react-icons/fi"
import { MdOutlinePushPin } from "react-icons/md"
import formatDate from "../utils/formatDate"

function Card({id, title, description, tags, visitCount, createdAt, lastVisited, pinned, favicon, url}) {
    const [date, month] = formatDate(createdAt)
    const [lDate, lMonth] = formatDate(lastVisited)
  return (
    <article className="rounded-lg bg-neutral0 shdow-login flex flex-col">
        <div className="p-4 flex flex-col gap-4 flex-1">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 border border-neutral100 rounded-md"> <img src={favicon} alt="" className="w-full h-full object-contain"/></div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-preset2b text-neutral900">{title}</h3>
                        <p className="text-preset5 text-neutral800">{url}</p>
                    </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center bg-neutral0 border border-neutral400 rounded-md"> <FaEllipsisVertical className="text-neutral900 w-5 h-5"/></button>
            </div>
            <div className="w-full h-px bg-neutral300"></div>
            <p className="text-preset4m text-neutral800">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag)=> (<div key={tag} className="px-2 py-0.5 rounded-sm bg-neutral100 text-preset5 text-neutral800">
                  {tag}
                </div>))}
            </div>
        </div>

        <div className="flex justify-between items-center border-t border-neutral300 px-4 py-3 mt-auto">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-preset5 text-neutral800"><FiEye className="text-neutral800 w-3 h-3"/> {visitCount} </div>
                <div className="flex items-center gap-1.5 text-preset5 text-neutral800"><FiClock className="text-neutral800 w-3 h-3"/> {lDate} {lMonth}</div>
                <div className="flex items-center gap-1.5 text-preset5 text-neutral800"><FiCalendar className="text-neutral800 w-3 h-3"/> {date} {month}</div>
            </div>
            {pinned && <button><MdOutlinePushPin className="w-4 h-4 text-neutral800"/></button>}

        </div>

    </article>
  )
}

export default Card