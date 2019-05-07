import React, { Component } from 'react';
import Breadcrumbs from "../Breadcrumbs";
import styles from "./index.less";

class PageWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.pageHeader}>
          <Breadcrumbs />
        </div>
        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
    );
  }
}

export default PageWrapper;