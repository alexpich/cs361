import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navigation from './components/Navigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
