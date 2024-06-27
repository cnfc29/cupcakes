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
import type { AuthSignUpType } from '../../types/authTypes';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signUpThunk } from '../../redux/slices/authThunkActions';
import { NavLink } from 'react-router-dom';

export default function SignUpPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const signUpHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as AuthSignUpType;
    void dispatch(signUpThunk(formData));
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
          Регистрация
        </Text>

        <form onSubmit={signUpHandler}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}></FormLabel>
              <Input
                placeholder="Имя"
                name="username"
                bg={useColorModeValue('gray.100', 'gray.900')}
                color={useColorModeValue('current', 'white')}
              />
            </FormControl>

            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}></FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
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
              Уже зарегистрированы?{' '}
              <NavLink style={{ textDecoration: 'underline', color: 'blue' }} to="/signin">
                Войти
              </NavLink>
            </Text>
            <Button type="submit" style={{ backgroundColor: '#00ADB5' }} w="full" mt={4}>
              Зарегистрироваться
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
