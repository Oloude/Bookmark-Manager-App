import useBookmarkManager from "../BookmarkState"
import Card from "./Card";

function Bookmarks() {
    const bookmarkData = useBookmarkManager(state => state.bookmarkData);
    console.log(bookmarkData)

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
        {
            bookmarkData.map(bookmark => <Card key={bookmark.id} {...bookmark}/>)
        }
    </section>
  )
}

export default Bookmarks