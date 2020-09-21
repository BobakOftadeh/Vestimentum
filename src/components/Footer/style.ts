import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-column: full-start/full-end;
  background-color: var(--color-orange-light);
  color: var(--color-orange);
  height: 15vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
