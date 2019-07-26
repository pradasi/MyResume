import React from 'react';
import './Proj.css'
import content from './content';

const Proj = ({page}) =>{
	const disp = content[page-1]
	return(
		<div className="tc">
			<div className="dib tc br2 mt0 shadow-5 flip-card1">
				<div className='back-page'>
				<div className='ml2 tc'>
					<h3 className='sp'><span ><u>DURATION</u></span>:{disp.duration}</h3>
					<h3 className='sp'><span><u>AIM</u></span>: {disp.Aim}</h3>
					<h3 className='sp'><span><u>APPROACH</u></span>: {disp.Approach}</h3>
					<h3 className='sp'><span><u>OUTCOME</u></span>: {disp.Outcome}</h3>
				</div>	
				</div>
	  		<div className="flip-card-inner1">
	    		<div className="flip-card-front1">
	    			<img src={require(`./${disp.image}.png`)} alt={"Avatar"} width={800} height={400}/>
	    			</div>	
	    		<div className="flip-card-back1">				
	      		<h1>{disp.title}</h1>	
	    		</div>
	  		</div>
			</div>
		</div>

			
		
	);

}

export default Proj