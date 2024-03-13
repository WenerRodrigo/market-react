import { useState } from "react";
import { Controller } from "react-hook-form";

interface IEmailInputField {
  name: string;
  placeholder: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  control: any;
}

export const EmailInputField = ({
  name,
  control,
  placeholder,
}: IEmailInputField) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="mb-4">
      <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <>
            <div
              className={`border rounded-md focus:border-blue-500 ${
                error ? "border-red-500" : ""
              } ${isFocused ? "" : ""}`}
              style={{
                boxShadow: isFocused ? "0 0 0 3px rgba(59, 130, 246, 0.5)" : "none"
              }}
            >
              <input
                {...field}
                ref={ref}
                type="email"
                placeholder={placeholder}
                value={field.value}
                className="w-full px-4 py-2 text-gray-500 focus:outline-none rounded-md"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm">
                <span>{error.message}</span>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};
