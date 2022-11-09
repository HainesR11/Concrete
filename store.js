import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ColorPalette } from './src/components/ColorScheme';

let rootStore = (set) => ({
  userToken: false, // TODO: change false when connecting to DB
  setUserToken: () => set((state) => ({ userToken: !state.userToken })),
  isLoading: false,
  setIsLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  navRef: '',
  setNavRef: (ref) => set(() => ({ navRef: ref })),
  darkMode: false,
  setDarkMode: (isDarkmode) => set(() => ({ darkMode: isDarkmode })),
});

let userStore = (set) => ({
  color: ColorPalette.Blue,
  setColor: (color) => set(() => ({ color: color })),
});

rootStore = devtools(rootStore);

userStore = devtools(userStore);
userStore = persist(userStore);

export const useRootStore = create(rootStore);
export const useUserStore = create(userStore);
