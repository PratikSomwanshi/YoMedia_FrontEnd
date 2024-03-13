import { create } from "zustand";

type Store = {
    toggle: boolean;
    toggler: () => void;
};

const useStore = create<Store>()((set) => ({
    toggle: false,
    toggler: () => set((state) => ({ toggle: !state.toggle })),
}));

export default useStore;
