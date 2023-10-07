import { ExpenseContext } from "@/Providers/ExpenseProvider";
import { useContext } from "react";

export const useExpense = () => {
  return useContext(ExpenseContext);
};
