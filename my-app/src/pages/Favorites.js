import React from 'react';
import { Container } from '@chakra-ui/react';
import Image from '../components/Image';
import GoBack from '../components/GoBack';

const Favorites = () => {
  return (
    <>
      <Container>
        <p>The Favorites</p>
        {/* TODO: iteratively produce images */}
        <Image />
      </Container>
      <GoBack />
    </>
  );
};

export default Favorites;
