import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.1rem 1rem;
  justify-content: center;
  max-width: 1080px;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.1rem 1rem;
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0rem 1rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0rem 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0rem 1rem;
  }
`;
