import { create } from "zustand";

interface ErrorState {
  errorMessage: string;
  successMessage: string;
  bulkName: string;
  setErrorMessage: (messages: { errorMessage: string; successMessage: string }) => void;
  setBulkName: (bulkName: string) => void;
  clearErrorMessage: () => void;
  clearSuccessMessage: () => void;
}

export const useErrorStore = create<ErrorState>((set) => ({
  errorMessage: "",
  successMessage: "",
  bulkName: "",
  setErrorMessage: ({ errorMessage, successMessage }) => set({ errorMessage, successMessage }),
  setBulkName: (bulkName) => set({ bulkName }),
  clearErrorMessage: () => set({ errorMessage: "" }),
  clearSuccessMessage: () => set({ successMessage: "" }),
}));
