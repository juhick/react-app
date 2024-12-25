interface Props {
  onSelect: (category: string) => void;
  categoryList: string[];
}

const ExpenseFilter = ({ onSelect, categoryList }: Props) => {
  return (
    <div className="mb-3">
      <select
        name="expenseSelect"
        id="expenseSelect"
        className="form-select"
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        <option value="All category" defaultChecked>
          All category
        </option>
        {categoryList.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
