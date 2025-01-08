import { create } from 'zustand';

type ModalState = {
  isOpen: boolean;
  modalType: number | null;
  modalTitle: string;
  bulkName: string;
  id: string | null;
  schemeId: string | null;
  openModal: (type: number, title: string, bulkName: string , id: string, schemeId:string) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  modalTitle: '',
  bulkName: '',
  id: null,
  schemeId: null,
  openModal: (type: number, title: string , bulkName: string , id: string, schemeId:string) => set({ isOpen: true, modalType: type, modalTitle: title , bulkName:bulkName , id:id, schemeId:schemeId}),
  closeModal: () => set({ isOpen: false, modalType: null, modalTitle: '', bulkName: '' , id:null, schemeId:'' }), 
}));

export default useModalStore;
