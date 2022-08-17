import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TotalPriceContainer,
  TotalPriceCost,
  TotalPriceTotal,
} from '../styles/cart';

class TotalPrice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }
  componentDidMount() {
    const { cart } = this.props;
    const item = cart.find((item) => item);
    this.setState({ item });
  }
  render() {
    const { totalPrice, currency } = this.props;
    const { item } = this.state;
    return (
      <TotalPriceContainer>
        {item !== undefined && item.item && (
          <>
            <TotalPriceTotal>Total: </TotalPriceTotal>
            <TotalPriceCost>
              {`${item.item.prices[currency].currency.symbol}${totalPrice}`}
            </TotalPriceCost>
          </>
        )}
      </TotalPriceContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.cart.currency,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(TotalPrice);
