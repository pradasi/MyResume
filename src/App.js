import React,{Component} from 'react';
import "./App.css"
import CardList	 from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll		 from './Components/Scroll/Scroll';
import robots		 from './Components/Index/index';
import Personal  from './Components/Personal/Personal';
import Education  from './Components/Educational/Education';
import Projects  from './Components/Projects/Project';
import Certifications  from './Components/Certifications/Certifications';
import Skills  from './Components/Skills/Skills';
import Back 		 from './Components/Back/Back';
import Particles from 'react-particles-js';

const paramOption = {
particles: {
  number: {
    value: 10,
    density: {
      enable: true,
      value_area: 100
    }
  }
}
}

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: '',
			page: 'home'
		}
	}

	onStateChange = (event) =>{
		this.setState({searchfield: event.target.value })
	}



	clicker = (value)=>{
		this.setState({page: value})
	}

	componentDidMount(){
		/*fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response => response.json())
		 .then(users => this.setState({robots: users})  )*/
		 this.setState({robots: robots})
		
	}

	returnBack =()=>{
		this.setState({page: 'home'})
	}

	


	render(){

		let display;
		switch(this.state.page){
			case "1":
				display = <Personal/>;
				break;
			case "2":
				display = <Education/>;
				break;
				case '5':
				display = <Projects />;
				break;
			case '3':
				display = <Skills/>;
				break;
			case '4':
				display = <Certifications/>;
				break;
			default:
					break;
		}

		const filteredName = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.lenght === 0) {
			return <h1>LOADING</h1>
		} else {
			return(
				<div>
					<Particles className='Param'
              params={paramOption}
        	/>
				{ this.state.page === 'home'
					?
					<div className="tc">
						
						<h1 className='f1 intro'>Hi, This Is My Resume</h1>
						<SearchBox searchChange={this.onStateChange}/>
						<Scroll>
							<CardList robots={filteredName} clicker={this.clicker}/>
						</Scroll>
					</div>
					: <div> 
							<Back returnBack={this.returnBack}/>
							{display} 
						</div>
				}
				</div>
			);

		}

		


	}
}

export default App