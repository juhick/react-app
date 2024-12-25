import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit()}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" ref={nameRef} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" ref={ageRef} type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
