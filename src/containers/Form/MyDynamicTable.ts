import * as Actions from "../../actions/Actions";
import IStore from "../../store/IStore";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IAppProps } from "../../models/IAppProps";
import { MyDynamicTable } from "../../components/Form/MyDynamicTable";


function mapStateToProps(store: IStore) {
  return {
    store: store
  };
}

function mapDispatchToProps(dispatch: Dispatch<IStore>) {
  return {
    createRow: bindActionCreators(Actions.createRow, dispatch),
    updateRow: bindActionCreators(Actions.updateRow, dispatch),
    removeRow: bindActionCreators(Actions.removeRow, dispatch),
  };
}

export default connect<{}, {}, IAppProps>(
  mapStateToProps,
  mapDispatchToProps
)(MyDynamicTable) as React.ComponentClass<{}>;
