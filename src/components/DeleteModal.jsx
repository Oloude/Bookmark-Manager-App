import { MdClose } from "react-icons/md"


function DeleteModal() {
  return (
    <section className="fixed w-full h-screen top-0 left-0 z-80 bg-black/60 flex items-center justify-center px-4">
        <div className="rounded-2xl p-6 flex flex-col gap-6 bg-neutral0 max-w-112.5 w-full relative">
            <button className="absolute top-2 right-2"><MdClose className="w-5 h-5 text-neutral900"/></button>
            <div className="flex flex-col gap-2">
                <h2 className="text-preset1 text-neutral900">Delete bookmark</h2>
                <p className="text-preset4m text-neutral800">Are you sure you want to delete this bookmark?</p>
            </div>
            <div className="flex justify-end gap-4">
                <button className="px-4 py-3 rounded-lg border border-neutral400 text-preset3m text-neutral900">Cancel</button>
                <button className="px-4 py-3 rounded-lg bg-red800 border-image inset-shadow-input text-preset3m text-neutral0">Delete Permanently</button>

            </div>
        </div>
        
    </section>
  )
}

export default DeleteModal