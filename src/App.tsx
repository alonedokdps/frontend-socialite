/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@hooks";
import Loading from "@components/loading";
import Approutes from "./Routes";
import { useEffect } from "react";
import Header from "./Components/header/index";
import Main from "@layouts/Main";
import { SiderBar } from "@components";
import { ModalStory } from "@components/story";
import CreatePost from "./CreatePost/CreatePost";
import PostList from "@components/PostList/PostList";
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
				{/* <Header /> */}
				<ModalStory/>
				{/* <SiderBar />
				<div className="main_content">
					<div className="mcontainer">
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
					</div>
				</div> */}
			</Main>

			{/* <Approutes /> */}
		</>
	);
}

export default App;
