import styled from "styled-components";
import HeroBg from "../../images/HeroBg.jpg";

export const StyledHeader = styled.header`
  grid-column: full-start/full-end;
  color: var(--color-white);
  grid-row-gap: 0.5rem;
  display: grid;
  place-content: center;
  place-items: center;
  background-image: linear-gradient(
      rgba(255, 151, 29, 0.8),
      rgba(255, 151, 29, 0.8)
    ),
    url(${HeroBg});
  background-size: cover;
  background-attachment: fixed;
  height: 75vh;
`;

export const StyledTitle = styled.h1`
  font-family: "Indie Flower", sans-serif;
`;

export const StyledSubTitle = styled.h2`
  margin-bottom: 2rem;
`;
