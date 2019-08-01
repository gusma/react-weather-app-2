import React from 'react';

export default function Days(props){
	return(
		<button onClick={()=>props.changeClima(props.number, props.clima)}>{props.number}</button>
	)
}