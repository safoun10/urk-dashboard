import React, { useState } from "react";
import "./Retirement.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Link } from "react-router-dom";

const Retirement = () => {
	const [value, setValue] = useState(12);
	const [value_one, setValue_one] = useState(65);

	return (
		<div>
			<section className="strategy-section p-4 mb-2">
				<div className="fw-bold text-one pb-3">Retirement Strategy</div>

				<div className="pt-4">
					<div className="text-">Employee Contribution</div>
					<div className="d-flex justify-content-between align-items-center">
						<RangeSlider
							value={value}
							variant="primary"
							onChange={(changeEvent) =>
								setValue(changeEvent.target.value)
							}
						/>
						<div>{value}%</div>
					</div>
				</div>

				<div className="pt-3">
					<div className="text-">Retirement Age</div>
					<div className="d-flex justify-content-between align-items-center">
						<RangeSlider
							value={value_one}
							variant="primary"
							onChange={(changeEvent) =>
								setValue_one(changeEvent.target.value)
							}
						/>
						<div>{value_one}</div>
					</div>
				</div>

				<hr />

				<div>
					<div className="d-flex justify-content-between align-items-center">
						<p>Employer Contribution</p>
						<p>8.4%</p>
					</div>
					<div className="d-flex justify-content-between align-items-center pt-2">
						<p>Interest Rate</p>
						<p>5%</p>
					</div>
				</div>

				<div className="btn btn-primary w-100 py-2 rounded-3 my-3">
					Update
				</div>
				<div className="text-primary fw-bold text-center my-2">
					<Link className="text-decoration-none">
						View Help Docs {">"}
					</Link>
				</div>
			</section>
			<section className="add-section d-none d-lg-block">
				<div>
					Are you considering a <br />{" "}
					<span className="fw-bold">Housing Advance?</span>
				</div>
				<div className="text-secondary">
					Limited Time Reduced interest.
				</div>
				<div className="text-primary">
					<Link className="text-decoration-none">
						Learn More {">"}
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Retirement;
