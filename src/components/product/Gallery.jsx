import React, { PureComponent } from 'react';
import { ImageContainer, Image } from './styles/product';

class Gallery extends PureComponent {
  render() {
    const { images, change } = this.props;
    return (
      <ImageContainer>
        {images.map((image) => (
          <Image src={image} key={image} onClick={() => change(image)} />
        ))}
      </ImageContainer>
    );
  }
}

export default Gallery;
