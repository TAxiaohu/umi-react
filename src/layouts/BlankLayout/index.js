import React, { Component } from 'react';
import styles from "./index.less";

class BlankLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.normal}>
        {children}
      </div>
    );
  }
}

export default BlankLayout;