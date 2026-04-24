import React from 'react';

const InputField = ({
  label,
  id,
  type = 'text',
  placeholder,
  autoComplete,
  helpText,
  required = false,
  className = '',
}) => {
  const inputClasses =
    'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-nu-blue focus:bg-zinc-50';

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={inputClasses}
      />
      {helpText && <p className="mt-2 text-xs leading-5 text-zinc-500">{helpText}</p>}
    </div>
  );
};

export default InputField;
