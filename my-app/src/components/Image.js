import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Spacer } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Image = props => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log(props.animalType);
    if (props.animalType === 'Dog') {
      fetch('https://dog.ceo/api/breeds/image/random')
        // fetch('https://dog.ceo/api/breeds/image/random', {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        // })
        .then(res => res.json())
        .then(data => {
          setImage(data.message);
          console.log(data.message);
        });
    } else if (props.animalType === 'Cat') {
      fetch('https://api.thecatapi.com/v1/images/search')
        // fetch('https://api.thecatapi.com/v1/images/search', {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        // })
        .then(res => res.json())
        .then(data => {
          setImage(data[0].url);
          console.log(data[0].url);
        });
    } else {
      setImage(null);
    }
  }, [props]);

  return (
    <>
      <Container p={3}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          {props.animalType}
          <img src={image} alt="A random animal image" />
        </Box>
        <Flex>
          <Box textAlign={'left'}>
            <Button>Download</Button>
          </Box>
          <Spacer />
          <Box>
            <StarIcon />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Image;
