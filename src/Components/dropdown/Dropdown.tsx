import React from "react";
import "./style.scss";
interface propsDropdown {
	nodeRef: any;
	type?: any;
}

const Dropdown = ({ nodeRef, type }: propsDropdown) => {
	return (
		<div
			data-aos="zoom-in-down"
			ref={nodeRef}
			className="dropdown is_messages absolute lg:top-[38px] lg:right-0 lg:w-[340px] h-[calc(100vh-65px)]  bg-white rounded-none bottom-[56px] w-full   -left-1 lg:shadow-2xl  lg:left-[-144px] lg:max-h-[490px] lg:min-h-[190px]"
		>
			<div className="h-full px-3 overflow-y-scroll dropdown-scrollbar ">
				<div className="dropdown-head-title pt-[15px] px-[3px] pb-[10px] flex items-center justify-between">
					<h4 className="mb-0 text-xl font-semibold text-[#666]">
						{!type && "chua dat ten"}
						{type === "messages" && "Messages"}
						{type === "notifications" && "Notifications"}
					</h4>
					<div className="flex items-center btn_action ">
						<a
							href="#"
							className="relative rounded-full flex justify-center items-center w-[31px] transition-all hover:bg-[#f0f2f5] h-[31px] "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-[#666]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</a>
						<a
							href="#"
							className="relative rounded-full flex justify-center items-center w-[31px] transition-all hover:bg-[#f0f2f5] h-[31px] "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-[#666]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</a>
					</div>
				</div>
				{type === "messages" && (
					<div className="search_in_mess">
						<input
							type="text"
							placeholder="Search in Messages"
							className="w-full bg-[#f3f4f6] rounded-3xl h-[38px] border-none outline-none px-5 mb-[6px]"
						/>
					</div>
				)}

				<ul>
					{Array(9)
						.fill(0)
						.map((item, index) => {
							return (
								<li className="relative transition-all  rounded-lg transition-all hover:rounded-lg hover:bg-[#f1f3f4]">
									{type === "messages" && <ElementMessages />}
									{type === "notifications" && (
										<ElementNotification />
									)}
								</li>
							);
						})}
				</ul>
			</div>

			{/* <a
				href="#"
				className="absolute bottom-[-1px] left-0 block w-full pt-2 pb-4 font-semibold text-center bg-white lg:shadow-lg see-all"
			>
				See all in messages
			</a> */}
		</div>
	);
};
const ElementMessages = () => {
	return (
		<a
			href="#"
			className="flex items-center text-[#808080] relative py-2 px-[9px] block"
		>
			<div className="drop_avatar w-[45px] h-[45px] rounded-full overflow-visible flex-shrink-0 relative  ">
				<img
					src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-7.jpg"
					alt=""
					className="object-cover w-full rounded-full"
				/>
			</div>
			<div className="drop_text relative  pl-4 flex-1 leading-[23px] after:content-[''] after:w-[10px] after:h-[10px] after:bg-light-blue after:absolute after:rounded-full after:right-[0] after:bottom-[16px]">
				<strong> Stella Johnson </strong>
				<time className="absolute right-[0] top-0 text-[10px] m-0">
					12:43 PM
				</time>
				<p> Alex will explain you how ... </p>
			</div>
		</a>
	);
};
const ElementNotification = () => {
	return (
		<a href="#" className="flex  py-[8px] px-[9px] font-medium">
			<div className="drop_avatar relative h-[45px] w-[45px] rounded-full  after:absolute after:w-[14px] after:h-[14px] after:bottom-0 after:right-0 after:bg-black after:rounded-full after:bg-color-online after:border-2 after:border-[#c0c0c0]">
				<img
					src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
					alt=""
					className="w-full h-full rounded-full"
				/>
			</div>
			<div className="drop_text">
				<p className="text-[#808080]">
					<strong>Stella Johnson</strong> Replay Your Comments in{" "}
					<span className="text-link">Learn Prototype Faster </span>
				</p>
				<div>
					<time> 9 hours ago </time>
				</div>
			</div>
		</a>
	);
};
export default Dropdown;
