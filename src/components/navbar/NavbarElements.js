import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: #106466;
  height: 85px;
  display: flex;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
  z-index: 12;
`;
export const NavLogo = styled(FaHome)`
  cursor: pointer;
  color: #d2e9e3;
  font-size: 2rem;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    transition: transform 200ms ease-in-out;
    &:hover {
      transform: scale(1.1) translateY(-3px);
      color: #d8a477;
    }
  }
`;

export const NavLink = styled(Link)`
color: #d2e9e3;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
@media screen and (min-width: 768px) {
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.1) translateY(-3px);
    color: #d8a477;
  }
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #d2e9e3;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    transition: transform 200ms ease-in-out;
    &:hover {
      transform: scale(1.1) translateY(-3px);
      color: #d8a477;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  padding 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #d2e9e3;
  outline: none;
  border: 1px solid #d2e9e3;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d2e9e3;
    color: #808080;
  }
`;