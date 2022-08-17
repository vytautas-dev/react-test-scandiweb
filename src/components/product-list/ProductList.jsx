import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendProducts } from '../../actions';
import client from '../../queries/apolloClient';
import { getItemsByCategory } from '../../queries/queries';
import { ProductsContainer, Title } from './styles/list';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = { hover: false, products: [] };
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchProducts();
    }
  }

  async fetchProducts() {
    const { sendProducts } = this.props;
    const result = await client.query({
      query: getItemsByCategory,
      variables: {
        title: this.props.category,
      },
    });
    this.setState({ products: result.data.category.products });
    sendProducts(result.data.category.products);
  }

  render() {
    const { currentCurrency } = this.props;
    return (
      <>
        <Title>{this.props.category}</Title>
        <ProductsContainer>
          {this.state.products &&
            this.state.products.map((item, index) => (
              <ProductCard
                key={index}
                index={index}
                item={item}
                id={item.id}
                prices={item.prices[currentCurrency].currency}
                amount={item.prices[currentCurrency].amount}
              />
            ))}
        </ProductsContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.cart.currency,
  category: state.cart.category,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (state) => dispatch(sendProducts(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
