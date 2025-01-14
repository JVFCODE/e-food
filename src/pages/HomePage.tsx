
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo ao E-Food</Title>
    </Container>
  );
};

export default HomePage;
