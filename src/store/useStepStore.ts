import { create } from 'zustand'

type Store = {
  currentStep: number;
  setCurrentStep: (idx: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useStepStore = create<Store>()((set) => ({
  currentStep: 0,
  setCurrentStep: (idx: number) => set(() => ({ currentStep: idx })),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}))
