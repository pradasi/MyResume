import React from 'react';
import './Educational.css';

const Educational = ({id,quali,stream,name,uni,marks,year,image}) =>{
	return(
			<div className="dib  ma3 shadow-5 flip-card">
	  		<div className="flip-card-inner">
	    		<div className="flip-card-front">
	    			<div className="db">
	    			<button className='button'>{quali}</button><br/>
	      		<button className='button'>{stream}</button> <br/>
	      		<button className='button'>{name}</button><br/>
	      		<button className='button'>{uni}</button> <br/>
	      		<button className='button'>{marks}</button><br/>
	      		<button className='button'>{year}</button> 	<br/>
	      		</div>
	    		</div>
	    		
	    		<div className="flip-card-back">
	      		<img src={require(`./${image}`)} alt={"Avatar"} width={300} height={400}/>
	    		</div>
	  		</div>
			</div>

			
		
	);

}

export default Educational