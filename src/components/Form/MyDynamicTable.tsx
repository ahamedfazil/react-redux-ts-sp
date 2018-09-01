import * as React from "react";
import { CONST } from "../../config/const";
import { autobind } from "@uifabric/utilities/lib";
import { Link } from "office-ui-fabric-react/lib/Link";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { IAppProps } from "../../models/IAppProps";
import { IAppTable } from "../../models/IAppState";

export class MyDynamicTable extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    let appTable: IAppTable[] = this.props.store.app.appTable;
    return (
      <div className="container">
        <ul className="responsive-table">
          <li className="table-header ms-font-m">
            <div className="col col-0" />
            <div className="col col-1">{CONST.app.Column.Column1.Label}</div>
            <div className="col col-2">{CONST.app.Column.Column2.Label}</div>
            <div className="col col-3">{CONST.app.Column.Column3.Label}</div>
          </li>
          {appTable.map(col => {
            const index = this.keyFunction(col.key);
            return (
              <li key={col.key} className="table-row">
                <div className="col col-0">
                  {index !== 0 && (
                    <Link onClick={e => this.handleRemoveRow(e, col.key)}>
                      <i
                        className="ms-Icon ms-Icon--Delete"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </div>
                <div className="col col-1">
                  <TextField
                    key={col.key}
                    autoAdjustHeight={true}
                    value={col.value.Col1}
                    onChanged={value => {
                      this.props.updateRow(index, "Col1", value);
                    }}
                  />
                </div>
                <div className="col col-2">
                  <TextField
                    key={col.key}
                    value={col.value.Col2}
                    onChanged={value => {
                      this.props.updateRow(index, "Col2", value);
                    }}
                  />
                </div>
                <div className="col col-3" data-label="Amount">
                  <TextField
                    multiline
                    rows={6}
                    key={col.key}
                    value={col.value.Col3}
                    onChanged={value => {
                      this.props.updateRow(index, "Col3", value);
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="addComment">
          <Link onClick={e => this.handleAddRow(e)}>
            Add New Row
            <i className="ms-Icon ms-Icon--CommentAdd" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }

  @autobind
  private keyFunction(keyVal: any) {
    if (keyVal) {
      const index = this.props.store.app.appTable
        .map(function(indexVal: any) {
          return indexVal["key"];
        })
        .indexOf(keyVal);
      return index;
    } else {
      return null;
    }
  }

  @autobind
  private handleAddRow(e: any) {
    e.preventDefault();
    const initialVal: any = CONST.app.DefaultValues.Table_Empty_Column();
    this.props.createRow(initialVal);
  }

  @autobind
  private handleRemoveRow(e: any, key: any) {
    e.preventDefault();
    const index: number = this.keyFunction(key);
    if (index) {
      this.props.removeRow(index);
    }
  }
}
