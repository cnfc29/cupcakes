import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import type { AuthSignInType } from '../../types/authTypes';
import { signInThunk } from '../../redux/slices/authThunkActions';
import { NavLink } from 'react-router-dom';

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const signInHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as AuthSignInType;
    void dispatch(signInThunk(data));
  };
  return (
    <Flex justify="center">
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Войти в аккаунт
        </Text>
        <form onSubmit={signInHandler}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}></FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>

            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}></FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Пароль"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>
            <Text>
              Ещё не зарегистрированы?{' '}
              <NavLink style={{ textDecoration: 'underline', color: 'blue' }} to="/signup">
                Регистрация
              </NavLink>
            </Text>
            <Button  type="submit" style={{ backgroundColor: '#00ADB5' }} w="full" mt={4}>
              Войти
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
