import { create } from "zustand";
import { persist } from "zustand/middleware";

const wordStore = create(
  persist(
    (set) => ({
      wordList: [],
      word: "",
      score: 0,

      setWordList: (list) => set(() => ({ wordList: list })),
      setWord: (word) => set(() => ({ word })),

      setScore: (result) =>
        set((state) => {
          if (result === "reset") return { score: 0 };
          return {
            score: result === "won" ? state.score + 10 : state.score - 5,
          };
        }),
    }),
    {
      name: "word-score", // key in localStorage
      partialize: (state) => ({ score: state.score }), //  only persist 'score'
    }
  )
);

export default wordStore;
