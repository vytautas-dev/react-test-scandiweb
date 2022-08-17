import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckOutButton,
  ModalFooterContainer,
  ViewBagButton,
} from '../styles/cart';

export default class FooterBtns extends PureComponent {
  render() {
    return (
      <ModalFooterContainer>
        <Link to='/cart'>
          <ViewBagButton onClick={this.props.closeModal}>
            view bag
          </ViewBagButton>
        </Link>
        <CheckOutButton>check out</CheckOutButton>
      </ModalFooterContainer>
    );
  }
}
