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
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterItem><u>Email</u>: rory@thebigyellowbox.next</FooterItem>
                        </FooterLinkItems>
                        <FooterLinkItems>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Site developer</FooterLinkTitle>
                            <FooterItem><u>Name</u>: Anirbit Ghosh </FooterItem>
                            <FooterItem><u>Email</u>: anirbit10@gmail.com</FooterItem>
                            <SocialIconLink href='https://www.linkedin.com/in/anirbit-ghosh-731a881b3//' target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Link href="/"><SocialLogo onClick={toggleHome}>THE BIG YELLOW BOX</SocialLogo></Link>
                        <WebsiteRights>The Big Yellow Box © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/thebigyellowbox/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink  aria-label="Reddit">
                                <FaRedditAlien />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
