import { useEffect, useRef, useState } from 'react';

let prevTarget: any;
export default function useToggleClickOutSide() {
	const [show, setShow] = useState<boolean>(false);
	const [nameDropdown, setNameDropdown] = useState<string>('');
	const nodeRef = useRef<HTMLDivElement | null | any>(null);
	const buttonRef = useRef<HTMLDivElement | null | any>(null);
	useEffect(() => {
		function handleClickOutDropdown(e: any) {
			console.log('prev ', prevTarget);
			console.log(prevTarget !== e.target);
			if (prevTarget !== e.target) {
			}
			prevTarget = e.target;

			console.log('currnt ', e.target);
			console.log(buttonRef.current);
			console.log(nodeRef.current);

			if (nodeRef.current && !nodeRef.current.contains(e.target)) {
				setShow(!show);
			}
		}
		window.addEventListener('click', handleClickOutDropdown);
		return () =>
			window.removeEventListener('click', handleClickOutDropdown);
	}, [show]);
	return {
		show,
		setShow,
		nameDropdown,
		setNameDropdown,
		nodeRef,
		buttonRef,
	};
}
