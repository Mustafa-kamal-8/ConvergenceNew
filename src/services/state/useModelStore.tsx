import { create } from 'zustand';

type ModalState = {
  isOpen: boolean;
  modalType: number | null;
  modalTitle: string;
  bulkName: string;
  id: string | null;
  openModal: (type: number, title: string, bulkName: string , id: string) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalTitle: '',
  bulkName: '',
  id: null,
  openModal: (type: number, title: string , bulkName: string , id: string) => set({ isOpen: true, modalType: type, modalTitle: title , bulkName:bulkName , id:id}),
  closeModal: () => set({ isOpen: false, modalType: null, modalTitle: '', bulkName: '' , id:null }), 
}));

export default useModalStore;
