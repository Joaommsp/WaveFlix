import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #000000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 10rem;

    position: absolute;

    .logo {
        width: 150px;
    }
`

export const HeaderLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderLinks = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 3rem;
`

export const HeaderLink = styled.li`
    color: #EEEDED;
`