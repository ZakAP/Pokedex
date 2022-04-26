import styled from "styled-components"

export const Container = styled.header`
  background-color: var(--secundary);

  .title {
    width: 25rem;
    height: auto;
    margin-top: 1rem;
  }

  .searchPokeball {
    position: relative;
    z-index: 1;
    width: 5rem;
    height: 5rem;
    left: 1.1rem;
  }

  h1 {
    text-size-adjust: 20rem;
  }

  h1,
  h2,
  h3 {
    color: var(--font);
    text-align: center;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    align-items: center;
    position: relative;

    .pokelupa {
      height: 2.6rem;
      width: 2.8rem;
      margin: 0.4rem;
    }

    .pokelupaBorder {
      width: fit-content;
      border: solid black 0.2rem;
      border-radius: 2rem;
      position: relative;
      bottom: 2rem;
      background-color: var(--red);
      :hover {
        background-color: #ff352b;
      }

      position: relative;
      display: inline-block;
    }

    .pokelupaBorder .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;

      position: absolute;
      z-index: 1;

      width: 120px;
      bottom: 120%;
      left: 50%;
      margin-left: -60px;
    }

    .pokelupaBorder:hover .tooltiptext {
      visibility: visible;
    }

    .pokelupaBorder .tooltiptext::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }

    button {
      width: 0;
      height: 0;
      background-color: transparent;
      border: none;
      margin-left: 1rem;
    }

    > div {
      position: relative;

      input {
        width: 30rem;
        height: 2.5rem;
        border: solid var(--black) 0.3rem;
        padding-left: 1.5rem;
        border-radius: 0rem 0.5rem 1.5rem 0rem;
      }

      .clearButton {
        font-weight: bold;
        font-size: 1rem;
        width: 4rem;
        padding-right: 0.5rem;
        height: 2.2rem;
        border: solid #29364d;
        color: white;
        background: var(--red);
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        border-radius: 0rem 0.3rem 1.4rem 0.2rem;
        :hover {
          background: #eb4034;
        }
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    margin: 0.5rem;

    button {
      color: var(--font);
    }

    button:last-child {
      border-radius: 0 1rem 1rem 0;
      border-right: none;
    }

    button:first-child {
      border-radius: 1rem 0 0 1rem;
      border-left: none;
    }

    button {
      width: 5.6rem;
      height: 3rem;
      border: solid var(--primary);
      border-right: solid var(--black);
      border-left: solid var(--black);
      background-color: var(--primary);
      border-radius: 0;
      margin-bottom: 1rem;
      font-weight: bold;
      font-size: 0.95rem;

      :focus {
        background-color: var(--orange);
        border-top: var(--orange);
        border-bottom: var(--orange);
      }

      :hover {
        background-color: var(--orange);
        border-top: var(--orange);
        border-bottom: var(--orange);
      }
    }
  }

  @media (max-width: 1440px) {
    > div > div {
      input {
        width: 25rem;
      }
    }
  }

  @media (max-width: 1024px) {
    > div > div {
      input {
        width: 20rem;
        margin-right: -0.5rem;
      }

      .clearButton {
        left: 14.9rem;
      }
    }

    > div {
      .pokelupa {
        height: 1.8rem;
        width: 2rem;
      }

      .pokelupaBorder {
        bottom: 1.7rem;
      }
    }

    nav {
      flex-wrap: wrap;

      button:last-child {
        border-radius: 0;
        border-right: solid var(--black);
      }

      button:first-child {
        border-radius: 0;
        border-left: solid var(--black);
      }
    }
  }

  @media (max-width: 640px) {
    .title {
      width: 60%;
      height: 60%;
      max-width: 15rem;
    }

    > div > div {
      input {
        width: 15rem;
        margin-right: -0.5rem;
      }
      .clearButton {
        left: 9.9rem;
      }
    }

    > div {
      .pokelupaBorder {
        bottom: 1.6rem;
      }
    }
  }
`

export const SwitchContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  margin-top: 0.8rem;

  .switchButton {
    position: relative;
    top: 0.5rem;
  }

  img {
    display: inline;
  }

  .day {
    width: 2.8rem;
    margin-right: 0.7rem;
  }

  .night {
    width: 4.2rem;
  }

  @media (max-width: 640px) {
    .switchButton {
      margin-right: 1rem;
    }

    .day {
      display: none;
    }

    .night {
      display: none;
    }
  }
`
