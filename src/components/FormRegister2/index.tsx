import React from 'react';
import Input from '../Input';

import {Container} from './styles';

export default function FormRegister2({setPassword, setRepeatPassword}) {
  return (
    <Container>
      <Input label="Senha" onChangeText={value => setPassword(value)} />
      <Input
        label="Repetir senha"
        onChangeText={value => setRepeatPassword(value)}
      />
    </Container>
  );
}
