import React from 'react';
import SkillList from './SkillList';
import skill from './skill';
const Skills = () => {
	return (
			<div className='tc' style={{marginTop:30}} >
				{
					skill.map((user,i) =>{
						return <SkillList key={i} id={user.id} name={user.name} stars={user.stars} />
					})
				}
			</div>
		);

}

export default Skills;
