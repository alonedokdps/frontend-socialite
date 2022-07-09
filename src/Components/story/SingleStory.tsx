import React from "react";
import "./style.scss";
const SingleStory = () => {
	return (
		<div className="single_story ">
			<img
				src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-1.jpg"
				alt=""
			/>
			<div className="story-avatar">
				<img
					src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-6.jpg"
					alt=""
				/>
			</div>
			<div className="story-content">
				<h4 className=" sm:text-left md:text-center">Lan ngoc</h4>
			</div>
		</div>
	);
};

export default SingleStory;
