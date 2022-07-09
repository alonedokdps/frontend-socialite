import React from "react";

const Comment = () => {
	return (
		<div className="p-4 space-y-3">
			<div className="flex space-x-4 xs:font-medium items-center justify-between  lg:font-bold">
				<a href="#" className="flex items-center space-x-2">
					<div className="p-2 text-black rounded-full xs:bg-gray-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							width="22"
							height="22"
							className="text-blue-500 "
						>
							<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
						</svg>
					</div>
					<div className="">Like</div>
				</a>
				<a href="#" className="flex items-center space-x-2">
					<div className="p-2 text-black rounded-full lg:bg-gray-100 dark:bg-gray-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							width="22"
							height="22"
							className="text-blue-500"
						>
							<path
								fill-rule="evenodd"
								d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
					<div className="">Comment</div>
				</a>
				<a
					href="#"
					className="flex items-center justify-end flex-1 space-x-2"
				>
					<div className="p-2 text-black rounded-full lg:bg-gray-100 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							width="22"
							height="22"
							className="text-blue-500"
						>
							<path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
						</svg>
					</div>
					<div className="md:block  xs:hidden">Share</div>
				</a>
			</div>
			<div className="flex items-center pt-2 space-x-3">
				<div className="flex items-center">
					<img
						src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
						alt=""
						className="w-6 h-6 border border-2 border-white rounded-full"
					/>
					<img
						src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-4.jpg"
						alt=""
						className="w-6 h-6 -ml-2 border border-2 border-white rounded-full"
					/>
					<img
						src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
						alt=""
						className="w-6 h-6 -ml-2 border border-2 border-white rounded-full"
					/>
				</div>
				<div className="text-black">
					Liked <strong> Johnson</strong> and{" "}
					<strong> 209 Others </strong>
				</div>
			</div>
			<div className="py-4 space-y-4 border-t ">
				<div className="flex">
					<div className="relative flex-shrink-0 w-10 h-10 rounded-full">
						<img
							src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-1.jpg"
							alt=""
							className="absolute w-full h-full rounded-full"
						/>
					</div>
					<div>
						<div>
							<div className="relative px-3 py-2 ml-2 text-gray-700 bg-gray-100 rounded-md lg:ml-5 lg:mr-12 ">
								<p className="leading-6">
									In ut odio libero vulputate
									<i className="uil-grin-tongue-wink"> </i>
								</p>
								<div className="absolute w-3 h-3 transform rotate-45 bg-gray-100 top-3 -left-1 "></div>
							</div>
							<div className="flex items-center mt-2 ml-5 space-x-3 text-sm">
								<a
									href="#"
									className="flex block gap-1 text-red-600"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										/>
									</svg>
									<span className="inline-block text-sm">
										Favorite
									</span>
								</a>
								<a href="#"> Replay </a>
								<span> 3d </span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a href="#">Veiw 8 more Comments</a>
			<div className="relative bg-gray-100 border-t rounded-full ">
				<input
					placeholder="Add your Comment.."
					className="w-full py-5 pl-5 pr-20 bg-transparent border-none shadow-none outline-0 max-h-10"
				/>
				<div className="absolute flex items-center gap-2 text-xl transform top-2/4 right-4 -translate-y-2/4 ">
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</a>
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</a>
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Comment;
