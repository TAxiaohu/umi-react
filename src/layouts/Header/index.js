import React, { Component } from 'react';
import { Layout } from "antd";
import { connect } from "dva";
import Animate from 'rc-animate';
import router from 'umi/router';
import GlobalHeader from "@/components/GlobalHeader";
import defaultSettings from "@/common/defaultSettings";

import styles from "./index.less";

const { fixedHeader } = defaultSettings;

const { Header } = Layout;

@connect(({ user, global }) => ({
  currentUser: user.currentUser,
  collapsed: global.collapsed,
}))
class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true,
      };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll);
  }

  getHeadWidth = () => {
    const { collapsed } = this.props;
    if (!fixedHeader) {
      return '100%';
    }
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
  }

  handleMenuClick = ({ key }) => {
    const { dispatch } = this.props;
    if (key === 'userCenter') {
      router.push('/account/center');
      return;
    }
    if (key === 'userinfo') {
      router.push('/account/settings/base');
      return;
    }
    if (key === 'logout') {
      dispatch({
        type: 'login/logout',
      });
    }
  };

  handScroll = () => {
    const { visible } = this.state;
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({ visible: true })
        } else if (scrollTop > 300 && visible) {
          this.setState({
            visible: false,
          });
        } else if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true,
          });
        }
        this.oldScrollTop = scrollTop;
        this.ticking = false;
      })
    }
  }

  render() {
    const { handleMenuCollapse } = this.props;
    const { visible } = this.state;
    const width = this.getHeadWidth();
    return (
      <Animate component="" transitionName="fade">
        {visible ? (
          <Header
            style={{ padding: 0, width, zIndex: 2 }}
            className={fixedHeader ? styles.fixedHeader : ''}
          >
            <GlobalHeader
              onMenuClick={this.handleMenuClick}
              onCollapse={handleMenuCollapse}
              {...this.props}
            />
          </Header>
        ) : null}
      </Animate>
    );
  }
}

export default HeaderLayout;