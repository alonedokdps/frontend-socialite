/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import logo from "../../Assets/images/logo.png";
import logoMobile from "../../Assets/images/logo-mobile.png";
import "./style.scss";
import NumNotification from "@components/numbernotification/NumNotification";

import { useDropdown } from "@components/dropdown/DropdownContext";
import Dropdown from "@components/dropdown/Dropdown";

const dataButton = [
	{
		id: "notifications",
		iconNormal: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				/>
			</svg>
		),
		iconActive: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-5 h-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		id: "messages",
		iconNormal: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
				/>
			</svg>
		),
		iconActive: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-5 h-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
];
const index = () => {
	const { show, setShow, nodeRef, buttonRef, nameDropdown, setNameDropdown } =
		useDropdown();

	const handleActiveDropdown = (id: string) => {
		setShow(!show);
		setNameDropdown(id);
	};
	return (
		<header>
			<div className="header_wrap">
				<div className="header_inner mcontainer">
					<div className="left-side">
						<span className="slide_menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
							>
								<path
									d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
									fill="currentColor"
								></path>
							</svg>
						</span>
						<div id="logo">
							<img src={logo} alt="" />
							<img
								src={logoMobile}
								alt=""
								className="logo-mobile"
							/>
						</div>
					</div>
					<div
						style={{ marginLeft: "auto" }}
						className="header-search-icon"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
					<div className="header-search">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							type="text"
							placeholder="Search for Friends , Videos and more.."
						/>
					</div>

					<div className="right_side">
						<div className="header_widgets">
							<button className="is_icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
							</button>
							{dataButton.map((item, index) => {
								return (
									<>
										<button
											ref={buttonRef}
											className="is_icon"
											key={index}
											onClick={() =>
												handleActiveDropdown(item.id)
											}
										>
											{item.iconNormal}
										</button>
										{show && item.id === nameDropdown && (
											<Dropdown
												nodeRef={nodeRef}
												type={item.id}
											/>
										)}
									</>
								);
							})}

							<button>
								<img
									src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-2.jpg"
									className="is_avatar"
								/>
							</button>
						</div>
					</div>
					<div className="start-chat">
						<svg
							className="h-7 w-7"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default index;
