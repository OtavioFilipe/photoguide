import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 26px;
  background-color: ${(prop: any) =>
    prop.outlined ? 'transparent' : '#99d7ff'};
  border: ${(prop: any) => (prop.outlined ? '#33AEFF 1px solid' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(prop: any) => (prop.outlined ? '#33AEFF' : '#002E4D')};
`;
