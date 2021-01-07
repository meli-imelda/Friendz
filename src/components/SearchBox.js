import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div className='pa2'>
            <input
            className='pa2 ba b--blue bg-lightest=green'
            type='search'
            placeholder='Search Friendz'
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;