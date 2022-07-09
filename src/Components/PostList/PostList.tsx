import Comment from "@components/comment/Comment";
import React from "react";

const PostList = () => {
	return (
		<>
			<Post />
			<Post />
			<Post />
			<Post />
		</>
	);
};
const Post = () => {
	return (
		<div className="shadow-xl card lg:mx-0">
			<div className="flex justify-between items-center lg:p-4 p-2.5">
				<div className="flex items-center flex-1 space-x-4">
					<a href="#">
						<img
							src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-2.jpg"
							className="w-10 h-10 bg-gray-200 border border-white rounded-full"
						/>
					</a>
					<div className="flex-1 font-semibold capitalize">
						<a href="#" className="text-black ">
							Johnson smith
						</a>
						<div className="flex items-center flex-1 space-x-2 text-gray-700">
							5 <span> hrs </span>
						</div>
					</div>
					<div>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className="img_of_post">
				<a href="">
					<img
						src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-3.jpg"
						alt=""
						className="object-cover w-full max-h-96"
					/>
				</a>
			</div>
			<Comment />
		</div>
	);
};
export default PostList;
