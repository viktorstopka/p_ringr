import create from "zustand";

type SectionState = {
  section: number;
  setSection: (section: number) => void;
};

const useSection = create<SectionState>((set) => ({
  section: 0,
  setSection: (section: number) => set((state) => ({ section })),
}));

export default useSection;
