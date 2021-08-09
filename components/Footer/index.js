import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import{
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkS, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

import {
    FaFacebook,
    FaTwitter,
    FaYoutube, 
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLinkS to="#">Demo</FooterLinkS>
                            <FooterLinkS to="#">Testimonials</FooterLinkS>
                            <FooterLinkS to="#">Careers</FooterLinkS>
                            <FooterLinkS to="#">Team Members</FooterLinkS>
                            <FooterLinkS to="#">Terms of Service</FooterLinkS>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLinkS to="#">Contact</FooterLinkS>
                            <FooterLinkS to="#">Support</FooterLinkS>
                            <FooterLinkS to="#">Sponsorship</FooterLinkS>
                            <FooterLinkS to="#">Locations</FooterLinkS>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sitemap</FooterLinkTitle>
                            <FooterLinkS to="about us">About us</FooterLinkS>
                            <FooterLinkS to="clients">Clients</FooterLinkS>
                            <FooterLinkS to="industry solutions">Industry solutions</FooterLinkS>
                            <FooterLinkS to="what we do">What we do</FooterLinkS>
                            <FooterLinkS to="/signin">Sign up</FooterLinkS>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>THE BIG YELLOW BOX</SocialLogo>
                        <WebsiteRights>The Big Yellow Box © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//twitter.com/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//in.linkedin.com/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
