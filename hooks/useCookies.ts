import { create } from "zustand";

type modalControProps = {
  isOpen:boolean
  onOpen: () => void
  onClose: () => void
}

const useCookies = create<modalControProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useCookies;