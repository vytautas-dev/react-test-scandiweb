import React, { Component } from 'react';
import ProductList from '../components/product-list/ProductList';
import { Container } from '../components/navbar/styles/nav';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ProductList />
      </Container>
    );
  }
}
