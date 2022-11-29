import { Header } from "../../components/Header";

import { Button } from "../../components/Button";
import { Container, TextContent, Title, TitleHighLight } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhjores experts.
          </TextContent>
          <Button
            title="Começar a agora"
            variant="secundary"
            onClick={() => null}
          />
        </div>
        <div></div>
      </Container>
    </>
  );
};

export default Home;
