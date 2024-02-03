import { create } from 'zustand'

type State = {
  theme: 'light' | 'dark'
}

type Actions = {
  toggleTheme: () => void
}

type Store = State & Actions

export const useThemeStore = create<Store>((set, get) => ({
  theme: 'light',
  toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' })
}))
