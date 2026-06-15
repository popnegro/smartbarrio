import { create } from "zustand";
import { Block, LandingPageData } from "../types/builder.types";
import { v4 as uuidv4 } from "uuid";

interface BuilderState {
  pageData: LandingPageData;
  selectedBlockId: string | null;
  setPageData: (data: LandingPageData) => void;
  addBlock: (type: Block["type"], index?: number) => void;
  updateBlock: (id: string, content: any) => void;
  removeBlock: (id: string) => void;
  selectBlock: (id: string | null) => void;
  moveBlock: (from: number, to: number) => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
  pageData: {
    title: "Nueva Landing",
    slug: "nueva-landing",
    blocks: [],
    seo: { title: "", description: "" },
  },
  selectedBlockId: null,
  setPageData: (pageData) => set({ pageData }),
  selectBlock: (selectedBlockId) => set({ selectedBlockId }),
  addBlock: (type, index) => set((state) => {
    const newBlock: Block = {
      id: uuidv4(),
      type,
      content: {}, // Default content based on type would go here
    };
    const blocks = [...state.pageData.blocks];
    if (typeof index === "number") blocks.splice(index, 0, newBlock);
    else blocks.push(newBlock);
    return { pageData: { ...state.pageData, blocks } };
  }),
  updateBlock: (id, content) => set((state) => ({
    pageData: {
      ...state.pageData,
      blocks: state.pageData.blocks.map((b) => (b.id === id ? { ...b, content } : b)),
    },
  })),
  removeBlock: (id) => set((state) => ({
    pageData: {
      ...state.pageData,
      blocks: state.pageData.blocks.filter((b) => b.id !== id),
    },
    selectedBlockId: state.selectedBlockId === id ? null : state.selectedBlockId,
  })),
  moveBlock: (from, to) => set((state) => {
    const blocks = [...state.pageData.blocks];
    const [moved] = blocks.splice(from, 1);
    blocks.splice(to, 0, moved);
    return { pageData: { ...state.pageData, blocks } };
  }),
}));