import React, {Component} from 'react';
import Days from './Days';
export default class WeatherInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			days : props.data,
			name: '0',
			dia: 'Dia',
			clima: 'Seleccione'
		}
		this.setDay = this.setDay.bind(this)
	}
	setDay(x,d,l){
		this.setState(state=>({name:x,dia:d,clima:l}))
	}
	render(){
		return(
			<div>
				
				{this.state.days.map((item)=>
					<Days 
						number={item.number}
						clima={item.clima}
						dia={item.dia}
						key={item.number} 
						changeClima={this.setDay}/>
				)}

<div><span className="big">
{this.state.clima}
</span>
<br />{this.state.name} -{this.state.dia}</div>
			</div>
		)		
	}

}