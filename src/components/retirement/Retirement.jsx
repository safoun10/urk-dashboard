import React, { useState } from "react";
import "./Retirement.css";
import RangeSlider from "react-bootstrap-range-slider";

const Retirement = () => {

    const [value, setValue] = useState(0); 

	return (
		<div>
			<section className="strategy-section mt-4 p-3">
				<div className="fw-bold text-one pb-3">Retirement Strategy</div>
				<div>
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
			</section>
			<section></section>
		</div>
	);
};

export default Retirement;
