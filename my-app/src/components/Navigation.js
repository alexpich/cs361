import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  IconButton,
  Flex,
  Box,
  useDisclosure,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="blue.600" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link to="/">Animal Image Generator</Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {/* <Link to="/">Animal Image Generator</Link> */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <Link to="/favorites">View Favorites</Link>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              <Link to="/">Home</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navigation;
