import React from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Attributes from '../components/attributes/Attributes';
import {
  AttributeButton,
  AttributeGroup,
  AttributeGroupName,
  AttributesContainer,
} from '../components/attributes/styles/attributes';
import { ProductImage } from '../components/product-list/styles/list';
import Gallery from '../components/product/Gallery';
import {
  Button,
  Description,
  DetailsContainer,
  ImagesProductContainer,
  ProductBrand,
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductPriceLabel,
} from '../components/product/styles/product';
import client from '../queries/apolloClient';
import { getItemsById } from '../queries/queries';

class Product extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getProduct = this.getProduct.bind(this);
    this.mapProduct = this.mapProduct.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.state = {
      item: {},
      chosenImage: [],
      savedAttributes: [],
      prices: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  mapProduct() {
    if (this.state.item) {
      this.setState((prevState) => {
        const emptyAttrs = this.state.item.attributes.map((attr) => {
          return {
            id: attr.id,
            name: attr.name,
            type: attr.type,
            item: null,
          };
        });
        return { ...prevState, savedAttributes: emptyAttrs };
      });
      this.setState({ chosenImage: this.state.item.gallery[0] });
    }
  }

  handleAddToCart() {
    const { send } = this.props;
    const { savedAttributes, item: prod } = this.state;
    const notNull = this.state.savedAttributes.every(
      (att) => att.item !== null
    );
    if (notNull) {
      let cu = {};
      cu.savedAttribute = savedAttributes;
      cu.item = prod;
      send(cu);
    } else {
      Swal.fire('Please select the attribute for your item');
    }
  }

  saveAttribute({ attr }) {
    const attributes = this.state.savedAttributes.map((i) => {
      if (i.id === attr.id) {
        return {
          ...i,
          item: attr.item,
        };
      }
      return { ...i };
    });
    this.setState({ savedAttributes: attributes });
  }

  async getProduct() {
    const response = await client.query({
      query: getItemsById,
      variables: {
        id: this.props.params.id,
      },
    });
    this.setState({ item: response.data.product }, () => this.mapProduct());
  }

  makeActive(img) {
    if (this.state.chosenImage !== img) {
      this.setState({ chosenImage: img });
    }
  }

  render() {
    const { savedAttributes, item } = this.state;
    const { currency } = this.props;
    return (
      <ProductContainer>
        {item && item.gallery && (
          <>
            <ImagesProductContainer>
              <Gallery images={item.gallery} change={this.makeActive} />
              <ProductImage src={this.state.chosenImage} />
            </ImagesProductContainer>
            <DetailsContainer>
              <ProductBrand> {item.brand} </ProductBrand>
              <ProductName> {item.name} </ProductName>
              <Attributes
                item={item}
                Container={AttributesContainer}
                AttLabel={AttributeGroupName}
                LabelGroup={AttributeGroup}
                chosenAttributes={savedAttributes}
                Button={AttributeButton}
                handleClick={this.saveAttribute}
              />
              <ProductPriceLabel>PRICE:</ProductPriceLabel>
              <ProductPrice>
                {item.prices[currency].currency.symbol}
                {item.prices[currency].amount}
              </ProductPrice>
              <Button
                onClick={() => this.handleAddToCart()}
                inStock={item.inStock}>
                {item.inStock ? 'add to cart' : 'out of stock'}
              </Button>
              <Description
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}></Description>
            </DetailsContainer>
          </>
        )}
      </ProductContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.cart.currency,
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  send: (state) => dispatch(addToCart(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
