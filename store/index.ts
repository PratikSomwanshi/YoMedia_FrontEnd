import { create } from "zustand";

type Store = {
    toggle: boolean;
    isMute: boolean;
    toggler: () => void;
    mutter: () => void;
};

const useStore = create<Store>()((set) => ({
    toggle: false,
    isMute: true,
    toggler: () => set((state) => ({ toggle: !state.toggle })),
    mutter: () => set((state) => ({ isMute: !state.isMute })),
}));

export default useStore;
