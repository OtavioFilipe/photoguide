import React, {Fragment, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import ButtonSelect from '../../components/ButtonSelect';
import FormRegister1 from '../../components/FormRegister1';
import FormRegister2 from '../../components/FormRegister2';

import {
  Container,
  ContentContainer,
  ContentForm,
  ContentTitle,
  FooterContainer,
  Header,
  IfContainAccount,
  LabelHeader,
  QuestionText,
  Steps,
} from './styles';

export default function SignUpScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  // Vai para o FORM
  const [currentSex, setCurrentSex] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  const mock = [
    {
      id: 0,
      title: 'Feminino',
    },
    {
      id: 1,
      title: 'Masculino',
    },
    {
      id: 2,
      title: 'Prefiro não declarar',
    },
  ];

  const steps = [
    {
      id: 0,
      stepNumber: '1',
      stepForm: (
        <Fragment>
          <QuestionText>Com qual gênero você se identifica?</QuestionText>
          {mock.map(item => (
            <ButtonSelect
              key={item.id}
              outlined={item.title === currentSex ? false : true}
              title={item.title}
              onPress={() => setCurrentSex(item.title)}
            />
          ))}
        </Fragment>
      ),
      contentTitle: 'Vem que vai ser rapidinho',
    },
    {
      id: 1,
      stepNumber: '2',
      stepForm: (
        <FormRegister1
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
      ),
      contentTitle: 'Falta pouco...',
    },
    {
      id: 2,
      stepNumber: '3',
      stepForm: (
        <FormRegister2
          setPassword={setRepeatPassword}
          setRepeatPassword={setRepeatPassword}
        />
      ),
      contentTitle: 'Agora é só definir sua senha e confirmar',
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Container>
        <Header>
          <TouchableOpacity style={{width: '100%', flex: 1}}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>
          <LabelHeader>Criar conta</LabelHeader>
          <View style={{width: '100%', flex: 1}} />
        </Header>
        <ContentContainer>
          <ContentTitle>{steps[currentStep]?.contentTitle}</ContentTitle>
          <ContentForm>{steps[currentStep]?.stepForm}</ContentForm>
        </ContentContainer>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            alignSelf: 'center',
          }}>
          <IfContainAccount>Se já possuí uma conta</IfContainAccount>
          <TouchableOpacity>
            <IfContainAccount> Entre</IfContainAccount>
          </TouchableOpacity>
        </View>
        <FooterContainer>
          <Steps>
            Etapa {steps[currentStep]?.stepNumber} de {steps.length}
          </Steps>
          <Button
            title="Continuar"
            disabled={currentSex === null}
            onPress={() => setCurrentStep(currentStep + 1)}
          />
        </FooterContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
