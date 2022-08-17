import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ItemContainer,
  ItemName,
  ItemPrice,
  ItemTop,
  OutOfStockOverlay,
  OutOfStockText,
  ProductImage,
  ProductImageContainer,
} from './styles/list';
import { StyledLink } from '../navbar/styles/nav';
import BtnCart from './BtnCart';
import { loadCurrentItem, addToCart } from '../../actions';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.mouseOn = this.mouseOn.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
  }

  mouseOn() {
    this.setState({ hover: true });
  }

  mouseOff() {
    this.setState({ hover: false });
  }

  addToCart(item) {
    const { add } = this.props;
    const { attributes } = item;
    if (attributes.length > 0) {
      const format = attributes.map((attr) => {
        const { id, name, type, items } = attr;
        const item = items.find((attr) => ({ item: attr }));
        return (attr = { item, type, id, name });
      });
      const newItem = Object.assign({}, { item }, { savedAttribute: format });
      add(newItem);
    } else {
      const newItem = Object.assign({}, { item: item });
      add(newItem);
    }
  }

  render() {
    const { item } = this.props;
    const { id, sendItem, index, currency } = this.props;

    return (
      <ItemContainer
        key={index}
        onMouseOver={this.mouseOn}
        onMouseLeave={this.mouseOff}>
        <ItemTop>
          <StyledLink to={`/products/${id}`}>
            <ProductImageContainer onClick={() => sendItem(item)}>
              <ProductImage src={item.gallery[0]} />
            </ProductImageContainer>
            {!item.inStock && (
              <OutOfStockOverlay>
                <OutOfStockText>out of stock</OutOfStockText>
              </OutOfStockOverlay>
            )}
          </StyledLink>
          {this.state.hover && item.inStock && (
            <BtnCart onClick={() => this.addToCart(item)} />
          )}
        </ItemTop>
        <ItemName>
          {item.brand} {item.name}
        </ItemName>
        <ItemPrice>
          {item.prices[currency].currency.symbol}
          {item.prices[currency].amount}
        </ItemPrice>
      </ItemContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.cart.currency,
});

const mapDispatchToProps = (dispatch) => ({
  sendItem: (item) => dispatch(loadCurrentItem(item)),
  add: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
