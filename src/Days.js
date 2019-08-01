import React from 'react';

export default function Days(props){
	return(
		<button className="tiny ui button" onClick={()=>props.changeClima(props.number, props.dia, props.clima)}>{props.number} - {props.dia}</button>
	)
}