import * as React from "react";
import { FormLabel } from "./FormLabel";

interface IFormRowProps {
  label: string;
  required?: boolean;
  tooltip?: string;
}

export const FormRow: React.SFC<IFormRowProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row ms-sm12 ms-lg6 pad-top row-delimited">
      <FormLabel {...props} />
      <div className="ms-Grid-col ms-sm12 ms-lg9 field-style">{props.children}</div>
    </div>
  );
};
