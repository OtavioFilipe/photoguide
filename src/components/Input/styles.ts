import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #33aeff;
  width: 100%;
  justify-content: flex-start;
`;

export const Field = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: gray;
  width: 100%;
  /* height: 25px; */
`;
