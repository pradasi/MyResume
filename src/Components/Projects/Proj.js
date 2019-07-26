import React from 'react';
import './Proj.css'
import content from './content';

const Proj = ({page}) =>{
	const disp = content[page-1]
	return(
		<div className="tc">
			<div className="dib  br2 mt0 shadow-5 flip-card1">
				<div className='back-page tc'>
					<h1>{disp.title}</h1>
				</div>
	  		<div className="flip-card-inner1">
	    		<div className="flip-card-front1">
	    			<img src={require(`./${disp.image}.png`)} alt={"Avatar"} width={800} height={400}/>
	    			</div>	
	    		<div className="flip-card-back1">		
	      		<p>{disp.duration}</p> 	
	    		</div>
	  		</div>
			</div>
		</div>

			
		
	);

}

export default Proj