/** @format */

// /** @format */

// /** @format */

// import { createContext, useContext } from "react";

// const DraftContext = createContext();

// function DraftProvider({ chidlren }) {
//   function getDraft() {
//     const savedDraft = localStorage.getItem("savedDraft") //if there is any draft saved
//       ? JSON.parse(localStorage.getItem("savedDraft")) //return draft in local storage
//       : []; //else return empty arr

//     return savedDraft;
//   }

//   function saveDraft(draft) {
//     const savedDraft = getDraft();

//     // save new draft
//     localStorage.setItem("savedDraft", JSON.stringify(savedDraft.push(draft)));
//   }

//   return (
//     <DraftContext.Provider value={{ getDraft, saveDraft }}>
//       {chidlren}
//     </DraftContext.Provider>
//   );
// }

// function useDraft() {
//   const context = useContext(DraftContext);
//   if (!context) {
//     throw new Error("DraftContext was used outside of the DraftProvider");
//   }

//   return context;
// }

// export { useDraft, DraftProvider };
