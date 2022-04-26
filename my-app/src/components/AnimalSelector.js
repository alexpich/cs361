import React, { useEffect, useState } from 'react';
import { Box, Button, Container, VStack, Select } from '@chakra-ui/react';
import Image from './Image';

const AnimalSelector = props => {
  const [animalId, setAnimalId] = useState(null);
  const [animalType, setAnimalType] = useState(null);

  // let randomNumber = Math.floor(Math.random() * 2); // Outputs 0 or 1
  // randomNumber += 1; // Becomes 1 or 2

  // useEffect(() => {
  //   fetchRandomAnimal();
  // console.log(randomNumber);
  // fetch('http://localhost:5002/')
  //   .then(res => res.json())
  //   .then(data => {
  //     setAnimalId(data[randomNumber].animal_id);
  //     setAnimalType(data[randomNumber].description);
  //   });
  // setIsReady(true);
  // }, []);

  // useEffect(() => {
  //   if (null === isReady) {
  //     return;
  //   }
  //   if (animalType === 'Dog') {
  //     fetch('https://dog.ceo/api/breeds/image/random')
  //       .then(res => res.json())
  //       .then(data => {
  //         setImage(data.message);
  //         console.log(data.message);
  //       });
  //   } else if (animalType === 'Cat') {
  //     fetch('https://api.thecatapi.com/v1/images/search')
  //       .then(res => res.json())
  //       .then(data => {
  //         setImage(data.url);
  //         console.log(data.url);
  //       });
  //   }
  // }, [isReady]);

  const fetchRandomAnimal = () => {
    let randomNumber = Math.floor(Math.random() * 2); // Outputs 0 or 1
    console.log(randomNumber);
    fetch('http://localhost:5002/')
      .then(res => res.json())
      .then(data => {
        setAnimalId(data[randomNumber].animal_id);
        setAnimalType(data[randomNumber].description);
      });
  };

  return (
    <>
      <Container>
        <VStack p={4}>
          <Button onClick={fetchRandomAnimal}>Get Random Animal</Button>
          <h3>OR</h3>
          <Select placeholder="Select Animal">
            {/* TODO: Get list from database */}
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </VStack>
      </Container>
      <Button>Generate Image</Button>
      <Image animalType={animalType} />
    </>
  );
};

export default AnimalSelector;
