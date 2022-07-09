import CreatePost from "@components/CreatePost/CreatePost";
import PostList from "@components/PostList/PostList";
import SingleStory from "@components/story/SingleStory";
import React from "react";

const ColLeft = () => {
	return (
		<div className="lg:w-3/4 lg:px-20 space-y-7">
			<div className="relative grid grid-cols-3 gap-2 lg:-mx-20 user_story md:grid-cols-5">
				<SingleStory />
				<SingleStory />
				<SingleStory />
			</div>
			<CreatePost />
			<PostList />
			<PostList />

			<PostList />

			<PostList />

			<PostList />
		</div>
	);
};

export default ColLeft;
