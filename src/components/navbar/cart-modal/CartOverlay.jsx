import React from 'react';
import { connect } from 'react-redux';
import {
  CartItemCountShape,
  CartItemCountContent,
  CartIconContainer,
} from '../styles/cart';
import { ReactComponent as CartIcon } from '../../../assets/cart.svg';
import Overlay from './Overlay';
import CartModal from './CartModal';

class CartOverlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.totalItemCount = this.totalItemCount.bind(this);
    this.state = { showModal: false };
  }

  handleClick = () => {
    if (!this.state.showModal) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.handleClick();
  };

  totalItemCount(cart) {
    return [...cart].reduce((total, curr) => {
      total += curr.quantity;
      return total;
    }, 0);
  }

  render() {
    const { cart } = this.props;
    const cartItemCount = this.totalItemCount(cart);
    return (
      <div style={{ position: 'relative' }}>
        <CartIconContainer
          ref={(node) => {
            this.node = node;
          }}>
          <CartItemCountShape>
            <CartItemCountContent>{cartItemCount}</CartItemCountContent>
          </CartItemCountShape>

          <CartIcon onClick={this.handleClick} />
          {this.state.showModal && (
            <CartModal
              closeModal={() => this.handleClick()}
              totalItemCount={this.totalItemCount}
            />
          )}
        </CartIconContainer>
        {this.state.showModal && <Overlay />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
});

export default connect(mapStateToProps)(CartOverlay);
