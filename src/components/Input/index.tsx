import React from 'react';

import {Container, Field, Label} from './styles';

export default function Input({label, placeholder, ...rest}: any) {
  return (
    <Container>
      <Label>{label || 'Label'}</Label>
      <Field {...rest} />
    </Container>
  );
}
