import React, { Component } from 'react';
import { connect } from "dva";
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
    const { products:productsData } = this.props;
    return (
      <PageWrapper>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} products={productsData} />
      </PageWrapper>
    );
  }
}

export default products;