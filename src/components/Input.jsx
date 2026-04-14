import React from 'react';

const Input = ({ variant = "primary", placeholder, value, onChange, type = "text" }) => {
  const base = "border-1 border-slate-200 p-2 w-full rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1"

  const variants = {
    primary: "border border-slate-200 focus:border-blue-600 focus:ring-blue-500 hover:border-blue-400",
    search: "border border-slate-200 focus:border-blue-600 focus:ring-blue-500 bg-slate-50 hover:bg-white hover:border-blue-400",
  };

  return (
    <input
      className={`${base} ${variants[variant]}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}

export default Input;
