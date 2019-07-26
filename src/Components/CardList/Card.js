import React from 'react';
import  './Card.css';
const Card = ({name,email,id,click}) => {
	return (

		<div className="dib back br2 pa2 ma2 grow shadow-5" onClick={ ()=> click(`${id}`)}>
			<img alt=	{`robo${id}`} src={`https://robohash.org/${id}`} height={'200'} width={'200'} />
			<div>
			<h2 className='fnt' style={{color:'#f1f1f1',fontFamily:'inconsolataregular'}}>{name} </h2>	
			</div>
		</div>
		);
}

export default Card;