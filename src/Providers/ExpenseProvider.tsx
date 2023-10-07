import { ReactNode, createContext } from "react";

export const ExpenseContext = createContext(null);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ExpenseContext.Provider value={null}>{children}</ExpenseContext.Provider>
  );
};
