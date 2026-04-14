const Button = ({ children, variant = "primary", onClick, disabled = false }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer text-sm md:text-base transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-gradient-to-r from-blue-900 to-blue-600 text-white hover:shadow-lg hover:from-blue-800 hover:to-blue-500 focus:ring-blue-500",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg focus:ring-red-500",
    success: "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg focus:ring-emerald-500",
    warning: "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg focus:ring-amber-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 focus:ring-blue-500",
    light: "bg-white text-blue-900 hover:bg-blue-50 hover:shadow-md focus:ring-blue-300",
    text: "text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:ring-blue-300",
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;