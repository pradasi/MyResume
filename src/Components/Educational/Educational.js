import React from 'react';
import './Educational.css';
import Image from './img.jpg';

const Educational = ({id,quali,stream,name,uni,marks,year}) =>{
	return(
			<div className=" bg-light-green dib br2 pa2 ma2 shadow-5 flip-card">
	  		<div className="flip-card-inner">
	    		<div className="flip-card-front">
	    			<h1>{quali}</h1> 
	      		<p>{stream}</p> 
	      		<p>{name}</p>
	      		<p>{uni}</p> 
	      		<p>{marks}</p>
	      		<p>{year}</p> 	
	    		</div>
	    		
	    		<div className="flip-card-back">
	      		<img src={Image} alt={"Avatar"} width={300} height={385}/>
	    		</div>
	  		</div>
			</div>

			
		
	);

}

export default Educational