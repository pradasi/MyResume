import React from 'react';
import './Scroll.css'
const Scroll = (props) => {
	return(

		<div style={{ overflow: 'scroll', border: '1px solid #303030',height: '400px'}} className='scroller'>
			{props.children}
		</div>

		);


};


export default Scroll;