import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Store = {
    toggle: boolean;
    isMute: boolean;
    toggler: () => void;
    mutter: () => void;
    account: {
        profile_photo: string;
        cover_photo: string;
        user_name: string;
        user_id: string;
        user_mobile: string;
        user_email: string;
    };
    searchToggle: boolean;
    setProfile: (payload: any) => void;
    setCover: (payload: any) => void;
    setName: (payload: string) => void;
    setID: (payload: string) => void;
    setMobile: (payload: string) => void;
    setEmail: (payload: string) => void;
    setSearchToggle: () => void;
};

const useStore = create<Store>()(
    immer((set) => ({
        toggle: false,
        isMute: true,
        account: {
            profile_photo: "default",
            cover_photo: "default",
            user_name: "default",
            user_id: "default",
            user_mobile: "default",
            user_email: "default",
        },
        searchToggle: false,
        toggler: () => set((state) => ({ toggle: !state.toggle })),
        mutter: () => set((state) => ({ isMute: !state.isMute })),
        setProfile: (payload: string) =>
            set((state) => {
                state.account.profile_photo = payload;
            }),
        setCover: (payload: string) =>
            set((state) => {
                state.account.cover_photo = payload;
            }),
        setID: (payload: string) =>
            set((state) => {
                state.account.user_id = payload;
            }),
        setMobile: (payload: string) =>
            set((state) => {
                state.account.user_mobile = payload;
            }),
        setEmail: (payload: string) =>
            set((state) => {
                state.account.user_email = payload;
            }),
        setName: (payload: string) =>
            set((state) => {
                state.account.user_name = payload;
            }),
        setSearchToggle: () =>
            set((state) => {
                state.searchToggle = !state.searchToggle;
            }),
    }))
);

export default useStore;
