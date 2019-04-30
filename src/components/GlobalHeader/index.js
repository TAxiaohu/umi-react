import React, { PureComponent } from 'react';
import { connect } from "dva";
import { Dropdown, Menu, Icon, Spin, Avatar } from "antd";
import Debounce from "lodash-decorators/debounce";
import { handleAvatarPreview } from "@/utils/utils";

import styles from "./index.less";

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class GlobalHeader extends PureComponent {
  componentWillMount() {
    this.triggerResizeEvent.cancel();
  }

  @Debounce(600)
  triggerResizeEvent() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event)
  }

  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  }

  renderCurrentUser = () => {
    const { currentUser, onMenuClick } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          个人中心
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    if (currentUser && currentUser.name) {
      return (
        <Dropdown overlay={menu} overlayClassName={styles.container}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar
              size="small"
              className={styles.avatar}
              src={handleAvatarPreview(currentUser.avatar)}
              alt="avatar"
            />
            <span className={styles.name}>{currentUser.name}</span>
          </span>
        </Dropdown>
      )
    }
    return (
      <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
    )
  }

  render() {
    const { collapsed } = this.props;

    return (
      <div className={styles.header}>
        <span className={styles.trigger} onClick={this.toggle}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
        <div className={styles.right}>
          {this.renderCurrentUser()}
        </div>
      </div>
    );
  }
}

export default GlobalHeader;