import React, { FC } from "react";

interface Props {
    userName: string;
    news: String;
    sinceCreate: String;
}

const FriendsStory: FC<Props> = (Props) => {
	return (
		<a href="#" className="flex place-items-center h-[66px]" aria-expanded="true">
			<div className="relative w-12 h-12 rounded-full ml-2 border-solid border-[3px] border-blue-700">
				<img className="rounded-full border-solid border-2 border-white object-cover" src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-2.jpg" alt="avatar" />
			</div>
			<div className="lgConfig:hidden flex flex-col justify-items-center ml-3 text-black">
				<div className="font-medium text-[16px]"> {Props.userName} </div>
				<p className="font-normal text-[14px] m-0">
					<span className="text-blue-700"> {Props.news} new </span>
					<span className="text-gray-500"> {Props.sinceCreate}Mn ago</span>
				</p>
			</div>
		</a>
	);
};

export default FriendsStory;
