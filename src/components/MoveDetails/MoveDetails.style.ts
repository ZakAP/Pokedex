import styled from "styled-components"

export const Container = styled.section`

`

export const MoveDetailsButton = styled.button`
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--font);
  border-radius: 0.5rem;
  width: 20rem;
  height: 2.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  position: relative;
  box-shadow: 0.05rem 0.05rem 0.2rem 0 #494c54;

  .moveNumber {
    position: absolute;
    right: 17rem;
  }

  b {
    margin-right: 1rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 18rem;
  }

  :hover {
    background-color: var(--orange);
  }

  @media (max-width: 1440px) {
    width: 15rem;
    img {
      left: 12.5rem
    }
  }
`

export const MoveInfoContainer = styled.div`
  background-color: var(--secundary);
  width: 20rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    display: flex;
    justify-content: center;
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 0.7rem solid transparent;
    border-right: 0.7rem solid transparent;
    border-bottom: 0.8rem solid var(--font);
  }

  p {
    padding: 0.1rem;
    margin-bottom: 0.6rem;
    text-align: center;
    border-radius: 1rem;
    border: solid var(--font);
  }
  
  @media (max-width: 1440px) {
    width: 12rem;
    margin-right: 4.5rem;
  }
`
