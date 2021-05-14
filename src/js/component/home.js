import React from "react";
import SecondsCounter from "./secondsCounter.jsx";

//create your first component
export function Home() {
	let counter = 0;
	setInterval(function() {
		counter++;
		console.log(counter);
	}, 1000);
	return (
		<div>
			<div className="text-center mt-5 d-flex justify-content-around">
				<div className="square">
					<img src="https://i0.wp.com/www.alicanteturismo.com/wp-content/uploads/2021/02/icono-reloj-arena-oscuro.png?fit=500%2C500&ssl=1"></img>
				</div>
				{/* hours */}
				<div className="square"></div>
				<div className="square"></div>
				{/* minutes */}
				<div className="square"></div>
				<div className="square"></div>
				{/* seconds */}
				<div className="square">
					<SecondsCounter seconds={counter} />
				</div>
				<div className="square">
					<SecondsCounter seconds={counter} />
				</div>
			</div>
		</div>
	);
}
