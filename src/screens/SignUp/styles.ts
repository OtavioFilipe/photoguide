import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 20px;
  background-color: #003e66;
  width: 100%;
  height: 64px;
`;

export const LabelHeader = styled.Text`
  flex: 1;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  align-self: center;
`;

export const ContentContainer = styled.View`
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  flex: 5;
`;

export const ContentTitle = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  color: #002e4d;
  margin-top: 24px;
  margin-bottom: 100px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const ContentForm = styled.View`
  width: 100%;
  justify-content: space-around;
  padding-horizontal: 20px;
  flex: 2.5;
`;

export const QuestionText = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #002e4d;
`;

export const FooterContainer = styled.View`
  width: 100%;
  flex: 0.7px;
  padding-horizontal: 20px;
  padding-vertical: 34px;
  align-items: center;
  justify-content: space-around;
`;

export const Steps = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  color: #002e4d;
`;

export const IfContainAccount = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  color: #002e4d;
  text-align: center;
`;
