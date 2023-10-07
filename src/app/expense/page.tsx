"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MaxWidthWrapper from "@/components/Container/MaxWidthWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Expense {
  type: ExpenseTypeEnum;
  category: string;
  date: Date;
  amount: number;
  description: string;
}

enum ExpenseTypeEnum {
  CashIn = "Cash In",
  CashOut = "Cash Out",
}

const page = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState<Expense>({
    type: ExpenseTypeEnum.CashIn,
    category: "",
    date: new Date(),
    amount: 0,
    description: "",
  });

  const handleAddExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      type: ExpenseTypeEnum.CashIn,
      category: "",
      date: new Date(),
      amount: 0,
      description: "",
    });
  };

  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
      <Card className="w-full sm:w-1/2">
        <CardHeader>
          <CardTitle>Add Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label>Type</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-1/3">Choose Type</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem onClick={() => {}}>
                    Cash In
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {}}>
                    Cash Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Category</Label>
              <Input
                type="text"
                placeholder="Enter category"
                value={newExpense.category}
                onChange={(e) =>
                  setNewExpense({
                    ...newExpense,
                    category: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Date</Label>
              <Input
                type="date"
                value={newExpense.date.toISOString().substr(0, 10)}
                onChange={(e) =>
                  setNewExpense({
                    ...newExpense,
                    date: new Date(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Amount</Label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={newExpense.amount}
                onChange={(e) =>
                  setNewExpense({
                    ...newExpense,
                    amount: parseFloat(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Description</Label>
              <Input
                type="text"
                placeholder="Enter description"
                value={newExpense.description}
                onChange={(e) =>
                  setNewExpense({
                    ...newExpense,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full flex justify-end">
          <Button onClick={handleAddExpense}>Add Expense</Button>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
};

export default page;
