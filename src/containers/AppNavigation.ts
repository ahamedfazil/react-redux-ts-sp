import IStore from "../store/IStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import AppNavigation, { IAppNavigationProps } from "../components/AppNavigation";
import { push } from "react-router-redux";

function mapStateToProps(store: IStore) {
  return {
    store: store
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
  return {
    onChangePath: (key: string) => {
      dispatch(push(key));
    }
  };
}

export default connect<{}, {}, IAppNavigationProps>(
    mapStateToProps,
    mapDispatchToProps
  )(AppNavigation) as React.ComponentClass<{}>;
