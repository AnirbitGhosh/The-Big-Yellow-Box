import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import{
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink, 
    FooterItem,
    FooterSocial,
    FooterSocialIcons,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';
import Link from 'next/link';
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaRedditAlien,
} from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Link href="/"><SocialLogo onClick={toggleHome}>THE BIG YELLOW BOX</SocialLogo></Link>
                        <WebsiteRights>The Big Yellow Box © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink  aria-label="Reddit">
                                <FaRedditAlien />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/thebigyellowbox/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
