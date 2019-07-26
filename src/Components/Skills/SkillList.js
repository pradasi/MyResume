import React from 'react';
import Stars from './Stars';
const Skills = ({id,name,stars}) =>{

	let val=[];
	for(var i = 0; i < stars; i++){
		val.push(<Stars/>);
	}

	return(
		<div className="bg-gray back dib br2 pa2 ma2 grow shadow-5">	
			<div>
			<img alt=	{name} src={require(`./${name}.png`)} height={'100'} width={'200'} style={{marginTop: 10}} />
			<h2 className='tc' style={{color:'#303030'}}>{name}</h2>
			{
				val
			}

			</div>
		</div>
		);
}

export default Skills