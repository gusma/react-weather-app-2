import React, {Component} from 'react';

import WeatherInfo from './WeatherInfo';
export default class WrapperDays extends Component{
	constructor(props){
		super(props);
		this.state={
			days:[{number:1,clima:'nubes'},{number:2,clima:'soleado'}, {number:3,clima:'lluvia'}]
		}
		
	}

	render(){
		return(
			<div>
				<WeatherInfo 						
					data={this.state.days}
					/>
			</div>
		)
	}

}