import { useState } from "react";
import { Controller } from "react-hook-form";

interface PasswordInputFieldProps {
  name: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  control: any;
  placeholder: string;
  showPassword: boolean;
  handleShowPasswordClick: (event: { preventDefault: () => void }) => void;
}

export const PasswordInputField = ({
  name,
  control,
  placeholder,
  showPassword,
  handleShowPasswordClick,
}: PasswordInputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <>
          <div
            className={`border rounded-md relative ${
              error ? "border-red-500" : ""
            } ${isFocused ? "" : ""}`}
            style={{
              boxShadow: isFocused
                ? "0 0 0 3px rgba(59, 130, 246, 0.5)"
                : "none",
            }}
          >
            <input
              {...field}
              ref={ref}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              value={field.value}
              className="w-full px-4 py-2 text-gray-500 focus:outline-none rounded-md"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              className="right-2 top-4 absolute border-none bg-slate-600-700"
              onClick={handleShowPasswordClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
              >
                <path
                  d="M8.26639 10.3587C5.17194 10.3587 2.46698 8.53674 0.743026 7.00857C0.270566 6.5905 0 5.98886 0 5.35867C0 4.72849 0.270566 4.12686 0.743026 3.70877C2.46701 2.18057 5.17194 0.358673 8.26639 0.358673C11.3608 0.358673 14.0658 2.1806 15.7898 3.70877C16.2622 4.12685 16.5328 4.72849 16.5328 5.35867C16.5328 5.98886 16.2622 6.59048 15.7898 7.00857C14.0658 8.53678 11.3608 10.3587 8.26639 10.3587ZM8.26639 1.06228C5.39279 1.06228 2.84288 2.78764 1.20925 4.23487C0.887698 4.5197 0.703486 4.92963 0.703486 5.35859C0.703486 5.78754 0.887715 6.19747 1.20925 6.48231C2.84283 7.92962 5.39279 9.65489 8.26639 9.65489C11.14 9.65489 13.6899 7.92953 15.3235 6.48231C15.6451 6.19747 15.8293 5.78754 15.8293 5.35859C15.8293 4.92963 15.6451 4.5197 15.3235 4.23487C13.6899 2.78756 11.14 1.06228 8.26639 1.06228Z"
                  fill="#8B8B8B"
                />
                <path
                  d="M8.26631 8.73199C6.40627 8.73199 4.89307 7.21874 4.89307 5.35875C4.89307 3.49876 6.40632 1.9855 8.26631 1.9855C10.1263 1.9855 11.6396 3.49876 11.6396 5.35875C11.6396 7.21874 10.1263 8.73199 8.26631 8.73199ZM8.26631 2.68911C6.79453 2.68911 5.59667 3.88693 5.59667 5.35875C5.59667 6.83056 6.79449 8.02838 8.26631 8.02838C9.73813 8.02838 10.9359 6.83056 10.9359 5.35875C10.9359 3.88693 9.73813 2.68911 8.26631 2.68911Z"
                  fill="#8B8B8B"
                />
              </svg>
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-sm">
              <span>{error.message}</span>
            </div>
          )}
        </>
      )}
    />
  );
};
