import React from 'react';
import {ImageBackground, Text} from 'react-native';
import Button from '../../components/Button';

import {
  ButtonContainer,
  Container,
  ContentContainer,
  LogoImage,
} from './styles';

export default function LoginScreen() {
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/imgDoctor.png')}
        resizeMode="cover"
        style={{flex: 1, backgroundColor: '#007BCC'}}
      />
      <LogoImage source={require('../../assets/images/logoPg.png')} />
      <ContentContainer>
        <Text style={{fontSize: 20, color: '#fff', lineHeight: 24}}>
          {` Suas fotos pós cirúrgicas e
   ${''}seguras em um só lugar`}
        </Text>
      </ContentContainer>
      <ButtonContainer>
        <Button title="Criar uma conta" />
        <Button
          title="Já tenho conta"
          style={{
            marginTop: 15,
            backgroundColor: '#007BCC',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#fff',
          }}
        />
      </ButtonContainer>
    </Container>
  );
}
