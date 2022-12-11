import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title} from './styles';

type Props = {
  title: string;
  outlined?: boolean;
} & TouchableOpacityProps;

export default function ButtonSelect({title, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Title outlined={rest.outlined}>{title}</Title>
    </Container>
  );
}
