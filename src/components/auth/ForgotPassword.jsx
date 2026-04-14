import useBookmarkManager from "../../BookmarkState"

function ForgotPassword() {
    const darkMode = useBookmarkManager(state => state.darkMode)
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-20">
        <div className="px-3 py-8 rounded-xl bg-neutral0 flex flex-col gap-8 shadow-login w-full max-w-md md:px-8 md:py-10 dark:border dark:border-neutral500D dark:bg-neutral800D">
            <img src={darkMode ? 'images/logo-dark-theme.svg' :"/images/logo-light-theme.svg"} alt=""  className="h-8 w-53.5"/>
            <div className="space-y-1.5">
                <h1 className="text-preset1 text-neutral900 dark:text-neutral0">Forgot your password?</h1>
                <p className="text-preset4m text-neutral800 dark:text-neutral100D">Enter your email address below and we’ll send you a link to reset your password.</p>
            </div>
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-preset4m text-neutral900 dark:text-neutral0">Email *</label>
                    <input type="email" name="" id="email" className="p-3 rounded-lg border border-neutral500 bg-neutral0 text-neutral900 text-preset4m inset-shadow-input outline-none dark:bg-neutral600D dark:border-neutral300D dark:text-neutral100D" />
                    <span></span>
                </div>
                <button className="text-preset3 text-neutral0 bg-teal700 px-4 py-3 rounded-lg inset-shadow-input border-image dark:text-neutral0">Send reset link</button>
            </form>
            <div className="flex flex-col gap-3 items-center">
                <p className="text-preset4m text-neutral800 dark:text-neutral100D"><span className="text-neutral900 dark:text-neutral0">Back to login</span></p>
            </div>


        </div>

    </section>
  )
}

export default ForgotPassword