export enum ExpenseTypeEnum {
  CashIn = "Cash In",
  CashOut = "Cash Out",
}

export interface Category {
  name: string;
  isMain: boolean;
  order: number;
}

export interface Expense {
  type: ExpenseTypeEnum;
  category: Category;
  date: Date;
  amount: number;
  description: string;
}
