import * as React from "react";
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { CONST } from "../../config/const";
import { autobind } from "@uifabric/utilities";
import { Link } from "office-ui-fabric-react/lib/Link";
import "../../styles/PS_table.scss";


export class ProjectMilestoneTable extends React.Component<
  IProjectDataProps,
  {}
> {
  constructor(props: IProjectDataProps) {
    super(props);
  }

  componentDidMount() {
    if (
      !this.props.store.project.projectData.projectMilestone.isFetched &&
      this.props.store.project.projectForm.isNewForm
    ) {
      this.props.getMilestoneInProgress();
      getMilestoneFromList(this.props, CONST.ProjectData.MilestoneListName, [
        CONST.ProjectData.Columns.FeG.Internal_Name,
        CONST.ProjectData.Columns.CSG.Internal_Name,
        CONST.ProjectData.Columns.CG.Internal_Name,
        CONST.ProjectData.Columns.DG.Internal_Name,
        CONST.ProjectData.Columns.FDG.Internal_Name,
        CONST.ProjectData.Columns.SPStart.Internal_Name
      ]);
    }
  }

  public render() {
    return (
      <div>
        {!this.props.projectMilestone.isFetched ? (
          this.props.projectMilestone.error ? (
            <ErrorMessage error={this.props.projectMilestone.error.message} />
          ) : (
            <Spinner size={SpinnerSize.large} />
          )
        ) : (
          <table className="pstable">
            <thead>
              <tr>
                <th className="feg">{CONST.ProjectData.Columns.FeG.Label}</th>
                <th className="csg-cg">
                  {CONST.ProjectData.Columns.CSG.Label}
                </th>
                <th className="csg-cg">{CONST.ProjectData.Columns.CG.Label}</th>
                <th className="dg-fdg">{CONST.ProjectData.Columns.DG.Label}</th>
                <th className="dg-fdg">
                  {CONST.ProjectData.Columns.FDG.Label}
                </th>
                <th className="sp-start">
                  {CONST.ProjectData.Columns.SPStart.Label}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <TextField
                      value={this.props.projectMilestone.FeG.YYWW}
                      validateOnFocusOut
                      onChanged={value => this.onChangeYYWW(value, "FeG")}
                      iconProps={{ iconName: "CalendarDay" }}
                      disabled={this.props.projectMilestone.isReadOnly}
                      placeholder={
                        this.props.projectMilestone.isReadOnly ? "" : "YYWW"
                      }
                      onGetErrorMessage={onErrorYYWW}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <TextField
                      value={this.props.projectMilestone.CSG.YYWW}
                      validateOnFocusOut
                      onChanged={value => this.onChangeYYWW(value, "CSG")}
                      iconProps={{ iconName: "CalendarDay" }}
                      disabled={this.props.projectMilestone.isReadOnly}
                      placeholder={
                        this.props.projectMilestone.isReadOnly ? "" : "YYWW"
                      }
                      onGetErrorMessage={onErrorYYWW}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <TextField
                      value={this.props.projectMilestone.CG.YYWW}
                      validateOnFocusOut
                      onChanged={value => this.onChangeYYWW(value, "CG")}
                      iconProps={{ iconName: "CalendarDay" }}
                      disabled={this.props.projectMilestone.isReadOnly}
                      placeholder={
                        this.props.projectMilestone.isReadOnly ? "" : "YYWW"
                      }
                      onGetErrorMessage={onErrorYYWW}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <TextField
                      value={this.props.projectMilestone.DG.YYWW}
                      validateOnFocusOut
                      onChanged={value => this.onChangeYYWW(value, "DG")}
                      iconProps={{ iconName: "CalendarDay" }}
                      disabled={this.props.projectMilestone.isReadOnly}
                      placeholder={
                        this.props.projectMilestone.isReadOnly ? "" : "YYWW"
                      }
                      onGetErrorMessage={onErrorYYWW}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <TextField
                      value={this.props.projectMilestone.FDG.YYWW}
                      validateOnFocusOut
                      onChanged={value => this.onChangeYYWW(value, "FDG")}
                      iconProps={{ iconName: "CalendarDay" }}
                      disabled={this.props.projectMilestone.isReadOnly}
                      placeholder={
                        this.props.projectMilestone.isReadOnly ? "" : "YYWW"
                      }
                      onGetErrorMessage={onErrorYYWW}
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <TextField
                      value={this.props.projectMilestone.SP_Start.YYWW}
                      validateOnFocusOut
                      onChanged={value => this.onChangeYYWW(value, "SP_Start")}
                      iconProps={{ iconName: "CalendarDay" }}
                      disabled={this.props.projectMilestone.isReadOnly}
                      placeholder={
                        this.props.projectMilestone.isReadOnly ? "" : "YYWW"
                      }
                      onGetErrorMessage={onErrorYYWW}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {this.props.projectMilestone.FeG.comment.map(fegitem => {
                    return (
                      <div key={fegitem.key} className="feg">
                        <TextField
                          key={fegitem.key}
                          value={
                            this.props.projectMilestone.FeG.comment[
                              this.keyFunction(fegitem.key, "FeG")
                            ].commentValue
                          }
                          onChanged={value =>
                            this.onChangeComment(fegitem.key, value, "FeG")
                          }
                          autoAdjustHeight
                          multiline
                          resizable={true}
                          borderless
                          disabled={this.props.projectMilestone.isReadOnly}
                          placeholder={
                            this.props.projectMilestone.isReadOnly
                              ? ""
                              : "Comment..."
                          }
                        />
                        {!this.props.projectMilestone.isReadOnly ? (
                          <div className="deleteComment">
                            <Link
                              onClick={e =>
                                this.handleRemoveRow(e, fegitem.key, "FeG")
                              }
                            >
                              <i
                                className={
                                  CONST.ProjectData.Columns.ButtonText
                                    .RemoveIcon
                                }
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  {!this.props.projectMilestone.isReadOnly ? (
                    <div className="addComment">
                      <Link onClick={e => this.handleAddRow(e, "FeG")}>
                        {CONST.ProjectData.Columns.ButtonText.Label}
                        <i
                          className={
                            CONST.ProjectData.Columns.ButtonText.AddIcon
                          }
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {this.props.projectMilestone.CSG.comment.map(csgitem => {
                    return (
                      <div key={csgitem.key} className="csg-cg">
                        <TextField
                          value={
                            this.props.projectMilestone.CSG.comment[
                              this.keyFunction(csgitem.key, "CSG")
                            ].commentValue
                          }
                          onChanged={value =>
                            this.onChangeComment(csgitem.key, value, "CSG")
                          }
                          autoAdjustHeight
                          multiline
                          resizable={true}
                          disabled={this.props.projectMilestone.isReadOnly}
                          borderless
                          placeholder={
                            this.props.projectMilestone.isReadOnly
                              ? ""
                              : "Comment..."
                          }
                        />
                        {!this.props.projectMilestone.isReadOnly ? (
                          <div className="deleteComment">
                            <Link
                              onClick={e =>
                                this.handleRemoveRow(e, csgitem.key, "CSG")
                              }
                            >
                              <i
                                className={
                                  CONST.ProjectData.Columns.ButtonText
                                    .RemoveIcon
                                }
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  {!this.props.projectMilestone.isReadOnly ? (
                    <div className="addComment">
                      <Link onClick={e => this.handleAddRow(e, "CSG")}>
                        {CONST.ProjectData.Columns.ButtonText.Label}
                        <i
                          className={
                            CONST.ProjectData.Columns.ButtonText.AddIcon
                          }
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {this.props.projectMilestone.CG.comment.map(cgitem => {
                    return (
                      <div key={cgitem.key} className="csg-cg">
                        <TextField
                          disabled={this.props.projectMilestone.isReadOnly}
                          value={
                            this.props.projectMilestone.CG.comment[
                              this.keyFunction(cgitem.key, "CG")
                            ].commentValue
                          }
                          onChanged={value =>
                            this.onChangeComment(cgitem.key, value, "CG")
                          }
                          autoAdjustHeight
                          multiline
                          resizable={true}
                          borderless
                          placeholder={
                            this.props.projectMilestone.isReadOnly
                              ? ""
                              : "Comment..."
                          }
                        />
                        {!this.props.projectMilestone.isReadOnly ? (
                          <div className="deleteComment">
                            <Link
                              onClick={e =>
                                this.handleRemoveRow(e, cgitem.key, "CG")
                              }
                            >
                              <i
                                className={
                                  CONST.ProjectData.Columns.ButtonText
                                    .RemoveIcon
                                }
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  {!this.props.projectMilestone.isReadOnly ? (
                    <div className="addComment">
                      <Link onClick={e => this.handleAddRow(e, "CG")}>
                        {CONST.ProjectData.Columns.ButtonText.Label}
                        <i
                          className={
                            CONST.ProjectData.Columns.ButtonText.AddIcon
                          }
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {this.props.projectMilestone.DG.comment.map(dgitem => {
                    return (
                      <div key={dgitem.key} className="dg-fdg">
                        <TextField
                          disabled={this.props.projectMilestone.isReadOnly}
                          value={
                            this.props.projectMilestone.DG.comment[
                              this.keyFunction(dgitem.key, "DG")
                            ].commentValue
                          }
                          onChanged={value =>
                            this.onChangeComment(dgitem.key, value, "DG")
                          }
                          autoAdjustHeight
                          multiline
                          resizable={true}
                          borderless
                          placeholder={
                            this.props.projectMilestone.isReadOnly
                              ? ""
                              : "Comment..."
                          }
                        />
                        {!this.props.projectMilestone.isReadOnly ? (
                          <div className="deleteComment">
                            <Link
                              onClick={e =>
                                this.handleRemoveRow(e, dgitem.key, "DG")
                              }
                            >
                              <i
                                className={
                                  CONST.ProjectData.Columns.ButtonText
                                    .RemoveIcon
                                }
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  {!this.props.projectMilestone.isReadOnly ? (
                    <div className="addComment">
                      <Link onClick={e => this.handleAddRow(e, "DG")}>
                        {CONST.ProjectData.Columns.ButtonText.Label}
                        <i
                          className={
                            CONST.ProjectData.Columns.ButtonText.AddIcon
                          }
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {this.props.projectMilestone.FDG.comment.map(fdgitem => {
                    return (
                      <div key={fdgitem.key} className="dg-fdg">
                        <TextField
                          disabled={this.props.projectMilestone.isReadOnly}
                          value={
                            this.props.projectMilestone.FDG.comment[
                              this.keyFunction(fdgitem.key, "FDG")
                            ].commentValue
                          }
                          onChanged={value =>
                            this.onChangeComment(fdgitem.key, value, "FDG")
                          }
                          autoAdjustHeight
                          multiline
                          resizable={true}
                          borderless
                          placeholder={
                            this.props.projectMilestone.isReadOnly
                              ? ""
                              : "Comment..."
                          }
                        />
                        {!this.props.projectMilestone.isReadOnly ? (
                          <div className="deleteComment">
                            <Link
                              onClick={e =>
                                this.handleRemoveRow(e, fdgitem.key, "FDG")
                              }
                            >
                              <i
                                className={
                                  CONST.ProjectData.Columns.ButtonText
                                    .RemoveIcon
                                }
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  {!this.props.projectMilestone.isReadOnly ? (
                    <div className="addComment">
                      <Link onClick={e => this.handleAddRow(e, "FDG")}>
                        {CONST.ProjectData.Columns.ButtonText.Label}
                        <i
                          className={
                            CONST.ProjectData.Columns.ButtonText.AddIcon
                          }
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {this.props.projectMilestone.SP_Start.comment.map(
                    spStartitem => {
                      return (
                        <div key={spStartitem.key} className="sp-start">
                          <TextField
                            disabled={this.props.projectMilestone.isReadOnly}
                            value={
                              this.props.projectMilestone.SP_Start.comment[
                                this.keyFunction(spStartitem.key, "SP_Start")
                              ].commentValue
                            }
                            onChanged={value =>
                              this.onChangeComment(
                                spStartitem.key,
                                value,
                                "SP_Start"
                              )
                            }
                            autoAdjustHeight
                            multiline
                            resizable={true}
                            borderless
                            placeholder={
                              this.props.projectMilestone.isReadOnly
                                ? ""
                                : "Comment..."
                            }
                          />
                          {!this.props.projectMilestone.isReadOnly ? (
                            <div className="deleteComment">
                              <Link
                                onClick={e =>
                                  this.handleRemoveRow(
                                    e,
                                    spStartitem.key,
                                    "SP_Start"
                                  )
                                }
                              >
                                <i
                                  className={
                                    CONST.ProjectData.Columns.ButtonText
                                      .RemoveIcon
                                  }
                                  aria-hidden="true"
                                />
                              </Link>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    }
                  )}
                  {!this.props.projectMilestone.isReadOnly ? (
                    <div className="addComment">
                      <Link onClick={e => this.handleAddRow(e, "SP_Start")}>
                        {CONST.ProjectData.Columns.ButtonText.Label}
                        <i
                          className={
                            CONST.ProjectData.Columns.ButtonText.AddIcon
                          }
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }

  @autobind
  private onChangeYYWW(value: string, key?: any) {
    const numCheck = /^[0-9\b]{0,4}$/;
    if (value === "" || numCheck.test(value)) {
      this.props.updateCommentYYWW(key, null, false, value);
    }
  }

  @autobind
  private keyFunction(keyVal: any, commentType: string) {
    let fullComments;
    switch (commentType) {
      case "FeG":
        fullComments = this.props.projectMilestone.FeG.comment;
        break;
      case "CSG":
        fullComments = this.props.projectMilestone.CSG.comment;
        break;
      case "CG":
        fullComments = this.props.projectMilestone.CG.comment;
        break;
      case "DG":
        fullComments = this.props.projectMilestone.DG.comment;
        break;
      case "FDG":
        fullComments = this.props.projectMilestone.FDG.comment;
        break;
      case "SP_Start":
        fullComments = this.props.projectMilestone.SP_Start.comment;
        break;
    }
    if (fullComments.length > 0) {
      const index = fullComments
        .map(function(indexVal) {
          return indexVal["key"];
        })
        .indexOf(keyVal);
      return index;
    }
  }

  @autobind
  private onChangeComment(key: any, value: any, commentType: string) {
    const index = this.keyFunction(key, commentType);
    this.props.updateCommentYYWW(commentType, index, true, value);
  }

  @autobind
  private handleAddRow(e: any, commentType: string) {
    e.preventDefault();
    const initialVal: any = CONST.ProjectData.DefaultValues.PS_Empty_Comments();
    this.props.createComment(commentType, initialVal);
  }

  @autobind
  private handleRemoveRow(e: any, key: any, commentType: string) {
    e.preventDefault();
    const index: number = this.keyFunction(key, commentType);
    if (index > -1) {
      this.props.removeComment(commentType, index);
    }
  }
}
