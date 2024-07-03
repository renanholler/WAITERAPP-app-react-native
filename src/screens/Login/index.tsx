import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { RootStackParamList } from '../../routes'; // Importe o tipo RootStackParamList
import api from '../../utils/api';
import { Button, ButtonText, Container, Input } from './styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { email, senha });
      if (response.status === 200) { // Verifica se a resposta é bem sucedida
        const { token } = response.data;
        await AsyncStorage.setItem('token', token);
        navigation.navigate('Main');
      } else {
        console.error('Login failed with status:', response.status);
        alert(`Login failed with status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert(`Login failed: ${error.response ? error.response.data : error.message}`);
    }
  };

  return (
    <Container>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginScreen;
