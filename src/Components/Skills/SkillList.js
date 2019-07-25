import React from 'react';

const Skills = ({id,name,stars}) =>{

	return(
		<div className="bg-gray dib br2 pa2 ma2 grow shadow-5">	
			<div>
			<img alt=	{name} src={require(`./${name}.png`)} height={'100'} width={'150'} style={{marginTop: 10}} />
			<h2 className='fnt black tc'>{name}</h2>
			<h2 className='fnt  tc'>{stars}</h2>

			</div>
		</div>
		);
}

export default Skills