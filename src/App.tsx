/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@hooks";
import Loading from "@components/loading";
import Approutes from "./Routes";
import { useEffect } from "react";
import Header from "./Components/header/index";
import Main from "@layouts/Main";
import { SiderBar } from "@components";
import SingleStory from "@components/story/SingleStory";
import CreatePost from "./CreatePost/CreatePost";
import PostList from "@components/PostList/PostList";
import { BrowserRouter, NavLink, Route, useHistory } from "react-router-dom";

import ProfileScreen from "@components/profile";
import PAGEDETAIL from "@components/pagedetail"
import GROUP_PAGE from "@components/group_page"
import PAGE from "@components/pages"
import JOBS from "@components/jobs";
import EVENTS from "@components/events"
import PHOTO from "@components/photo"

function App() {
	const { isLoading, loadProfileAction } = useAuth();

	useEffect(() => {
		loadProfileAction();
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Main>
				<Header />
				<SiderBar />
				<div className="main_content">
					<div className="mcontainer">
					<Route path="/" exact>
						<div className="lg:flex lg:space-x-10">
							<div className="lg:w-3/4 lg:px-20 space-y-7">
								<div className="relative grid grid-cols-3 gap-2 user_story md:grid-cols-5 lg:-mx-20">
									<SingleStory />
									<SingleStory />
									<SingleStory />
									<SingleStory />
									<SingleStory />
								</div>
								<CreatePost />
								<PostList />
							</div>
						</div>
					</Route>
						{/* <ProfileScreen/> */}
						<Route path="/pages" exact><PAGE/></Route>
						<Route path="/groups" exact><GROUP_PAGE/></Route>
						<Route path="/jobs" exact><JOBS/></Route>
						<Route path="/event" exact><EVENTS/></Route>
						<Route path="/photos" exact><PHOTO/></Route>
					</div>
				</div>
				
			</Main>

			{/* <Approutes /> */}
		</>
	);
}

export default App;