import * as React from "react";
import pnp from "sp-pnp-js/lib/pnp";
import {
  Fabric,
  initializeIcons,
  DefaultButton,
  TextField,
  Spinner,
  SpinnerSize
} from "office-ui-fabric-react";
import { pnpConfig } from "../config/pnp.config";
import { getCurrentUser } from "../api/UserAPI";
import { IAppProps } from "../models/IAppProps";
import { ICurrentUserState } from "../models/IUserState";
import { ErrorMessage } from "./Form/ErrorMessage";
import { FormRow } from "./Form/FormRow";
import { CONST } from "../config/const";
import { IAppState } from "../models/IAppState";
import { AppPanel } from "./Form/AppPanel";
import { Route, Redirect } from "react-router-dom";
import AppNavigation from "../containers/AppNavigation";
import HelpIcon from "./Form/HelpIcon";

export class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
    pnp.setup(pnpConfig);
    getCurrentUser(props);
  }

  componentWillMount() {
    initializeIcons(undefined, { disableWarnings: true });
  }

  public render(): JSX.Element {
    const userState: ICurrentUserState = this.props.store.user.currentUser;
    const appColumns = CONST.app.Column;
    let appState: IAppState = Object.assign({}, this.props.store.app);
    return (
      <Fabric>
        <div className="ms-Grid-col ms-sm12 ms-lg12 ms-font-xxl row-delimiter-header">
          <div>
            <div>
              <Route path="/" component={AppNavigation} />

              <div className="Grid">
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/home" render={() => <h4>Home</h4>} />
                <Route path="/page1" component={HelpIcon} />
                <Route path="/page2" render={() => <h4>yet to develop</h4>} />
                <Route path="/page3" render={() => <h4>yet to develop</h4>} />
              </div>
            </div>
          </div>
          {/* User Detail Form */}
        </div>
        {/* {!userState.isFetched ? (
          <div>
            {this.props.store.user.error ? (
              <ErrorMessage
                error={"User Error " + this.props.store.user.error}
              />
            ) : (
              <Spinner size={SpinnerSize.large} />
            )}
          </div>
        ) : (
          <div className="ms-Grid">
            <FormRow
              label={appColumns.FirstName.Label}
              required={appColumns.FirstName.IsRequired}
              tooltip={appColumns.FirstName.ToolTip}
            >
              <TextField
                value={appState.firstName}
                onChanged={(value: any) => {
                  appState.firstName = value;
                  this.props.updateAppState(appState);
                }}
              />
            </FormRow>
            <FormRow
              label={appColumns.LastName.Label}
              required={appColumns.LastName.IsRequired}
            >
              <TextField
                value={appState.lastName}
                onChanged={(value: any) => {
                  appState.lastName = value;
                  this.props.updateAppState(appState);
                }}
              />
            </FormRow>
            <FormRow
              label={appColumns.AboutMe.Label}
              required={appColumns.AboutMe.IsRequired}
            >
              <TextField
                multiline
                resizable={false}
                value={appState.aboutMe}
                onChanged={(value: any) => {
                  appState.aboutMe = value;
                  this.props.updateAppState(appState);
                }}
              />
            </FormRow>
            <FormRow label="">
              <DefaultButton
                text={"Cancel"}
                className="right-aligned"
                onClick={() => {
                  window.history.back();
                }}
              />
              <AppPanel appState={this.props.store.app} />
            </FormRow>
          </div>
        )} */}
      </Fabric>
    );
  }
}
