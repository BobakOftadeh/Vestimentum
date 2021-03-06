import styled from "styled-components";

export const ButtonStyle = styled.a`
  color: white;
  text-transform: uppercase;
  background-color: var(--color-orange);
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::after {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    background-color: var(--color-orange);
    position: absolute;
    border-radius: 10rem;
    transition: all 0.2s;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
