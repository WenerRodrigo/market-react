import "./styles.css";
import { Controller } from "react-hook-form";

interface IEmailInputField {
  name: string;
  placeholder: string;
  //control: any;
}

export const EmailInputField = ({
  name,
  //control,
  placeholder,
}: IEmailInputField) => {
  return (
    <div>
      <Controller
        name={name}
        defaultValue=""
        //control={control}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <>
            <div className={`input-box ${error ? "has-error" : ""}`}>
              <input
                {...field}
                ref={ref}
                type="email"
                placeholder={placeholder}
                value={field.value}
              />
            </div>
            {error && (
              <div className="error-message">
                <span>{error.message}</span>
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};