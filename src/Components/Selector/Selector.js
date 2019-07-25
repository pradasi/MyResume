import React from 'react';
import './Selector.css';

const Selector = ({content,selectChange,val}) =>{

	return(
			<div className='tc selector'>
				<select id='soflow-color' onChange={selectChange} value={val}>
					<option value="select">Select</option>
					{
						 content.map((value,i)=>{
							return <option 
												value={content[i].id}
												key={content[i].id}
											> 
												{content[i].title}
											</option>
						})
					}
				</select>
			</div>
		);
}

export default Selector