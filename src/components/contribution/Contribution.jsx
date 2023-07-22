import React from "react";
import "./Contribution.css"

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
                stacked bar chart
            </section>
		</div>
	);
};

export default Contribution;
