import React, { Component } from 'react';
import { Table, Popconfirm, Button } from "antd";

export default class index extends Component {
  render() {
    const { onDelete, products } = this.props;
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    }];
    return (
      <Table
        dataSource={products}
        columns={columns}
      />
    );
  }
}