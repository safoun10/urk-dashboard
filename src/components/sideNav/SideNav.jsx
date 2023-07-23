import React from "react";
import "./SideNav.css";
import { FaSearch, FaRegListAlt , FaRegNewspaper } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { RxExit } from "react-icons/rx";

const SideNav = () => {
	return (
		<div className="side d-flex flex-column justify-content-between align-items-center">
			<div>
				<div className="mt-3">
					<div className="fs-2 text-info">
						<img
							className="img-fluid p-2"
							src="https://i.postimg.cc/pdK390hb/butterfly.png"
							alt=""
						/>
					</div>
					<div className="fs-4">
						<FaSearch></FaSearch>
					</div>
				</div>
				<div className="mt-5 d-flex flex-column gap-4 justify-content-center align-items-center">
					<GoHome className="fs-4"></GoHome>
					<FaRegNewspaper className="fs-4"></FaRegNewspaper>
					<FaRegListAlt className="fs-4"></FaRegListAlt>
					<CgProfile className="fs-4"></CgProfile>
				</div>
			</div>
			<div className="d-flex flex-column gap-4 mb-4">
				<IoMdNotifications className="fs-4"></IoMdNotifications>
				<RxExit className="fs-4"></RxExit>
			</div>
		</div>
	);
};

export default SideNav;
