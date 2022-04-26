import styled from "styled-components"

interface ImageBackgroudProps {
  background: string
}

interface StatusBarProps {
  statNumber: number
  color: string
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 40% 30%;
  background: var(--background);
  color: var(--font);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const DetailsHeader = styled.header`
  grid-column: 1 / -1;
  place-self: center;
  margin: 0.5rem 0rem 0.5rem 0rem;
`
export const DescriptionContainer = styled.section`
  grid-column: 1 / 3;
  justify-self: center;
  padding: 0.5rem;
  background-color: var(--primary);
  text-align: center;
  border-radius: 1rem;
  max-width: 28rem;
  box-shadow: 0.1rem 0.1rem 0.1rem 0 #494c54;

  @media (max-width: 1440px) {
    width: 18rem;
  }

  @media (max-width: 1024px) {
    width: 12rem;
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
`
export const InfoContainer = styled.section`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  padding: 0.5rem;
  background-color: var(--primary);
  justify-self: center;
  border-radius: 1rem;
  max-width: 40rem;
  height: fit-content;
  box-shadow: 0.1rem 0.1rem 0.2rem 0 #494c54;

  div {
    padding: 0.1rem;
    padding-left: 0.8rem;
    text-align: center;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    text-align: center;
  }

  @media (max-width: 1440px) {
    width: 25rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1024px) {
    width: 22rem;
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }
`

export const Spirtes = styled.section`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  place-self: center;
  text-align: center;
  color: black;

  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 0.2rem 0 #494c54;

  div {
    padding: 1rem;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
  }

  h3 {
    border: ridge 0.2rem;
    background-color: #c2cc9f;
    border-radius: 0.5rem;
    font-family: "Press Start 2P", cursive;
    font-size: 1.1rem;
    padding: 0.3rem;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }

  div:first-child {
    border-bottom: solid var(--font);
    background-color: var(--red);
  }

  div:last-child {
    background-color: white;
  }
  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`

export const Type = styled.section`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  width: 22rem;
  display: flex;
  justify-content: space-around;
  text-align: center;

  h3 {
    margin-bottom: 0.3rem;
  }

  img {
    width: 8rem;
    height: 3rem;
    background-color: white;
    border-radius: 2rem;
  }

  @media (max-width: 1440px) {
    width: 18rem;
    img {
      width: 6rem;
      height: 2rem;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`

export const StatusContainer = styled.section`
  grid-column: 4 / 5;
  max-width: 22rem;
  display: flex;
  padding-top: 0.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--primary);
  box-shadow: 0.1rem 0.1rem 0.2rem 0 #494c54;
  margin-top: 3rem;

  h3 {
    border-bottom: solid var(--font) 0.2rem;
    border-radius: 0.3rem;
  }

  .statusBarContainer {
    border-bottom: solid var(--font) 0.3rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1440px) {
    width: 18rem;
    margin-bottom: 1.5rem;
  }
`

export const StatusBar = styled.div<StatusBarProps>`
  width: 18rem;
  height: 1.5rem;
  background-color: #ced6e0;
  border: solid;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  div {
    width: ${({ statNumber }) => statNumber}%;
    height: 1.10rem;
    background-color: ${({ color }) => color};
    border-right: ridge ${({ color }) => color};
    border-radius: 0.2rem;
  }

  @media (max-width: 1440px) {
    width: 12rem;
  }
`

export const BackButton = styled.button`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  place-self: center;
  width: 8rem;
  height: 4rem;
  border-color: var(--primary);
  border-radius: 1rem;
  background-color: var(--primary);
  box-shadow: 0.1rem 0.1rem 0.2rem 0 #494c54;
  color: var(--font);
  font-size: 1.2rem;
  :hover {
    background-color: var(--orange);
  }
`

export const MovesContainer = styled.section`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  text-align: left;
  margin: 3rem;
  display: grid;
  overflow-y: scroll;
  height: 34.5rem;
  width: 22rem;
  direction: rtl;
  padding-left: 0.5rem;
  justify-self: center;

  h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1440px) {
    width: 20rem;
    padding-left: 1rem;
  }
`

export const Image = styled.img<ImageBackgroudProps>`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: auto;
  width: 12rem;
  height: 12rem;
  margin: 0.5rem;
  border: ridge 0.2rem;
  border-radius: 2rem;
  background-size: 350px;

  @media (max-width: 1440px) {
    width: 8rem;
    height: 8rem;
  }
`
