import React, { Component, Suspense } from 'react';
import { Layout } from "antd";
import classNames from 'classnames';
import Link from 'umi/link';
import defaultSettings from "@/common/defaultSettings";
import PageLoading from '@/components/PageLoading';
import BaseMenu from './BaseMenu';
import { getFlatMenuKeys, getDefaultCollapsedSubMenus } from "./SiderMenuUtils";
import styles from "./index.less";

const { theme, breakpoint, fixSiderbar, title } = defaultSettings;
let firstMount = true;

class SiderMenu extends Component {

  constructor(props) {
    super(props);
    const flatMenuKeys = getFlatMenuKeys(props.menuData);
    const params = {
      ...props,
      flatMenuKeys,
    }
    this.state = {
      flatMenuKeys,
      openKeys: getDefaultCollapsedSubMenus(params),
    };
  }

  componentDidMount() {
    firstMount = false;
  }

  static getDerivedStateFromProps(props, state) {
    const { pathname, flatMenuKeysLen } = state;
    const flatMenuKeys = state.flatMenuKeys.length ? state.flatMenuKeys : getFlatMenuKeys(props.menuData);
    if (props.location.pathname !== pathname || flatMenuKeys.length !== flatMenuKeysLen) {
      const params = {
        ...props,
        flatMenuKeys,
      }
      return {
        flatMenuKeys,
        pathname: props.location.pathname,
        flatMenuKeysLen: flatMenuKeys.length,
        openKeys: getDefaultCollapsedSubMenus(params),
      };
    }
    return null;
  }

  isMainMenu = key => {
    const { menuData } = this.props;
    return menuData.some(item => {
      if (key) {
        return item.key === key || item.path === key;
      }
      return false;
    });
  };

  handleOpenChange = (openKeys) => {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    });
  }

  render() {
    const { logo, collapsed, onCollapse } = this.props;
    const { openKeys, flatMenuKeys } = this.state;
    const defaultProps = collapsed ? {} : { openKeys };
    const siderClassName = classNames(styles.sider, {
      [styles.fixSiderBar]: fixSiderbar,
      [styles.light]: theme === 'light',
    });
    return (
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint={breakpoint}
        onCollapse={collapse => {
          if (firstMount) {
            onCollapse(collapse);
          }
        }}
        width={256}
        theme={theme}
        className={siderClassName}
      >
        <div className={styles.logo} id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>{title}</h1>
          </Link>
        </div>
        <Suspense fallback={<PageLoading />}>
          <BaseMenu
            {...this.props}
            flatMenuKeys={flatMenuKeys}
            handleOpenChange={this.handleOpenChange}
            onOpenChange={this.handleOpenChange}
            {...defaultProps}
          />
        </Suspense>
      </Layout.Sider>
    );
  }
}

export default SiderMenu;