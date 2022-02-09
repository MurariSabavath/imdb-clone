import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Inner = styled.div`
  width: 90%;
  margin: auto;
`;

export const Card = styled.div`
  margin-right: 20px;
  background: #111;
  border-radius: 5px;
  width: auto;
`;

export const Img = styled.img`
  height: 278;
  width: auto;
  border-radius: 5px 5px 0 0;

  @media (max-width: 800px) {
    height: 231px;
    width: auto;
  }
`;

export const Break = styled.br``;

export const Heading = styled.h5`
  margin: 5px 0;
`;

export const HeadingSM = styled.h2`
  border-left: 5px solid #f5c518;
  border-radius: 2px;
  padding-left: 5px;
  &:hover {
    color: #f5c518;
    cursor: pointer;
  }
`;

export const HeadingLarge = styled.h1`
  color: #f5c518;
`;

export const SVG = styled.svg`
  fill: #f5c518;
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
export const Text = styled.p`
  display: inline-block;
  padding: 0 5px;
  margin: 0;
  font-size: 1em;
  color: #ddd;
`;

export const Button = styled.button`
  background: #222;
  color: #fff;
  outline: none;
  width: 90%;
  border: none;
  display: flex;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bolder;

  &:hover {
    background: #333;
    cursor: pointer;
  }
`;

export const HeadingS = styled.h4`
  color: #bbb;
  font-size: 1.1rem;
  padding: 0;
`;

