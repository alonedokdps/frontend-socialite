import useToggleClickOutSide from "@hooks/useToggleClickOutSide";
import {
	createContext,
	Dispatch,
	MutableRefObject,
	ReactNode,
	SetStateAction,
	useContext,
} from "react";

interface DropdownProps {
	children: ReactNode;
}
// type typeContext = ReturnType<typeof useToggleClickOutSide>;
export const DropdownContext = createContext({});

const DropDownProvider = ({ children }: DropdownProps) => {
	const { show, setShow, nodeRef, buttonRef, nameDropdown, setNameDropdown } =
		useToggleClickOutSide();
	const valueProvider = {
		show,
		setShow,
		nodeRef,
		buttonRef,
		nameDropdown,
		setNameDropdown,
	};

	return (
		<DropdownContext.Provider value={valueProvider}>
			{children}
		</DropdownContext.Provider>
	);
};
function useDropdown() {
	const context = useContext<any>(DropdownContext);

	if (context === "undefined")
		throw new Error("useDropDown must be used with Dropdown Provider");
	return context;
}
export { DropDownProvider, useDropdown };
