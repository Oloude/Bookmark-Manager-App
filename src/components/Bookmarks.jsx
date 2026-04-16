import { useEffect, useState } from "react";
import useBookmarkManager from "../BookmarkState"
import Card from "./Card";

function Bookmarks() {
    const bookmarkData = useBookmarkManager(state => state.bookmarkData);
    const isShowArchived = useBookmarkManager(state => state.isShowArchived);
    const isShowAll = useBookmarkManager(state => state.isShowAll);
    const sort = useBookmarkManager(state => state.sort);
    const selectedTag = useBookmarkManager(state => state.selectedTag);

    let sorted = bookmarkData.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    const [bookmarks, setBookMarks ] = useState(sorted);

    useEffect(()=> {
      if(isShowAll){
        setBookMarks(bookmarkData)
      }
      if(isShowArchived){
        setBookMarks(prev => {
          let filtered = [...prev].filter(bookmark => bookmark.isArchived)
          return filtered
        })
      }
    }, [isShowAll, isShowArchived])

    useEffect(()=>{
      if(sort === 'Recently added'){
        setBookMarks(prev => [...prev].sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
      }
      if(sort === 'Recently visited'){
        setBookMarks(prev => [...prev].sort((a,b) => new Date(b.lastVisited).getTime() - new Date(a.lastVisited).getTime()))
      }
      if(sort === 'Most visited'){
        setBookMarks(prev => [...prev].sort((a,b) => b.visitCount - a.visitCount))
      }
    }, [sort])
    

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
        {
            bookmarks.map(bookmark => <Card key={bookmark.id} {...bookmark}/>)
        }
    </section>
  )
}

export default Bookmarks