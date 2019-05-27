import React, { Component } from 'react';
import NavLink from 'umi/navlink';
import { Breadcrumb } from "antd";
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import routerConfig from "../../../config/router.config";
import { flattenRouter } from "@/utils/utils";

const newRoutes = flattenRouter(routerConfig);
const routes = newRoutes.map(i => ({
  ...i,
  breadcrumb: i.name || '首页',
}));

class Breakcrumbs extends Component {
  render() {
    const { breadcrumbs } = this.props;
    return (
      <div style={{ marginBottom: 16 }}>
        <Breadcrumb>
          {breadcrumbs.map(({ match, breadcrumb, name, icon }, index) => (
            <Breadcrumb.Item key={match.url}>
              {!icon && index !== breadcrumbs.length - 1 ? (
                <NavLink to={match.url}>
                  {name || breadcrumb}
                </NavLink>
              ) : name || breadcrumb}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }
}

export default withBreadcrumbs(routes)(Breakcrumbs);