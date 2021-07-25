import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { FooterContainer, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrapper } from './FooterElement'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <SocialMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to='/'>
                                9IJAKIDS
                            </SocialLogo>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='facebook' rel='noopener noreferrer'>
                                    <FaIcons.FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='instagrem' rel='noopener noreferrer'>
                                    <FaIcons.FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='twitter' rel='noopener noreferrer'>
                                    <FaIcons.FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='youtube' rel='noopener noreferrer'>
                                    <FaIcons.FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='whatsapp' rel='noopener noreferrer'>
                                    <FaIcons.FaWhatsapp />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrapper>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
