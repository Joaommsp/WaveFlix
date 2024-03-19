import React from 'react'

import { HeaderContainer, HeaderLinksContainer, HeaderLinks, HeaderLink } from "./style"

import LogoWaveflix from "../../assets/images/logo-waveflix.png"

import SearchInput from '../SearchInput'

const Header = () => {
    return (
        <HeaderContainer>
            <img className='logo' src={LogoWaveflix} alt="Logo waveflix" />
            <HeaderLinksContainer>
                <HeaderLinks>
                    <HeaderLink>Home</HeaderLink>
                    <HeaderLink>Movies</HeaderLink>
                    <HeaderLink>Series</HeaderLink>
                </HeaderLinks>
            </HeaderLinksContainer>
            <SearchInput />
        </HeaderContainer>
    )
}

export default Header