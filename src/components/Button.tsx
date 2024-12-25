interface ButtonProps {
  level?: "primary" | "secondary" | "danger" | "success";
  text: string;
  onClick: () => void; // Add onclick prop
}

const Button = ({ level = "primary", text, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${level}`}>
      {text}
    </button>
  );
};

export default Button;
