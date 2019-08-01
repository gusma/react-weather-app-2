import React, {Component} from 'react';
import ReturnDays from './components/returnDays';

export default class WeatherInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			days : props.data,
			name: '0',
			clima: 'Seleccione'
		}
		this.setDay = this.setDay.bind(this)
	}
	setDay(x,l){
		this.setState(state=>({name:x,clima:l}))
	}
	render(){
		return(
			<div>
				{this.state.name} - {this.state.clima}
				{this.state.days.map((item)=>
					<ReturnDays 
						number={item.number}
						clima={item.clima}
						key={item.number} 
						changeClima={this.setDay}/>
				)}
			</div>
		)		
	}

}