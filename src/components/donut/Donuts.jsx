import React from "react";
import "./Donuts.css";

const Donuts = () => {
	return (
		<div className="d-flex justify-content-around align-items-center pt-md-0 pt-4">
			<div className="d-block">
				<div className="donut-1"></div>
				<span className="text-1">
					75<sup>%</sup>
				</span>
			</div>
			<div className="d-block">
				<div className="donut-1"></div>
				<span className="text-1">
					75<sup>%</sup>
				</span>
			</div>
			<div className="d-block">
				<div className="donut-1"></div>
				<span className="text-1">
					75<sup>%</sup>
				</span>
			</div>
		</div>
	);
};

export default Donuts;
