import React from "react";

const ColRight = () => {
	return (
		<div className="w-full lg:w-72">
			{/* happy birthdays */}
			<div className="px-4 py-3 mb-5 bg-white rounded-md shadow-md ">
				<h3 className="mb-1 font-semibold"> Birthdays </h3>
				<div className="flex px-2 py-2 -mx-2 duration-300 rounded-md hover:bg-gray-50">
					<img
						src="http://demo.foxthemes.net/socialitev2.2/assets/images/icons/gift-icon.png"
						alt=""
						className="mr-3 w-9 h-9"
					/>
					<p className="mb-0 leading-6 line-clamp-2 ">
						<strong>Jessica Erica</strong> and
						<strong> two others </strong>
						have a birthdays to day .
					</p>
				</div>
			</div>
			<h3 className="text-xl font-semibold">Contacts</h3>
			<nav className="mb-2 -mt-2 border-b responsive-nav extended">
				<ul className="flex items-center justify-between mb-0 ">
					<li className="flex items-center justify-center flex-1 text-center">
						<p className=" block lg:leading-[68px] mb-0 lg:font-semibold w-full leading-[50px] border-b-[3px] border-blue-600 font-medium text-[#8c8d90] relative text-base  ">
							Friends
							<span className="px-[9px] ml-3  py-[5px] bg-ligth-greyBlue rounded-3xl font-medium text-[11px] ">
								320
							</span>
						</p>
					</li>
					<li className="flex items-center justify-center flex-1 text-center">
						<p className=" block lg:leading-[68px] lg:font-semibold w-full mb-0 leading-[50px] font-medium text-[#8c8d90] relative text-base  ">
							Groups
							<span className="px-[9px] ml-3  py-[5px] bg-ligth-greyBlue rounded-3xl font-medium text-[11px] ">
								320
							</span>
						</p>
					</li>
				</ul>
			</nav>
			<div className="contact">
				<div className="contact-item">
					<div className="contact-item-avatar">
						<img
							src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
							alt=""
						/>
					</div>
					<div className="contact-item-username">Denis dang</div>
				</div>
				<div className="contact-item">
					<div className="contact-item-avatar">
						<img
							src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
							alt=""
						/>
					</div>
					<div className="contact-item-username">Denis dang</div>
				</div>
				<div className="contact-item">
					<div className="contact-item-avatar">
						<img
							src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
							alt=""
						/>
					</div>
					<div className="contact-item-username">Denis dang</div>
				</div>
			</div>
		</div>
	);
};

export default ColRight;
