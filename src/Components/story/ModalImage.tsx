import { FiX } from "react-icons/fi";
import { FunctionComponent } from 'react'

interface ModalImageProps {
	imageUrl: string;
}

const ModalImage: FunctionComponent<ModalImageProps> = ({imageUrl}) => {
	return (
		<div className="flex justify-center items-center fixed z-[999] w-screen h-screen bg-black">
			<div className="fixed flex justify-center items-center leading-[42px] top-0 left-0 h-[42px] w-full bg-[#12131338]">
				<span
					className="absolute flex justify-center items-center w-10 h-10 cursor-pointer transition-all duration-200 right-2 text-gray-400 hover:text-gray-600"
				>
					<FiX size={32} />
				</span>
			</div>
			<img
				className="w-[1880px] h-screen object-contain"
				src={imageUrl}
				alt="Image Current"
			/>
		</div>
	 );
}

export default ModalImage;

// const ModalImage = () => {
// 	return (
// 		<div className="flex justify-center items-center fixed z-[999] w-screen h-screen bg-black">
// 			<div className="fixed flex justify-center items-center leading-[42px] top-0 left-0 h-[42px] w-full bg-[#12131338]">
// 				<span
// 					className="absolute flex justify-center items-center w-10 h-10 cursor-pointer transition-all duration-200 right-2 text-gray-400 hover:text-gray-600"
// 				>
// 					<FiX size={32} />
// 				</span>
// 			</div>
// 			<img
// 				className="w-[1880px] h-screen object-contain"
// 				src="http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-lg-2.jpg"
// 				alt="Image"
// 			/>
// 		</div>
// 	);
// };

// export default ModalImage;
