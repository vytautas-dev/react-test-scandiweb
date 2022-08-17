import React, { Component } from 'react';
import client from '../../../queries/apolloClient';
import { connect } from 'react-redux';
import { getCurrencies } from '../../../queries/queries';
import { SelectCurrency } from '../styles/currency';
import { ReactComponent as DownArrow } from '../../../assets/down.svg';
import { ReactComponent as UpArrow } from '../../../assets/up.svg';
import { sendCurrency } from '../../../actions';

class Currency extends Component {
  constructor() {
    super();
    this.fetchCurrency = this.fetchCurrency.bind(this);
    this.state = {
      currencies: [],
      showModal: false,
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
    document.removeEventListener('click', this.closeModal);
  };

  componentDidMount() {
    this.fetchCurrency();
    document.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {}

  handleClick = (e) => {
    if (this.state.showModal) {
      this.closeModal();
      return;
    }
    this.setState({ showModal: true });
    e.stopPropagation();
  };

  async fetchCurrency() {
    const result = await client.query({
      query: getCurrencies,
    });
    document.addEventListener('click', this.closeModal);
    this.setState({ currencies: result.data.currencies });
  }

  render() {
    const { selected, sendCurrency } = this.props;
    return (
      <SelectCurrency onClick={this.handleClick} active={this.state.showModal}>
        <span>
          {this.state.currencies[selected] &&
            this.state.currencies[selected].symbol}
          {this.state.showModal ? <UpArrow /> : <DownArrow />}
        </span>
        <div id='options'>
          {this.state.showModal &&
            this.state.currencies.map((item, index) => (
              <span onClick={() => sendCurrency(index)} key={index}>
                {item.symbol} {item.label}
              </span>
            ))}
        </div>
      </SelectCurrency>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCurrency: (state) => dispatch(sendCurrency(state)),
});

const mapStateToProps = (state) => ({
  selected: state.cart.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
