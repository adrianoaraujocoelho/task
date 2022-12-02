import { MdEmail, MdLock } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import {
  Wrapper,
  Column,
  Row,
  Title,
  Container,
  CriarText,
  EsqueciText,
  TitleLogin,
  SubtitleLogin,
} from "./style";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e makde the change</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secundary" />
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
              </Row>
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
