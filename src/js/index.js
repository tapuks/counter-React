//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application
const Counter = props => {
	return (
		<div>
			<div className="text-center mt-5 d-flex justify-content-around">
				<div className="square">
					<img src="https://i0.wp.com/www.alicanteturismo.com/wp-content/uploads/2021/02/icono-reloj-arena-oscuro.png?fit=500%2C500&ssl=1"></img>
				</div>

				<div className="square">{props.square6 % 10}</div>
				<div className="square">{props.square5 % 10}</div>
				<div className="square">{props.square4 % 10}</div>
				<div className="square">{props.square3 % 10}</div>
				<div className="square">{props.square2 % 10}</div>
				<div className="square">{props.square1 % 10}</div>
			</div>
		</div>
	);
};
Counter.PropTypes = {
	square1: PropTypes.number,
	square2: PropTypes.number,
	square3: PropTypes.number,
	square4: PropTypes.number,
	square5: PropTypes.number,
	square6: PropTypes.number
};

let counter = 0;
setInterval(() => {
	const square1 = Math.floor(counter / 1);
	const square2 = Math.floor(counter / 10);
	const square3 = Math.floor(counter / 100);
	const square4 = Math.floor(counter / 1000);
	const square5 = Math.floor(counter / 10000);
	const square6 = Math.floor(counter / 100000);
	counter++;
	ReactDOM.render(
		<Counter
			square1={square1}
			square2={square2}
			square3={square3}
			square4={square4}
			square5={square5}
			square6={square6}
		/>,
		document.querySelector("#app")
	);
}, 1000);
