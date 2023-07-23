import React from "react";
import "./Contribution.css";

// *********************************************************************************************
import { letterFrequency } from "@visx/mock-data";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency;

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = (d) => d.letter;
const y = (d) => +d.frequency * 100;

// And then scale the graph by our data
const xScale = scaleBand({
	range: [0, xMax],
	round: true,
	domain: data.map(x),
	padding: 0.4,
});
const yScale = scaleLinear({
	range: [yMax, 0],
	round: true,
	domain: [0, Math.max(...data.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

// ********************************************************************************************************88

const Contribution = () => {
	return (
		<div>
			<div className="fs-4 fw-bold">Contributions Overtime</div>

			<div className="d-flex justify-content-between pt-2">
				<div className="text-secondary d-flex align-items-center gap-2">
					<div className="color-box-1"></div>
					Employer:
					<span className="fw-bold text-dark">K 73,500</span>
				</div>
				<div className="text-secondary d-flex align-items-center gap-2">
					<div className="color-box-2"></div>
					Employee:
					<span className="fw-bold text-dark">K 52,500</span>
				</div>
				<div className="text-secondary d-flex align-items-center gap-2">
					<div className="color-box-3"></div>
					Total Interest:
					<span className="fw-bold text-dark">K 244,313</span>
				</div>
			</div>


			<section className="py-3">
				{/* **************************************************** */}
				stacked bar chart
				{/* **************************************************** */}
				
			</section>
		</div>
	);
};

export default Contribution;
