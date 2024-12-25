import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onAdd: (data: ExpenseFormData) => void;
  categoryList: string[];
}

const expenseSchema = z.object({
  Description: z.string().nonempty({ message: "Description is required" }),
  Price: z.number().positive({ message: "Price must be positive" }),
  Category: z.string().nonempty({ message: "Category is required" }),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

const ExpenseForm = ({ onAdd, categoryList }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(expenseSchema) });

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          onAdd(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            type="text"
            {...register("Description")}
            id="Description"
            className="form-control"
          />
          {errors.Description?.message && (
            <div className="text-danger">{errors.Description?.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="Price"
            {...register("Price", { valueAsNumber: true })}
            className="form-control"
          />
          {errors.Price?.message && (
            <div className="text-danger">{errors.Price?.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <select
            id="Category"
            {...register("Category")}
            className="form-select"
            defaultValue=""
          >
            <option value="" disabled hidden></option>
            {categoryList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.Category?.message && (
            <div className="text-danger">
              {errors.Category?.message.toString()}
            </div>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            增加
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
