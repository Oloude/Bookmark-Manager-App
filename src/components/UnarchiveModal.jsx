import { MdClose } from "react-icons/md"


function UnarchiveModal() {
  return (
    <section className="fixed w-full h-screen top-0 left-0 z-80 bg-black/60 dark:bg-neutral900D/50 flex items-center justify-center px-4">
                <div className="rounded-2xl p-5 md:p-6 flex flex-col gap-6 bg-neutral0 dark:border dark:border-neutral500D dark:bg-neutral800D max-w-112.5 w-full relative">
                    <button className="absolute top-2 right-2"><MdClose className="w-5 h-5 text-neutral900 dark:text-neutral0"/></button>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-preset1 text-neutral900 dark:text-neutral0">Unarchive bookmark</h2>
                        <p className="text-preset4m text-neutral800 dark:text-neutral100D">Move this bookmark back to your active list?</p>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button className="px-4 py-3 rounded-lg border border-neutral400 text-preset3m text-neutral900 dark:text-neutral0 dark:border-neutral400D">Cancel</button>
                        <button className="px-4 py-3 rounded-lg bg-teal700 border-image inset-shadow-input text-preset3m text-neutral0">Unarchive</button>
        
                    </div>
                </div>
                
            </section>
  )
}

export default UnarchiveModal