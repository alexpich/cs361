import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <Box p={3} textAlign={'left'}>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </Box>
  );
};

export default GoBack;
