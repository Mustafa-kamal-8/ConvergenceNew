// src/store/useModalStore.ts
import { create } from 'zustand';

type ModalState = {
  isOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: '',
  openModal: (type) => set({ isOpen: true, modalType: type }),
  closeModal: () => set({ isOpen: false, modalType: '' }),
}));

export default useModalStore;
