import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
class FilterProductTable extends Component {
  render() {
    const PRODUCTS = [
      {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football'
      },
      {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball'
      },
      {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball'
      },
      {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch'
      },
      {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5'
      },
      {
        category: 'Electronics',
        price: '$199.99',
        stocked: true,
        name: 'Nexus 7'
      }
    ];
    return (
      <div>
        <SearchBar />
        <ProductTable  products = {PRODUCTS}/>
      </div>
    );
  }
}
export default FilterProductTable;
