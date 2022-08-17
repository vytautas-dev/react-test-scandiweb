import React from 'react';
import { connect } from 'react-redux';
import { addToCart, changeAttribute, removeFromCart } from '../../../actions';
import {
  Actions,
  AttrButton,
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
  CartName,
  CountControl,
  ImageContainer,
  ItemContainer,
  ItemCount,
  ItemImage,
  ItemName,
  ItemNameLink,
  ItemPrice,
  ModalContainer,
  NameAndPriceAndAttr,
  Wrap,
} from '../styles/cart';
import Attributes from './Attributes';
import FooterBtns from './FooterBtns';
import TotalPrice from './TotalPrice';

class CartModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { item: [] };
  }

  componentDidMount() {
    this.setState({ item: this.props.cart });
  }
  componentDidUpdate(prevState) {
    if (this.props.cart !== prevState.cart)
      this.setState({ item: this.props.cart });
  }

  saveAttribute(attr) {
    const { attr: attribute, itemID } = attr;
    const { item } = this.state;
    this.props.change(attribute, item[itemID]);
  }

  getTotalPrice(cart) {
    const { currency } = this.props;
    const totalPrice = cart.reduce((total, curr) => {
      const price = curr.item.prices[currency].amount * curr.quantity;
      return (total += price);
    }, 0);
    return Math.round(totalPrice * 100) / 100;
  }

  handleRemove({ item }) {
    const { remove } = this.props;
    remove(item);
  }

  handleIncrease({ item }) {
    const { send } = this.props;
    send(item);
  }

  totalItemCount(cart) {
    return [...cart].reduce((total, curr) => {
      total += curr.quantity;
      return total;
    }, 0);
  }

  render() {
    const { cart, closeModal, currency } = this.props;
    const totalItems = this.totalItemCount(cart);
    const total = this.getTotalPrice(cart);

    return (
      <ModalContainer>
        <div style={{ margin: '20px 0 20px 0' }}>
          <CartName>My Bag,</CartName>
          &nbsp;
          <ItemCount>{totalItems} items</ItemCount>
        </div>
        <Wrap>
          {cart !== undefined &&
            cart.map((item, index) => (
              <ItemContainer key={index}>
                <NameAndPriceAndAttr>
                  <ItemNameLink to={`/products/${item.item.id}`}>
                    <ItemName>{item.item.name}</ItemName>
                  </ItemNameLink>
                  <ItemPrice>
                    {`${item.item.prices[currency].currency.symbol} ${item.item.prices[0].amount}`}
                  </ItemPrice>
                  <Attributes
                    item={item.item}
                    Container={AttributesContainer}
                    AttLabel={AttributeGroupName}
                    LabelGroup={AttributeGroup}
                    chosenAttributes={item.savedAttribute}
                    Button={AttrButton}
                    handleClick={this.saveAttribute}
                    itemID={index}
                  />
                </NameAndPriceAndAttr>

                <Actions>
                  <CountControl onClick={() => this.handleIncrease({ item })}>
                    +
                  </CountControl>
                  <span>{item.quantity}</span>
                  <CountControl onClick={() => this.handleRemove({ item })}>
                    -
                  </CountControl>
                </Actions>
                <ImageContainer>
                  <ItemImage src={item.item.gallery[0]} />
                </ImageContainer>
              </ItemContainer>
            ))}
        </Wrap>
        <TotalPrice totalPrice={Math.round(total * 100) / 100} />
        <FooterBtns closeModal={closeModal} />
      </ModalContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
