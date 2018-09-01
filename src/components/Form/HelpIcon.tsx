import * as React from "react";
import { TeachingBubble } from "office-ui-fabric-react/lib/TeachingBubble";
import { IconButton, IButtonProps } from "office-ui-fabric-react/lib/Button";

interface IHelpIconProps extends IButtonProps {
  tooltip: string;
}

interface IHelpIconState {
  isTeachingBubbleVisible: boolean;
}

class HelpIcon extends React.Component<IHelpIconProps, IHelpIconState> {
  _iconButton: HTMLDivElement;
  constructor(props: IHelpIconProps) {
    super(props);
    this.state = {
      isTeachingBubbleVisible: false
    };
  }

  showCallout = () => {
    if (this.state.isTeachingBubbleVisible) {
      this.setState({ isTeachingBubbleVisible: false });
    } else {
      this.setState({ isTeachingBubbleVisible: true });
    }
  }

  render(): JSX.Element {
    const isTeachingBubbleVisible = this.state.isTeachingBubbleVisible;
    return (
      <div
        className="help-icon"
        ref={icon => (this._iconButton = icon)}
      >
        <IconButton
          iconProps={{ iconName: "Info" }}
          onClick={this.showCallout}
        />
        {isTeachingBubbleVisible && (
          <TeachingBubble
            targetElement={this._iconButton}
            hasCloseIcon={false}
            onDismiss={this.showCallout}
          >
            {this.props.tooltip}
          </TeachingBubble>
        )}
      </div>
    );
  }
}

export default HelpIcon;
