import create from 'zustand';
import { devtools } from 'zustand/middleware';

let rootStore = (set) => ({
  userToken: false,
  setUserToken: () => set((state) => ({ userToken: !state.userToken })),
  isLoading: false,
  setIsLoading: () => set((state) => ({ isLoading: !state.isLoading })),
});

rootStore = devtools(rootStore);

export const useRootStore = create(rootStore);
