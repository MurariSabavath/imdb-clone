import styled from "styled-components/macro";

export const Container = styled.div`
  background: #111;
  padding: 7px 0;
`;

export const Section = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SVG = styled.svg`
  margin: ${(props) => (props.margin ? props.margin : "0 0")};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-weight: bolder;
  border-radius: 4px;
  white-space: nowrap;
  margin-left: ${(props) => (props.margin ? props.margin : "5px")};
  padding: ${(props) => props.padding};
  text-decoration: none;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: #222;
  }

  @media (max-width: 1024px) {
    display: ${(props) => props.display};
  }
`;

export const Logo = styled(Link)`
  &:hover {
    background: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #111;
  outline: none;
  border: none;
  margin: 0 5px;
  padding: 5px 10px;
  color: #bbb;
  font-weight: bolder;
  border-radius: 4px;

  &:hover {
    color: #fff;
    cursor: pointer;
    background-color: #222;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileButton = styled(Button)`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  margin-left: 5px;
  align-items: center;

  &::placeholder {
    padding: 0;
  }
`;

export const Label = styled.input``;

export const SideNav = styled.div`
  display: block;
  background: #111;
  height: 100%;
  z-index: 1;
  margin: 0;
  position: fixed;
  overflow: hidden;
  top: 0;
  transition: 0.4s ease-out;
`;

export const Break = styled.br``;

