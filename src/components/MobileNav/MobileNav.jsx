import React from "react";
import "./MobileNav.css";
import { GoHome } from "react-icons/go";
import { FaSearch, FaRegListAlt, FaRegNewspaper } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const MobileNav = () => {
	return (
		<div className="d-sticky d-md-none mobile-nav">
			<div>
				<GoHome className="fs-4 text-secondary active"></GoHome>
			</div>
			<div>
				<FaRegNewspaper className="fs-4 text-secondary"></FaRegNewspaper>
			</div>
			<div>
				<FaRegListAlt className="fs-4 text-secondary"></FaRegListAlt>
			</div>
			<div>
				<CgProfile className="fs-4 text-secondary"></CgProfile>
			</div>
			<div>
				<FaSearch className="fs-4 text-secondary"></FaSearch>
			</div>
		</div>
	);
};

export default MobileNav;
