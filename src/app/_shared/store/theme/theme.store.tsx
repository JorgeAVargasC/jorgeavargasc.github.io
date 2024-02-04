import { create } from 'zustand'

type State = {
  theme: 'light' | 'dark'
}

type Actions = {
  toggleTheme: () => void
  setTheme: (theme: State['theme']) => void
}

type Store = State & Actions

export const useThemeStore = create<Store>((set, get) => ({
  theme: 'dark',
  toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
  setTheme: (theme) => set({ theme })
}))
