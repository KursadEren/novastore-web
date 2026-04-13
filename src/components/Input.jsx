import React from 'react';

const Input = ({ variant = "primary", placeholder,value,onChange }) => {
  const base ="border-1 border-slate-200 p-2 w-full rounded-xl"
  
  const variants = {
    primary: "border border-slate-200 focus:border-blue-600",
    search: "border border-slate-200 focus:border-blue-600 bg-slate-50",
  };



  return (
    <input
     className={` ${base} ${variants[variant]}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}

    />
  );
}

export default Input;
