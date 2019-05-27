import React, { Component } from 'react';
import { connect } from "dva";
import { Card } from "antd";
import ProductList from "@/components/ProductList";
import PageWrapper from "@/components/PageWrapper";

@connect(({ products }) => ({
  products,
}))
class products extends Component {

  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/delete',
      payload: id,
    })
  }

  render() {
    const { products: productsData } = this.props;
    return (
      <PageWrapper>
        <Card bordered={false} title="list">
          <ProductList onDelete={this.handleDelete} products={productsData} />
        </Card>
      </PageWrapper>
    );
  }
}

export default products;