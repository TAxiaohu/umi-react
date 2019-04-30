import React, { Component } from 'react';
import { Layout } from "antd";
import { connect } from "dva";
// import Media from 'react-media';
import { ContainerQuery } from 'react-container-query';
import pathToRegexp from 'path-to-regexp';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import logo from '@/assets/logo.svg';
import defaultSettings from '@/common/defaultSettings';
import SiderMenu from '@/components/SiderMenu';
import Header from '../Header';
import Footer from '../Footer';

import styles from "./index.less";

// const SettingDrawer = React.lazy(() => import('@/components/SettingDrawer'));
const { fixedHeader, fixSiderbar } = defaultSettings;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

// @connect(({ menuModel, global }) => ({
//   collapsed: global.collapsed,
//   menuData: menuModel.menuData,
// }))
class BasicLayout extends Component {

  // renderSettingDrawer = () => {
  //   return <SettingDrawer />;
  // };

  componentDidMount() {
    const { dispatch, route: { routes, path, authority } } = this.props;
    dispatch({
      type: 'user/fetchCurrentUser',
    });
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, path, authority },
    });
  }

  getLayoutStyle = () => {
    const { collapsed } = this.props;
    if (fixSiderbar) {
      return {
        paddingLeft: collapsed ? '80px' : '256px',
      };
    }
    return null;
  };

  getPageTitle = () => {
    const { route, location } = this.props;
    const { pathname } = location;
    let title = '...';
    let currRouterData = null;
    // match params path
    Object.keys(route).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = route[key];
      }
    });
    if (currRouterData && currRouterData.name) {
      title = `${currRouterData.name} - ...`;
    }
    return title;
  }

  handleMenuCollapse = collapsed => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };

  render() {
    const { menuData, children } = this.props;
    const contentStyle = !fixedHeader ? { paddingTop: 0 } : {};
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => (
            <div className={classNames(params)}>
              <Layout>
                <SiderMenu
                  logo={logo}
                  onCollapse={this.handleMenuCollapse}
                  menuData={menuData}
                  {...this.props}
                />
                <Layout style={{
                  ...this.getLayoutStyle(),
                  minHeight: '100vh',
                }}
                >
                  <Header
                    menuData={menuData}
                    handleMenuCollapse={this.handleMenuCollapse}
                    logo={logo}
                    {...this.props}
                  />
                  <Layout.Content className={styles.content} style={contentStyle}>
                    {children}
                  </Layout.Content>
                  <Footer />
                </Layout>
              </Layout>
            </div>
          )}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}
export default connect(({ menu, global }) => ({
  collapsed: global.collapsed,
  menuData: menu.menuData,
}))(BasicLayout);

// export default (props => (
//   <Media query="(max-width: 599px)">
//     <BasicLayout {...props} />
//   </Media>
// ));