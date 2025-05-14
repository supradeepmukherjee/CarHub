import { create } from 'zustand'

export const useImgs = create
    <{
        imgs: string[]
        setImgs: (imgs: string[]) => void
        addImg: (img: string) => void
        removeImg: (img: string) => void
        clearImgs: () => void
    }>
    (set => ({
        imgs: [],
        setImgs: imgs => set({ imgs }),
        addImg: img => set(s => ({ imgs: [...s.imgs, img] })),
        removeImg: img => set(s => ({ imgs: s.imgs.filter(i => i !== img) })),
        clearImgs: () => set({ imgs: [] })
    }))