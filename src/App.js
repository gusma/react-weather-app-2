import React, {Component} from 'react';

import WeatherInfo from './WeatherInfo';
import './App.css';

export default class WrapperDays extends Component{
	constructor(props){
		super(props);
		this.state={
			days:[{number:1, dia:'lunes', clima:'nubes'},
				  {number:2, dia:'martes', clima:'soleado'}, 
				  {number:3, dia:'miercoles', clima:'lluvia'}, 
				  {number:4, dia:'jueves', clima:'soleado'}, 
				  {number:5, dia:'viernes', clima:'soleado'}, 
				  {number:6, dia:'sabado', clima:'soleado'}, 
				  {number:7, dia:'domingo', clima:'soleado'} ]
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