import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type FloatingInputProps = {
  label: string;
  name: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
};

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  name,
  register,
  error,
  type,
}) => {
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        {...register(name, {
          required: `${label} is required`,
          ...(name === "jambScore" && {
            min: {
              value: 250,
              message: "JAMB score must be at least 250",
            },
          }),
          onChange: (e) => setHasValue(e.target.value !== ""),
        })}
        onBlur={(e) => setHasValue(e.target.value !== "")}
        className="peer w-full pb-1 pt-5 border-b-2 outline-none placeholder-transparent"
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 transition-all duration-200 text-gray-400 cursor-text 
      ${hasValue ? "top-0 text-sm text-[#b58825]" : "top-5 text-base"}
      peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#b58825]`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FloatingInput;
