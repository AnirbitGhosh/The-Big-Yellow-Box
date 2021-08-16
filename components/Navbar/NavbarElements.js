import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#f3d458' : '#f3d458')};
    height: 130px;
    margin-top: -8px;
    margin-left: -8px;
    margin-right: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
        height: 40px;
    }
`;

export const NavLogo = styled.h1`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    font-family: 'Abril Fatface', cursive;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #50504c;
    }

    @media screen and (max-width: 1100px) {
        font-size: 4rem;
        font-weight: bold;
    }

    @media screen and (max-width: 980px) {
        font-size: 3.5rem;
        font-weight: bold;
    }

    @media screen and (max-width: 768px){
        font-size: 40px;
        font-weight: bold;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        font-weight: bold;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
