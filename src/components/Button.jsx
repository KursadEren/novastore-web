const Button = ({ children, variant = "primary", onClick }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition-all cursor-pointer text-sm md:text-base";

  const variants = {
    primary: "bg-gradient-to-r from-blue-900 to-blue-600  text-white hover:bg-blue-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-emerald-500 text-white hover:bg-emerald-600",
    warning: "bg-amber-500 text-white hover:bg-amber-600",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    light: "bg-white text-blue-900 hover:bg-blue-50",
    text: "text-blue-600 hover:text-blue-800 hover:bg-blue-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;