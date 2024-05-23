import { TextareaHTMLAttributes } from "react";
import { ICustomFieldProps } from ".";

const CustomField = ({
  type,
  register,
  ...rest
}: Partial<ICustomFieldProps>) => {
  if (type === "textarea") {
    return (
      <textarea
        className="input-field"
        {...register}
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input type={type} className="input-field" {...register} {...rest} />;
};

export default CustomField;
