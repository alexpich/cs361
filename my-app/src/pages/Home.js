import React from 'react';
import { Divider } from '@chakra-ui/react';
import AnimalSelector from '../components/AnimalSelector';
import Image from '../components/Image';

const Home = () => {
  return (
    <>
      <AnimalSelector />
      <Divider p={3} />
      {/* <Image /> */}
    </>
  );
};

export default Home;
