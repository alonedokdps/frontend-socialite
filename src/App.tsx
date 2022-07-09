/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@hooks";
import Loading from "@components/loading";
import Approutes from "./Routes";
import { useEffect } from "react";
import Header from "./Components/header/index";
import Main from "@layouts/Main";
import { SiderBar } from "@components";
import AOS from "aos";
import "aos/dist/aos.css";
import ColLeft from "@components/layoutCol/ColLeft";
import ColRight from "@components/layoutCol/ColRight";
import { DropDownProvider } from "@components/dropdown/DropdownContext";

function App() {
	const { isLoading, loadProfileAction } = useAuth();

	useEffect(() => {
		AOS.init();
		loadProfileAction();
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<DropDownProvider>
				<Main>
					<Header />
					<SiderBar />
					<div className="main_content">
						<div className="mcontainer">
							<div className="lg:flex lg:space-x-10">
								{/* left col layout main */}
								<ColLeft />
								{/* right col layout main */}
								<ColRight />
							</div>
						</div>
					</div>
				</Main>
			</DropDownProvider>

			{/* <Approutes /> */}
		</>
	);
}

export default App;
