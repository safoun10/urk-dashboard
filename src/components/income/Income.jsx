import React from 'react';
import "./Income.css"

const Income = () => {
    return (
		<div className="pt-4">
			<div className="income-head fs-5 text-one">Retirement Income</div>
			<div className="fs-1 fw-bold">Starting Year 2056</div>

			<div className="row pt-4">
				<div className='p-3 col-4'>
					<div className="goal-box">
						<div className="fs-4 fw-bold">$300,000</div>
						<div className="text-secondary">My goal</div>
					</div>
				</div>
				<div className='p-3 col-4'>
					<div className="goal-box">
						<div className="fs-4 fw-bold">59%</div>
						<div className="text-secondary">Goal achieved</div>
					</div>
				</div>
				<div className='p-3 col-4'>
					<div className="goal-box">
						<div className="fs-4 fw-bold">$300</div>
						<div className="text-secondary">Est. Monthly Income</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Income;