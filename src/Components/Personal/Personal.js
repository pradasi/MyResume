import React from 'react';
import './Personal.css'
import Image from './pradeep.jpg';
import * as FA from 'react-icons/fa';

const myFunc = () =>{

  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

}

const Personal = () =>{
	return(
		<div>
			<div className='card'>
				<p style={{margin:0}}><button id='but'>PROFILE</button></p>
				<img src={Image} alt={"Pradeep"} style={{width:300, height:250,margin:0}}/>
				<h1>Pradeep Kumar R</h1>
				<p id='email'>Email@:pradeepkumar2497@gmail.com</p>

				<a  target="_blank" 
						rel="noopener noreferrer" 
						href={'https://github.com/pradasi'}
						id='github'
				>
				<FA.FaGithub style={{width:30,height:30}} className='grow'/>			
				</a> 

				<a  target="_blank" 
						rel="noopener noreferrer" 
						href={'https://www.facebook.com/Pradeepkumar2497'}
						id='facebook'
				>
				<FA.FaFacebookSquare style={{width:30,height:30}} className='grow'/>				
				</a> 

				<a  target="_blank" 
						rel="noopener noreferrer" 
						href={'https://www.linkedin.com/in/pradeep-kumar-r-b1849316b/'}
						id='linkedin'
				>
				<FA.FaLinkedin style={{width:30,height:30}} className='grow'/>		
				</a>
				<a  target="_blank" 
						rel="noopener noreferrer" 
						href={'https://www.reddit.com/user/prad_asi'}
						id='reddit'
				>
				<FA.FaReddit style={{width:30,height:30}} className='grow'/>		
				</a> 
				<p><button id='but' onClick={()=> myFunc()}>CONTACT</button></p>
				<div id="snackbar">+918553118283</div>

			</div>

		</div>
		);
}

export default Personal



