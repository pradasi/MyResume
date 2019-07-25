import React from 'react';

import Card from './Card';

const CardList = ({robots,clicker}) => {

	return (
			<div style={{marginTop:50}} >
				{
					robots.map((user,i) => {
											return (<Card key={i} id={user.id} name={user.name} email={user.email} click={clicker}/>);
											})
				}
			</div>
		);

}

export default CardList;