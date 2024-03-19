import styled from "styled-components";

export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchInputItem = styled.input`
    width: 400px;
    height: 30px;
    
    border: 0;
    border-radius: 50px;

    margin-right: 1rem;
`

export const SearchInputButton = styled.button`
    background-color: transparent;
    border: 0;

    .searchIcon {
        width: 20px;
    }
`