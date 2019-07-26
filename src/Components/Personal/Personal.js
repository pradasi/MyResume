import React from 'react';
import './Personal.css'
import Image from './pradeep.jpg';
const Personal = () =>{
	return(
		<div>
			<div className='card'>
				<strong><h1 className='name'>Personal Profile Card</h1></strong>
				<img src={Image} alt={"Pradeep"} style={{width:300, height:250, marginTop: -2}}/>
				<h1>Pradeep Kumar R</h1>
				<p>pradeepkumar2497@gmail.com</p>
				<p>+918553118283</p>
				<a target="_blank" rel="noopener noreferrer" href={'https://github.com/pradasi'}>Github</a> 
				<strong><p>Indian</p></strong>
			</div>
		</div>
		);
}

export default Personal



