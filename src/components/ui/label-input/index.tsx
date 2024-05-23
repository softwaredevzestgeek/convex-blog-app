import { ComponentProps } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import CustomField from "./customField";

export interface ICustomFieldProps extends ComponentProps<"input"> {
  type: "text" | "email" | "password" | "file" | "textarea";
  label?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

function LabeInput({
  type,
  label,
  error,
  register,
  ...rest
}: ICustomFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <CustomField register={register} type={type} {...rest} />
      {error && (
        <p className="text-red-600 text-sm py-1.5">
          {error?.message as string}
        </p>
      )}
    </div>
  );
}

export default LabeInput;
