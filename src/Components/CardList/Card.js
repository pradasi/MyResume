import React from 'react';
const Card = ({name,email,id,click}) => {
	return (

		<div className="bg-gray dib br2 pa2 ma2 grow shadow-5" onClick={ ()=> click(`${id}`)}>
			<img alt=	{`robo${id}`} src={`https://robohash.org/${id}`} height={'200'} width={'200'} />
			<div>
			<h2 className='fnt black'>{name} </h2>
			

			</div>
		</div>
		);
}

export default Card;