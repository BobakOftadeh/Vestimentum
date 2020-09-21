import styled from "styled-components";
import { IoIosCart } from "react-icons/io";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 8vh;
`;

export const StyledNavBarContainer = styled.nav<{ toShow: boolean }>`
  color: var(--color-orange);
  background-color: white;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-out;
  opacity: ${(props) => (props.toShow ? 1 : 0)};
  top: 0;
  height: 8vh;
  z-index: 999;
  grid-column: 1/-1;

  .active {
    visibility: visible;
    transition: all 0.2s ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 0.2s ease-out;
    z-index: -999;
    transform: translate(0, -100%);
  }
`;

export const StyledLogo = styled(Logo)`
  height: 100%;
  width: 3rem;
`;

export const StyledCartSVG = styled(IoIosCart)`
  height: 80%;
  width: 2.5rem;
  display: inline-block;
  position: relative;
`;

export const NavTitleContainer = styled(Link)`
  font-size: var(--h3);
  font-family: "Indie Flower", sans-serif;
  color: var(--color-orange);
  text-decoration: none;
`;

export const StyledCartSVGContainer = styled(Link)`
  position: relative;
  transition: all 0.5s;
  color: var(--color-orange);
  margin-right: 1rem;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--color-orange);
    border-radius: 3px;
    z-index: -1;
    left: 0;
    top: -2px;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover {
    color: var(--color-white);
  }

  &:hover&::after {
    opacity: 1;
  }
`;
