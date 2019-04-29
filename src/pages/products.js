import React, { Component } from 'react';
import { connect } from "dva";
import ProductList from "../components/ProductList";

@connect(({products}) => ({
  products,
}))
class products extends Component {

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    })
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} products={products} />
      </div>
    );
  }
}

export default products;