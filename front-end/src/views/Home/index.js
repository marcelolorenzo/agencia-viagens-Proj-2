import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from "../../assets/img/banner.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function HomeView() {
  return (
    <Layout>
      <Container>
        <BannerHome className="shadow border p-4 p-md-5 my-3 d-md-flex align-items-center">
          <div>
            <h1>Bem-vindo ao Hanover Viagens</h1>
            <p>Conheça nossos pacotes</p>
            <p>Não deixe para depois, Viaje!</p>
            <Button as={Link} to="/pacotes">
              Pacotes{" "} </Button>
          </div>
          <div>
            <img src={Banner} alt="imagem" width={626} height={391} className="img-fluid"/>
          </div>
        </BannerHome>
      </Container>
    </Layout>
  )
}

const BannerHome = styled.div`
 & h1 {
   color: royalblue;
 }
 & p {
   font-size: 18px;
 }
 & > div {
   flex: 1;
 }
`
