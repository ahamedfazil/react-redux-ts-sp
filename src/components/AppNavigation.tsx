import * as React from "react";
import { Dispatch } from "react-redux";
import { RouterState } from "react-router-redux";
import { CommandBar } from "office-ui-fabric-react";

export interface IAppNavigationProps {
  onChangePath: (key: string) => Dispatch<RouterState>;
}

export default class AppNavigation extends React.Component<IAppNavigationProps, {}> {
  constructor(props: IAppNavigationProps) {
    super(props);
  }

  public render(): JSX.Element {
    let isAdmin = true;
    const menuItems = [
      {
        key: "home",
        name: "Home",
        iconProps: {
          iconName: "Home"
        },
        onClick: (event: any, item: any) => {
          this.props.onChangePath(item.key);
        }
      },
      {
        name: "Add New",
        iconProps: {
          iconName: "Add"
        },
        key: "form",
        subMenuProps: {
          items: [
            {
              name: "Page 1",
              key: "page1",
              iconProps: {
                iconName: "NewTeamProject"
              },
              className: isAdmin ? "" : "hidden",
              onClick: (event: any, item: any) => {
                this.props.onChangePath(item.key);
              }
            },
            {
              name: "Page 2",
              key: "/page2",
              iconProps: {
                iconName: "ProjectCollection"
              },
              onClick: (event: any, item: any) => {
                this.props.onChangePath(item.key);
              }
            }
          ]
        }
      }
    ];
    return (
      <nav>
        <CommandBar items={menuItems} />
      </nav>
    );
  }
}
