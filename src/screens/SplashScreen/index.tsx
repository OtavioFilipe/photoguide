import React from 'react';
import {ImageBackground} from 'react-native';
import {Container, ImageLogo} from './styles';

export default function SplashScreen() {
  return (
    <Container>
      <ImageBackground
        style={{flex: 1, backgroundColor: '#007BCC'}}
        source={require('../../assets/images/imgBackground.png')}
      />
      <ImageLogo source={require('../../assets/images/logoPg.png')} />
    </Container>
  );
}
