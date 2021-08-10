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
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <Link href="/terms"><FooterLinkS>Terms of Service</FooterLinkS></Link>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterItem>Rory Dick, CEO &#38; Founder, The Big Yellow Box</FooterItem>
                            <FooterItem>Email: <u>rory@crowdapp.net</u></FooterItem>
                            <FooterItem>Phone: <u>+44 12345678</u></FooterItem>
                            <FooterSocialIcons>
                            <FooterSocial href='//in.linkedin.com/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </FooterSocial>
                            </FooterSocialIcons>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle><br></br></FooterLinkTitle>
                            <FooterItem>Abcde, example</FooterItem><br />
                            <FooterItem>Email: <u>test@example.com</u></FooterItem>                                
                            <FooterItem>Phone: <u>+44 12345678</u></FooterItem>
                            <FooterSocialIcons>
                            <FooterSocial href='//in.linkedin.com/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </FooterSocial>
                            </FooterSocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Link href="/"><SocialLogo onClick={toggleHome}>THE BIG YELLOW BOX</SocialLogo></Link>
                        <WebsiteRights>The Big Yellow Box © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//twitter.com/' target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.reddit.com' target="_blank" aria-label="Reddit">
                                <FaRedditAlien />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/' target="_blank" aria-label="Instagram">
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
