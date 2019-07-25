import React from 'react';
import './Personal.css'
import Image from './img.jpg';
const Personal = () =>{
	return(
		<div>
			<div className='card grow'>
				<strong><h1 className='name'>Personal Profile Card</h1></strong>
				<img src={Image} alt={"Pradeep"} style={{width:300, marginTop: -2}}/>
				<h1>Pradeep Kumar R</h1>
				<p>pradeepkumar2497@gmail.com</p>
				<p>+918553118283</p>
				<strong><p>Indian</p></strong>
				<br/>
				<br/>
			</div>
		</div>
		);
}

export default Personal



