import React, { useState } from "react";
import "./SideNavBar.css";
import Home from "../Home/Home";


const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "SignIn",
			icon: "icons/grid.svg",
		},
		{
			text: "LogIn",
			icon: "icons/user.svg",
		},
		{
			text: "Messages",
			icon: "icons/message.svg",
		},
	];
	return (
		<div className="banner">
			<div id="left-side"
				className={
					isExpanded
						? "side-nav-container"
						: "side-nav-container side-nav-container-NX"}>
				<div className="nav-upper">
					<div className="nav-heading">
						{isExpanded && (
							<div className="nav-brand">
								<img src="icons/Lg.png" alt="" srcset="" />
								<h2>Pod Club</h2>
							</div>
						)}
						<button
							className={
								isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"}
							onClick={() => setExpendState(!isExpanded)}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
					<div className="nav-menu">
						{menuItems.map(({ text, icon }) => (
							<a
								className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/">
								<img className="menu-item-icon" src={icon} alt="/" srcset="" />
								{isExpanded && <p>{text}</p>}
							</a>
						))}
					</div>
				</div>
				<div className="nav-footer">
					{isExpanded && (
						<div className="nav-details">
							<img
								className="nav-footer-avatar"
								src="icons/admin-avatar.svg"
						alt="#"	/>
						</div>
					)}
				</div>
			</div>
			<div className="container-box">
				<Home/>
			</div>
		</div>
	);
};

export default SideNavBar;
