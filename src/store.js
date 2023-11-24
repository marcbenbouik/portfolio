import { create } from 'zustand'

export const useStore = create((set) => ({
    isWider: window.innerWidth > 735,
    display: false,
    setWider: () => set((state) => ({ isWider: window.innerWidth > 735 })),
    setDisplay: (value) => set((state) => ({ display: value }))
}))