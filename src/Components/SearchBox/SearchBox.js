import React from 'react';
import './SearchBox.css'
const SearchBox = ({searchChange}) => {

	return (
		<div className="pa3 mt0">
			<input className="pa3 ba  bg-gray searchbox"
				type="search" 
				placeholder='search for specific'
				onChange={searchChange} 
				id="searchBox"
			/>
		</div>
		);
}

export default SearchBox;