import React,{Component} from 'react';
import './Certifications.css';
import CF1 from './certificates_1.jpg';
import CF2 from './certificates_2.jpg'




let slideIndex = 1;

class Certifications extends Component{

	componentDidMount(){
		this.showDivs(slideIndex);
	}

	plusDivs =(n)=> {
		this.showDivs(slideIndex += n);
	}
 showDivs = (n) => {
		let i;
	  let x = document.getElementsByClassName("mySlides");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";  
	  }
	  x[slideIndex-1].style.display = "block";  
	}
	render(){
		return(

			<div className="container">
			  <img className="mySlides" alt='im' src={CF1}/>
			  
			  <img className="mySlides" alt='im' src={CF2}/>
			  
			  <button className="display-left"  onClick={ () => this.plusDivs(-1)}>&#10094;</button>
			  <button className="display-right" onClick={ () => this.plusDivs(1)}>&#10095;</button>
			</div>
		);
	}
}

export default Certifications