import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText)) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
export default ProductTable;
