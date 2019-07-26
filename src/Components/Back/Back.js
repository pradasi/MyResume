import React from 'react';
import home from './house.png';
const Back = ({returnBack}) =>{
	return(
			
				<img className='grow ml2' alt={'backButton'} src={home} width={50} height={50}  onClick={ ()=> returnBack()}/>
			
		);
}

export default Back