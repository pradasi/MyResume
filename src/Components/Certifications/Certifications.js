import React,{Component} from 'react';
import './Certifications.css';
import Image from '../Personal/img.jpg';
import Home from '../Back/Home.jpg';
import house from '../Back/house.png'
import leftArrow from '../Back/leftArrow.png'



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
			  <img className="mySlides" alt='im' src={Image}/>
			  <img className="mySlides" alt='im' src={Home}/>
			  <img className="mySlides" alt='im' src={house}/>
			  <img className="mySlides" alt='im' src={leftArrow}/>
			  <button className="display-left"  onClick={ () => this.plusDivs(-1)}>&#10094;</button>
			  <button className="display-right" onClick={ () => this.plusDivs(1)}>&#10095;</button>
			</div>
		);
	}
}

export default Certifications