import React from 'react'

import { SearchInputContainer, SearchInputItem, SearchInputButton} from "./style"

import { Icons } from '../../assets/svg/icons/icons'

const SearchInput = () => {
    return (
        <SearchInputContainer>
                    <SearchInputItem type='text' />
                    <SearchInputButton>
                        <img src={Icons.searchIcon} alt="" className='searchIcon' />
                    </SearchInputButton>
        </SearchInputContainer>
    )
}

export default SearchInput