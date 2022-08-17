import React from 'react';
import { connect } from 'react-redux';
import { addToCart, changeAttribute, removeFromCart } from '../../actions';
import Attributes from '../attributes/Attributes';
import {
  AttributeButton,
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
} from '../attributes/styles/attributes';
import { ItemNameLink } from '../navbar/styles/cart';
import { Title } from '../product-list/styles/list';
import { ProductBrand, ProductPrice } from '../product/styles/product';
import CartGallery from './CartGallery';
import {
  CartContainer,
  CartCountButton,
  CartItemActionsContainer,
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemName,
  OrderButton,
  Summary,
} from './styles/cart';

class CartDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      tax: 21,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
  }

  componentDidMount() {
    this.setState({ item: this.props.cart });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.setState({ item: this.props.cart });
    }
  }

  handleRemove({ item }) {
    const { remove } = this.props;
    remove(item);
  }

  handleIncrease({ item }) {
    const { send } = this.props;
    send(item);
  }

  saveAttribute(attr) {
    const { attr: attribute, itemID } = attr;
    const { item } = this.state;
    this.props.change(attribute, item[itemID]);
  }

  totalItemCount(cart) {
    return [...cart].reduce((total, curr) => {
      total += curr.quantity;
      return total;
    }, 0);
  }

  getTotalPrice(cart) {
    const { currency } = this.props;
    const totalPrice = cart.reduce((total, curr) => {
      const price = curr.item.prices[currency].amount * curr.quantity;
      return (total += price);
    }, 0);
    return Math.round(totalPrice * 100) / 100;
  }

  render() {
    const { currency, cart } = this.props;
    const { tax } = this.state;
    const totalItems = this.totalItemCount(cart);
    const total = this.getTotalPrice(cart);
    const withTax = parseInt(((total * tax) / 100).toFixed(2));
    const symbol = this.props.cart.map((item) => {
      return item.item.prices[currency].currency.symbol;
    });

    return (
      <>
        <Title style={{ textTransform: 'uppercase', fontWeight: '700' }}>
          Cart
        </Title>
        <CartContainer>
          {this.props.cart &&
            this.props.cart.map((item, index) => (
              <div key={index} className='cart-item-index'>
                <CartItemContainer>
                  <CartItemDetailsContainer>
                    <ItemNameLink to={`/products/${item.item.id}`}>
                      <ProductBrand>{item.item.brand}</ProductBrand>
                      <CartItemName>{item.item.name}</CartItemName>
                    </ItemNameLink>
                    <ProductPrice>{`${symbol[0]} ${item.item.prices[currency].amount}`}</ProductPrice>
                    <Attributes
                      item={item.item}
                      Container={AttributesContainer}
                      AttLabel={AttributeGroupName}
                      LabelGroup={AttributeGroup}
                      chosenAttributes={item.savedAttribute}
                      Button={AttributeButton}
                      handleClick={this.saveAttribute}
                      itemID={index}
                    />
                  </CartItemDetailsContainer>
                  <CartItemActionsContainer>
                    <CartCountButton
                      value={item}
                      onClick={() => this.handleIncrease({ item })}>
                      +
                    </CartCountButton>
                    <h3>{item.quantity}</h3>
                    <CartCountButton
                      value={item}
                      onClick={() => this.handleRemove({ item })}>
                      -
                    </CartCountButton>
                  </CartItemActionsContainer>

                  <CartGallery images={item.item.gallery} />
                </CartItemContainer>
              </div>
            ))}
          <Summary>
            <li>
              Tax {tax}%:
              <span>
                {' '}
                {symbol[0]}
                {withTax}
              </span>
            </li>
            <li>
              Quantity: <span>{totalItems}</span>
            </li>
            <li>
              Total:
              <span>
                {' '}
                {symbol[0]}
                {total}
              </span>
            </li>
            <OrderButton>Order</OrderButton>
          </Summary>
        </CartContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  currency: state.cart.currency,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (state) => dispatch(removeFromCart(state)),
  send: (state) => dispatch(addToCart(state)),
  change: (attr, id) => dispatch(changeAttribute(attr, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
