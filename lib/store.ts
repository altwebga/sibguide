import { create } from "zustand";
// Note: 'create' as a default export is a deprecated import.

interface Store {
  count: number;
  increment: () => void;
}

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
