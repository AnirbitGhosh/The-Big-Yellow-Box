import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #f3d458;
    margin-left: -10px;
    margin-right: -10px;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.section`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 300px;
    box-sizing: border-box;
    color: black;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
`

export const FooterItem = styled.span`
    color: black;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 15px;
`

export const FooterLinkS = styled(LinkS)`
    color: black;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 15px;

    &:hover{
        /* color: #01bf71; */
        color: #50504c;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FooterLink = styled.a`
    color: black;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 15px;

    &:hover{
        /* color: #01bf71; */
        color: #50504c;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FooterSocial = styled.a`
    color: black;
    font-size: 18px;

    &:hover{
        /* color: #01bf71; */
        color: #50504c;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FooterSocialIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    justify-content: left;
    width: 50px;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled.h1`
    color: black;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: "abril fatface", cursive;

    &:hover{
        /* color: #01bf71; */
        color: #50504c;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const WebsiteRights = styled.small`
    color: black;
    margin-bottom: 18px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: black;
    font-size: 28px;

    &:hover{
        /* color: #01bf71; */
        color: #50504c;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

