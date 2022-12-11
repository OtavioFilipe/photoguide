import React from 'react';
import {ImageBackground, Text} from 'react-native';
import Button from '../../components/Button';

import {ButtonContainer, Container, InfoContainer, LogoImage} from './styles';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/imgDoctor.png')}
      resizeMode="cover"
      style={{flex: 1, backgroundColor: '#007BCC'}}>
      <Container>
        <InfoContainer>
          <LogoImage source={require('../../assets/images/logoPg.png')} />
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              lineHeight: 24,
              textAlign: 'center',
            }}>
            Suas fotos pós cirúrgicas e seguras em um só lugar
          </Text>
        </InfoContainer>
        <ButtonContainer>
          <Button title="Criar uma conta" />
          <Button title="Já tenho conta" outlined={true} />
        </ButtonContainer>
      </Container>
    </ImageBackground>
  );
}
