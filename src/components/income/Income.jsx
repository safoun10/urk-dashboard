import React from "react";
import "./Income.css";
import Contribution from "../contribution/Contribution";

const Income = () => {
	return (
		<div className="pt-4">
			<div className="income-head fs-5 text-one">Retirement Income</div>
			<div className="fs-1 fw-bold">Starting Year 2056</div>

			<div className="row pt-3 pb-2">
				<div className="p-3 col-4">
					<div className="goal-box">
						<div className="fs-4 fw-bold">$300,000</div>
						<div className="text-secondary">My goal</div>
					</div>
				</div>
				<div className="p-3 col-4">
					<div className="goal-box">
						<div className="fs-4 fw-bold">59%</div>
						<div className="text-secondary">Goal achieved</div>
					</div>
				</div>
				<div className="p-3 col-4">
					<div className="goal-box">
						<div className="fs-4 fw-bold">$300</div>
						<div className="text-secondary">
							Est. Monthly Income
						</div>
					</div>
				</div>
			</div>

			<div>
				<Contribution></Contribution>
			</div>

			<div>
				<div className="fs-4 fw-bold">
					How do I compare to my peers ?
				</div>
				<div className="text-secondary pt-1 pb-4">
					These numbers represent current goal achievements{" "}
				</div>

				<div className="row align-items-center">
					<div className="col-4 d-flex flex-column">
						<div className="selected-nums">
							{" "}
							<span className="fw-bold">Age:</span> Under{" "}
							<select className="border-0">
								<option value="">30</option>
								<option value="">40</option>
								<option value="">50</option>
								<option value="">60</option>
								<option value="">70</option>
							</select>
						</div>
						<div className="selected-nums">
							{" "}
							<span className="fw-bold">Salary:</span>{" "}
							<select className="border-0">
								<option value="">k 20 - k 30</option>
								<option value="">k 30 - k 40</option>
								<option value="">k 40 - k 50</option>
								<option value="">k 50 - k 60</option>
								<option value="">k 70 or more</option>
							</select>
						</div>
						<div>
							{" "}
							<span className="fw-bold">Gender:</span>{" "}
							<select className="border-0">
								<option value="">Male</option>
								<option value="">Female</option>
								<option value="">Other</option>
							</select>
						</div>
					</div>
					<div className="col-8">donut chart</div>
				</div>
			</div>
		</div>
	);
};

export default Income;
