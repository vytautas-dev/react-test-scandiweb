import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer } from '../styles/logo';
import { ReactComponent as LogoSvg } from '../../../assets/logo.svg';

class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <Link to='/'>
          <LogoSvg />
        </Link>
      </LogoContainer>
    );
  }
}

export default Logo;
