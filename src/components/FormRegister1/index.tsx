import React from 'react';
import Input from '../Input';

import {Container} from './styles';

export default function FormRegister1({setName, setEmail, setPhone}) {
  return (
    <Container>
      <Input label="Nome completo" onChangeText={value => setName(value)} />
      <Input
        label="Email"
        keyboardType="email-address"
        onChangeText={value => setEmail(value)}
      />
      <Input
        label="Celular"
        keyboardType="numeric"
        onChangeText={value => setPhone(value)}
      />
    </Container>
  );
}
