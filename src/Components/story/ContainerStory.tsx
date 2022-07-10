import { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import FriendsStory from "./FriendsStory";
import ModalImage from "./ModalImage";
import Header from '../header'



const ContainerStory = () => {
	const [isShowModalImage, setIsShowModalImage] = useState(false)
	return (
		<div className="h-screen">
			{!isShowModalImage && <div className="lgConfig:hidden block h-[10vh]">
				<Header />
			</div>}
			{!isShowModalImage && <div className="lgConfig:flex-col lgConfig:p-0 overflow-hidden w-full h-[90vh] flex">
				<div className="lgConfig:w-full lgConfig:h-[40%] lgConfig:overflow-hidden block bg-white w-1/4 h-full shadow-lg shadow-black-500/50 p-3 overflow-auto scroll-smooth">
					<div className="flex justify-between items-center py-2">
						<h3 className="text-2xl font-semibold m-0">All Story</h3>
						<a className="text-blue-600" href="#">
							Setting
						</a>
					</div>
					<div className="h-full ">
						<h3 className="text-lg font-semibold">Your Story</h3>
						<a
							className="flex space-x-4 items-center hover:bg-gray-100 md:my-2 py-2 rounded-lg text-gray-700 hover:text-black"
							href="#"
						>
							<svg
								className="w-12 h-12 p-3 bg-gray-200 rounded-full text-blue-500 ml-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								></path>
							</svg>
							<div className="flex-1">
								<div className="text-lg font-semibold">
									Create a story
								</div>
								<div className="text-sm -mt-0.5">
									Share a photo or write something.
								</div>
							</div>
						</a>
						<h3 className="text-lg font-semibold lg:mt-3 mt-1">
							Friends Story
						</h3>
						<div className="lgConfig:flex lgConfig:overflow-x-auto block">
							<FriendsStory
								userName="Denis Han"
								news="2"
								sinceCreate="1"
							/>
							<FriendsStory
								userName="Andrian Mohani"
								news="1"
								sinceCreate="35"
							/>
							<FriendsStory
								userName="Alex Dolgove"
								news="3"
								sinceCreate="45"
							/>
							<FriendsStory
								userName="Stella Johnson"
								news="1"
								sinceCreate="1"
							/>
							<FriendsStory
								userName="Stella Johnson"
								news="1"
								sinceCreate="6"
							/>
							<FriendsStory
								userName="Stella Johnson"
								news="5"
								sinceCreate="12"
							/>
							<FriendsStory
								userName="Stella Johnson"
								news="1"
								sinceCreate="2"
							/>
							<FriendsStory
								userName="Denis Han"
								news="2"
								sinceCreate="1"
							/>
						</div>
					</div>
				</div>
				<div className="lgConfig:h-[60%] lgConfig:w-full lgConfig:my-1 lgConfig:overflow-hidden relative w-3/4 flex items-center justify-center">
					<span
						className="lgConfig:hidden absolute cursor-pointer top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-500"
						uk-toggle="target: body ; cls: story-active"
						uk-tooltip="title:Close story ; pos: left"
						title=""
						aria-expanded="false"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</span>
					<div className="lgConfig:w-[80%] lgConfig:h-full relative w-[450px] h-[540px] rounded-lg">
						<span className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-0 translate-x-2/4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-500">
							<BiChevronRight size={28} />
						</span>
						<span className="absolute cursor-pointer top-[50%] translate-y-[-50%] left-0 translate-x-[-50%] flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-500">
							<BiChevronLeft size={28} />
						</span>
						<a
							onClick={() => setIsShowModalImage(!isShowModalImage)}
							className="block rounded-lg w-full h-full overflow-hidden"
							href="#"
						>
							<img
								className="object-cover w-full h-full"
								src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg"
								alt="Image"
							/>
						</a>
					</div>
				</div>
			</div>}
			{isShowModalImage && <ModalImage imageUrl="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg"/>}
		</div>
	);
};

export default ContainerStory;
