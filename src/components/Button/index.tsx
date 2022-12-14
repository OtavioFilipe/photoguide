import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

type Props = {
  title: string;
  outlined?: boolean;
  disabled?: boolean;
  onPress?: any;
} & TouchableOpacityProps;

export default function Button({title, disabled, onPress, ...rest}: Props) {
  return (
    <Container
      disabled={disabled}
      onPress={disabled ? () => {} : onPress}
      {...rest}>
      <Title outlined={rest.outlined}>{title}</Title>
    </Container>
  );
}
