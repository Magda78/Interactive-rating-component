function Numbers({ name }) {
	return (
		<div
			role="section"
			className="w-[48px] h-[48px] bg-star-bg rounded-full flex justify-center items-center text-numbers-font-coler text-[16px] hover:text-white hover:bg-button-bg-color hover:cursor-pointer"
		>
			{name}
		</div>
	);
}

export default Numbers;
