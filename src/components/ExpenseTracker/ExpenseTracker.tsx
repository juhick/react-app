import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import { produce } from "immer";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "手机", price: 5000, category: "电子产品" },
    { id: 2, description: "电脑", price: 10000, category: "电子产品" },
    { id: 3, description: "游戏机", price: 2000, category: "电子产品" },
    { id: 4, description: "书本", price: 2, category: "书籍" },
  ]);

  const categoryList = ["食物", "电子产品", "书籍", "出行"];

  let idx = expenses.length;

  const [select, setSelect] = useState("All category");

  const handleDelete = (id: number) => {
    setExpenses(
      produce((draft) => {
        return draft.filter((expense) => expense.id !== id);
      })
    );
  };

  const handleSelect = (select: string) => {
    setSelect(select);
  };

  const handleAdd = (data: ExpenseFormData) => {
    setExpenses(
      produce((draft) => {
        draft.push({
          id: idx + 1,
          description: data.Description,
          price: data.Price,
          category: data.Category,
        });
      })
    );

    idx = idx + 1;
  };

  return (
    <div>
      <ExpenseForm categoryList={categoryList} onAdd={handleAdd} />
      <ExpenseFilter categoryList={categoryList} onSelect={handleSelect} />
      <ExpenseList
        expenses={
          select === "All category"
            ? expenses
            : expenses.filter((expense) => expense.category === select)
        }
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ExpenseTracker;
