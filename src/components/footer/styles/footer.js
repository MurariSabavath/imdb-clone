import styled from "styled-components";

export const Container = styled.section`
    margin-top: 100px;
    text-align: center;
    align-items: center;
    position: relative;
`

export const Inner = styled.div`
    margin: 10px;
`

export const SVG = styled.svg``

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    align-items: center;
    display: inline-block;
    border-radius: 5px;
    margin: 5px;

    &:hover {
        background: #222;
    }
`

export const FooterLink = styled(Link)`
   
    &:hover {
        text-decoration: underline;
        background: none;
    }
`

export const HeadingSM = styled.h5`
    color: #999;
`