import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border-radius: 26px;
  background-color: ${(prop: any) =>
    prop.outlined ? 'transparent' : '#99d7ff'};
  border: ${(prop: any) => (prop.outlined ? '#fff 1px solid' : 'none')};
  justify-content: center;
  align-items: center;
  opacity: ${(prop: any) => (prop.disabled ? '0.4' : '1')};
`;

export const Title = styled.Text`
  color: ${(prop: any) => (prop.outlined ? '#fff' : '#002E4D')};
`;
