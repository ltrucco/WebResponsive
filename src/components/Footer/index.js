import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

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
                            <FooterLinkTitle>About Ss</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Submit video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influences</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destination</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Responsive Web
                        </SocialLogo>
                        <WebsiteRights>Responsive Web © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="Linkedn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
