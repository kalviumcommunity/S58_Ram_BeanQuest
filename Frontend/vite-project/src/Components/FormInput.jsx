import React from "react";

function FormInput({ label, type, placeholder, iconSrc }) {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full mb-6">
      <label htmlFor={inputId} className="block mt-11 text-2xl max-md:mt-10 max-md:max-w-full">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={inputId}
          placeholder={placeholder}
          className="w-full px-10 py-8 mt-2 text-4xl whitespace-nowrap shadow-sm mix-blend-color-dodge bg-neutral-600 max-md:px-5 max-md:max-w-full"
        />
        {iconSrc && (
          <img
            src={iconSrc}
            alt=""
            className="absolute right-4 top-1/2 transform -translate-y-1/2 shrink-0 aspect-[1.49] w-[43px]"
          />
        )}
      </div>
    </div>
  );
}

export default FormInput;