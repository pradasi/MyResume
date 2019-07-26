import React,{Component} from 'react';
import Proj from './Proj';
import content from './content';
import Selector from '../Selector/Selector';
class Project extends Component{

 constructor(){
 	super()
 	this.state ={
 		page: 1
 	}
 }

 
 change = (event) =>{
     this.setState({page: event.target.value});
 }

 render(){
 	return(
 		<div>
 			<Proj page={this.state.page}/>
 			<div className='tc selector'>
			</div>
 			<Selector content={content} selectChange={this.change} val={this.state.page}/>
 		</div>
 	);
 }



}

export default Project
