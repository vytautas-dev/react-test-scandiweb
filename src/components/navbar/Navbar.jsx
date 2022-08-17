import React, { Component } from 'react';
import CartModal from './cart-modal/CartOverlay';
import Categories from './categories/Categories';
import Currency from './currency/Currency';
import Logo from './logo/Logo';

import { CartAndCurrency, NavContainer } from './styles/nav';

export default class Navbar extends Component {
  render() {
    return (
      <NavContainer>
        <Categories />
        <Logo />
        <CartAndCurrency>
          <Currency />
          <CartModal />
        </CartAndCurrency>
      </NavContainer>
    );
  }
}
