import { MdClose } from "react-icons/md"


function EditBookmarkModal() {
  return (
    <section className="fixed top-0 right-0 h-screen w-full bg-black/60 px-4 flex items-center justify-center z-80">
            <div className="max-w-142.5 w-full rounded-2xl flex flex-col px-4 py-3 gap-6 md:p-8 md:gap-8 bg-neutral0 relative max-h-[90vh] overflow-y-auto">
                <button className="border absolute top-2 right-2 border-neutral400 w-8 h-8 rounded-lg flex items-center justify-center">
                    <MdClose className="w-5 h-5 text-neutral900"/></button>
                <div className="flex flex-col gap-2">
                    <h2 className="text-preset1 text-neutral900">Edit bookmark</h2>
                            <p className="text-preset4m text-neutral800">Update your saved link details — change the title, description, URL, or tags anytime.</p>
    
                </div>  
                <form action="" className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="text-preset4m text-neutral900">Title *</label>
                        <input type="text" name="" id="" className="p-3 border border-neutral400 inset-shadow-input rounded-lg text-neutral900 outline-none"/>
                        <span></span>
                    </div>
    
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="text-preset4m text-neutral900">Description *</label>
                        <textarea type="text" name="" id="" className="p-3 border border-neutral400 inset-shadow-input rounded-lg text-neutral900 h-23 resize-none outline-none"/>
                        <span className="self-end text-preset5 text-neutral800">0/280</span>
                    </div>
    
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="text-preset4m text-neutral900">Website URL *</label>
                        <input type="text" name="" id="" className="p-3 border border-neutral400 inset-shadow-input rounded-lg text-neutral900 outline-none"/>
                        <span></span>
                    </div>
    
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="text-preset4m text-neutral900">Tags *</label>
                        <input type="text" name="" id="" className="p-3 border border-neutral400 inset-shadow-input rounded-lg text-neutral900 outline-none placeholder:text-neutral800" placeholder="e.g. Design, Learning, Tools"/>
                        <span></span>
                    </div>
    
                </form>
                <div className="flex justify-end gap-4">
                            <button className="px-4 py-3 rounded-lg border border-neutral400 text-preset3m text-neutral900">Cancel</button>
                            <button className="px-4 py-3 rounded-lg bg-teal700 border-image inset-shadow-input text-preset3m text-neutral0">Save Bookmark</button>
            
                        </div>  
            </div>
            
        </section>
  )
}

export default EditBookmarkModal