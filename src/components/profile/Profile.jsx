import React from "react";
import "./Profile.css";

const Profile = () => {
	return (
		<div className="pt-4 px-5 profile-section">
			<div className="d-flex align-items-center gap-3">
				<img
					src="https://i.postimg.cc/R0cZtGy4/istockphoto-477901370-612x612.jpg"
					alt="profile"
					className="profile-img"
				/>
				<div>
					<div className="fs-3 fw-bold text-one">Hi Mike,</div>
					<div className="text-secondary">welcome back</div>
				</div>
			</div>

			<div className="ps-4">
				<div className="mt-5">
					<>
						<div className="fs-5 text-one fw-bold pb-3">Today</div>
						<div className="display-6 fw-bold">$19,892</div>
						<div className="text-secondary pb-3">
							Account Balance
						</div>
					</>

					<>
						<div className="fs-4 fw-bold">$4,000</div>
						<div className="text-secondary pb-3">
							Year-to-Date Contributions
						</div>
					</>

					<>
						<div className="fs-4 fw-bold">$1,892</div>
						<div className="text-secondary pb-3">
							Total Interest
						</div>
					</>

					<select className="btn want-btn">
						<option>I want to</option>
						<option>Deposit</option>
						<option>Withdraw</option>
						<option>Invest</option>
					</select>
				</div>

				<div>
					<div className="pt-3 fs-4 fw-bold">Recent Transactions</div>

					<div className="transactions">
						<div className="text-secondary pb-1">2020-08-07</div>
						<div className="">
							Withdrawal Transfer to Bank-XXX11
						</div>
					</div>
					<div className="transactions">
						<div className="text-secondary pb-1">2020-08-07</div>
						<div className="">
							Withdrawal Transfer to Bank-XXX11
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
