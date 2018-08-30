import IStore from "../store/IStore";
import * as Actions from "../actions/Actions";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { App } from "../components/App";
import { IAppProps } from "../models/IAppProps";

function mapStateToProps(store: IStore) {
  return {
    store: store
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
  return {
    getCurrentUserInProgress: bindActionCreators(
      Actions.getCurrentUserInProgress,
      dispatch
    ),
    getCurrentUserSuccess: bindActionCreators(
      Actions.getCurrentUserSuccess,
      dispatch
    ),
    getCurrentUserError: bindActionCreators(
      Actions.getCurrentUserError,
      dispatch
    ),
    getAppState: bindActionCreators(Actions.getAppState, dispatch),
    updateAppState: bindActionCreators(Actions.updateAppState, dispatch),
    errorAppState: bindActionCreators(Actions.errorAppState, dispatch)
  };
}

export default connect<{}, {}, IAppProps>(
  mapStateToProps,
  mapDispatchToProps
)(App) as React.ComponentClass<{}>;
