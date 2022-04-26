import styled from "styled-components"

export const Container = styled.div`
  position: relative;

  width: 18rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  padding-top: 1.5rem;

  .cardBackground {
    width: 26rem;
    height: 26rem;
    border: none;
    z-index: -1;
    position: absolute;
    background-color: none;
  }

  div {
    text-align: center;
    border: solid #2d3436 0.15rem;
    max-width: 9.5rem;
    padding: 0.15rem;
    border-radius: 0.5rem;
    background-color: #c2cc9f;
    font-family: "Press Start 2P", cursive;
    font-size: 0.8rem;
  }

  .info {
    width: 3rem;
    background-color: #f0bc13;
    border-radius: 2rem;
    :hover {
      background-color: #f7cb3b;
    }
  }

  button {
    width: 0;
    height: 0;
    background-color: transparent;
    border: none;
    margin-right: 3rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .infoBorder {
    width: fit-content;
    border: solid #2d3436 0.1rem;
    border-radius: 2rem;
    position: relative;
    background-color: var(--black);
    :hover {
      background-color: black;
    }

    position: relative;
    display: inline-block;
  }

  .infoBorder .tooltiptext {
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
    top: 130%;
    left: 50%;
    margin-left: -60px;
  }

  .infoBorder:hover .tooltiptext {
    visibility: visible;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
  }

  .infoBorder .tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%; 
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }

  .spriteScreen {
    width: 9rem;
    height: 9rem;
    margin: 0.5rem;
    border: solid #37474f;
    border-radius: 2rem;
    background-color: #77a684;
  }
`
