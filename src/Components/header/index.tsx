import React from "react";
import logo from "../../Assets/images/logo.png";
import logoMobile from "../../Assets/images/logo-mobile.png";
import "./style.scss";
import NumNotification from "@components/numbernotification/NumNotification";
const index = () => {
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
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
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
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
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
							<button className="is_toggle">Night Mode</button>
							<button className="is_icon">
								<svg
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
								</svg>
								<NumNotification />
							</button>
							<button className="is_icon">
								<svg
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
								</svg>
							</button>
							<button className="is_icon">
								<svg
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
								</svg>
							</button>
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
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
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
