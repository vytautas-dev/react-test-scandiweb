import React, { PureComponent } from 'react';

import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { AddToCartButton } from './styles/list';

export default class AddToCart extends PureComponent {
  render() {
    return (
      <AddToCartButton onClick={this.props.onClick}>
        <CartIcon />
      </AddToCartButton>
    );
  }
}
