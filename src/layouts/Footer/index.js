import React, { Component } from 'react';
import { Layout, Icon } from "antd";

import styles from "./index.less";

const { Footer } = Layout;

const links = [
  {
    key: 'home',
    title: '首页',
    href: window.origin,
    blankTarget: true,
  },
  {
    key: 'github',
    title: <Icon type="github" />,
    href: 'https://github.com/TAxiaohu/umi-react',
    blankTarget: true,
  },
  {
    key: 'me',
    title: '胡',
    href: 'https://github.com/TAxiaohu',
    blankTarget: true,
  },
]

export default class FooterView extends Component {
  render() {
    return (
      <Footer style={{ padding: 0 }}>
        <footer className={styles.globalFooter}>
          <div className={styles.links}>
            {links.map(i => (
              <a
                key={i.key}
                title={i.key}
                target={i.blankTarget ? '_blank' : '_self'}
                href={i.href}
              >
                {i.title}
              </a>
            ))}
          </div>
          <div className={styles.copyright}>
            <>
              Copyright <Icon type="copyright" /> 2019
            </>
          </div>
        </footer>
      </Footer>
    );
  }
}
