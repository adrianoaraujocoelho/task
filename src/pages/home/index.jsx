import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";

import { Button } from "../../components/Button";
import { Container, TextContent, Title, TitleHighLight } from "./style";
import banner from "../../assets/banner.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIN = () => {
    navigate("/login");
  };

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
            variant="secondary"
            onClick={handleClickSignIN}
          />
        </div>
        <div>
          <img src={banner} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
