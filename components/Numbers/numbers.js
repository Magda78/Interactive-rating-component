import { useState } from 'react';

function Numbers({ name }) {
	const [ click, setClick ] = useState(false);
	const buttonClickHandler = () => {
		if (click) {
			setClick(false);
		} else {
			setClick(true);
		}
	};

	return (
		<div
			onClick={buttonClickHandler}
			role="section"
			className={
				!click ? (
					'w-[48px] h-[48px] bg-star-bg rounded-full flex justify-center items-center text-numbers-font-color text-[16px]  hover:cursor-pointer'
				) : (
					'w-[48px] h-[48px] rounded-full flex justify-center items-center bg-button-bg-color text-white'
				)
			}
		>
			{name}
			{console.log(click)}
		</div>
	);
}

export default Numbers;
