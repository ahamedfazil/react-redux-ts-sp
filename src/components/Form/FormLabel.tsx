import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import HelpIcon from "./HelpIcon";

interface IFormLabelProps {
    label: string;
    required?: boolean;
    tooltip?: string;
}

export const FormLabel: React.SFC<IFormLabelProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-col ms-sm12 ms-lg3">
      <Label required={props.required}>
        {props.label}
        {props.tooltip !== undefined &&
          props.tooltip !== "" && <HelpIcon tooltip={props.tooltip} />}
      </Label>
    </div>
  );
};
