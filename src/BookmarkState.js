import { create } from "zustand";

const useBookmarkManager = create((set)=> ({
    darkMode : false,
    toggleDarkMode : ()=> set(state => ({darkMode : !state.darkMode})),

}))

export default useBookmarkManager;