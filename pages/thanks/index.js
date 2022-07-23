import { useRouter } from 'next/router';
import { useState } from 'react';

function Thanks() {
	return (
		<div role="main" className="w-full h-screen bg-bg-color flex justify-center items-center">
			<div
				role="section"
				className="w-[412px] h-[416px] bg-card-bg rounded-[30px] p-[32px] flex flex-col justify-center items-center"
			>
				<img src="img/illustration-thank-you.svg" alt="thanks" />
				<div
					role="section"
					className="pl-[20px] pt-[4px] pr-[19px] pb-[4px] mb-[32px] mt-[32px] bg-star-bg rounded-[22.5px] flex justify-center items-center"
				>
					<h1 className="text-[15px] text-button-bg-color font-Overpass">You selected 5 out of 5</h1>
				</div>
				<h1 className="text-[28px] font-bold text-white font-Overpass mb-[15px]">Thank you</h1>
				<p className="font-Overpass text-[15px] text-paragraph-font-color leading-6 text-center font-normal tracking-[0.010rem]">
					We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to
					get in touch!
				</p>
			</div>
		</div>
	);
}

export default Thanks;
