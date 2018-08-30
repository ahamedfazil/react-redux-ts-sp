import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import { IAppState } from "../../models/IAppState";

interface IPanelProps {
  appState: IAppState;
}
export class AppPanel extends React.Component<
  IPanelProps,
  {
    showPanel: boolean;
  }
> {
  constructor(props: IPanelProps) {
    super(props);
    this.state = {
      showPanel: false
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <DefaultButton
          primary={true}
          secondaryText="Submit"
          onClick={this._showPanel}
          text="Submit"
          className="right-aligned"
        />
        <Panel
          isOpen={this.state.showPanel}
          onDismiss={this._closePanel}
          type={PanelType.largeFixed}
          headerText="User Data Panel"
        >
          <span>First Name: {this.props.appState.firstName}</span>
          <br />
          <span>Last Name: {this.props.appState.lastName}</span>
          <br />
          <span>About Me: {this.props.appState.aboutMe}</span>
        </Panel>
      </div>
    );
  }

  private _showPanel = (): void => {
    this.setState({ showPanel: true });
  }

  private _closePanel = (): void => {
    this.setState({ showPanel: false });
  }
}
