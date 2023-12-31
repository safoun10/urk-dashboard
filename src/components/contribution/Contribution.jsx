import React, { PureComponent } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import "./Contribution.css";

const Contribution = () => {
	const data = [
		{
			name: "20",
			Employer: 25,
			TotalInterest: 30,
			Employee: 40,
		},
		{
			name: "",
			Employer: 50,
			TotalInterest: 60,
			Employee: 80,
		},
		{
			name: "30",
			Employer: 75,
			TotalInterest: 90,
			Employee: 120,
		},
		{
			name: "",
			Employer: 100,
			TotalInterest: 120,
			Employee: 160,
		},
		{
			name: "40",
			Employer: 125,
			TotalInterest: 150,
			Employee: 200,
		},
		{
			name: "",
			Employer: 150,
			TotalInterest: 180,
			Employee: 240,
		},
		{
			name: "50",
			Employer: 175,
			TotalInterest: 210,
			Employee: 280,
		},
		{
			name: "",
			Employer: 200,
			TotalInterest: 240,
			Employee: 320,
		},
		{
			name: "60",
			Employer: 225,
			TotalInterest: 270,
			Employee: 360,
		},
		{
			name: "",
			Employer: 250,
			TotalInterest: 300,
			Employee: 400,
		},
		{
			name: "70",
			Employer: 275,
			TotalInterest: 330,
			Employee: 440,
		},
		{
			name: "",
			Employer: 300,
			TotalInterest: 360,
			Employee: 480,
		},
		{
			name: "80",
			Employer: 325,
			TotalInterest: 390,
			Employee: 520,
		},
		{
			name: "",
			Employer: 350,
			TotalInterest: 420,
			Employee: 560,
		},
		{
			name: "90",
			Employer: 375,
			TotalInterest: 450,
			Employee: 600,
		},
	];

	return (
		<div>
			<div className="fs-4 pt-5 pt-md-0 fw-bold">
				Contributions Overtime
			</div>

			<div className="d-flex justify-content-between pt-md-2 pt-3 pb-md-0 pb-4">
				<div className="text-secondary d-flex align-items-center justify-content-start gap-2 flex-wrap">
					<div className="color-box-1"></div>
					Employer:
					<span className="fw-bold text-dark">K 73,500</span>
				</div>
				<div className="text-secondary d-flex align-items-center justify-content-start gap-2 flex-wrap">
					<div className="color-box-2"></div>
					Employee:
					<span className="fw-bold text-dark">K 52,500</span>
				</div>
				<div className="text-secondary d-flex align-items-center justify-content-start gap-2 flex-wrap">
					<div className="color-box-3"></div>
					Total Interest:
					<span className="fw-bold text-dark">K 244,313</span>
				</div>
			</div>

			<section className="py-3 d-none very-large">
				<BarChart
					width={750}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>

			<section className="py-3 d-none xxxl">
				<BarChart
					width={650}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>

			<section className="py-3 d-none xxl">
				<BarChart
					width={580}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>

			<section className="py-3 d-none xl">
				<BarChart
					width={495}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>

			<section className="py-3 d-none lg">
				<BarChart
					width={550}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>

			<section className="py-3 d-none mlg">
				<BarChart
					width={450}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>

			<section className="py-3 d-none md">
				<BarChart
					width={350}
					height={220}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="6" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Employer" stackId="a" fill="rgb(8 0 163)" />
					<Bar dataKey="Employee" stackId="a" fill="rgb(73 53 255)" />
					<Bar
						dataKey="TotalInterest"
						stackId="a"
						fill="rgb(133 175 255)"
					/>
				</BarChart>
			</section>
		</div>
	);
};

export default Contribution;
