import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img width="70px" src={logo} alt="Logo da dio" />
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {autenticado ? (
              <UserPicture src="https://github.com/adrianoaraujocoelho.png" />
            ) : (
              <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};
export { Header };
