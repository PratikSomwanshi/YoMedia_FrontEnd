export type toggleType = {
    toggle: boolean;
    toggler: () => void;
};

export const togglerSlice = (
    set: (
        partial:
            | toggleType
            | Partial<toggleType>
            | ((state: toggleType) => toggleType | Partial<toggleType>),
        replace?: boolean | undefined
    ) => void
) => ({
    toggler: () => set((state: toggleType) => ({ toggle: !state.toggle })),
});
