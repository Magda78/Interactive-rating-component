import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNumber, removeNumber } from '../../slices/numbers';
import { number, delated } from '../../slices/numbers';

function Numbers({ name, id, addedId}) {
	const [ clickFalse, setClickFalse ] = useState(false);
	//const [clickTrue, setClickTrue] = useState(true)
	//const added = useSelector(number)
	//const addedId = addedId[0];
	//const item = useSelector(number);
	//const removed = useSelector(delated);
	//const removedId = removed[0];
	const dispatch = useDispatch();

	const buttonClickHandler = (e) => {
		dispatch(
			addNumber({
				id,
				name
			})
		);
		dispatch(removeNumber(id));
		e.preventDefault();
		console.log('id', typeof(id));
		//console.log('removedid',removedId)
	};
	
	console.log('addedIds',addedId)
	return (
		<div
			onClick={buttonClickHandler}
			role="section"
			className={
				addedId !== id ? (
					'w-[48px] h-[48px] bg-star-bg rounded-full flex justify-center items-center text-numbers-font-color text-[16px]  hover:cursor-pointer hover:bg-button-hover hover:text-white'
				) : (
					'w-[48px] h-[48px] rounded-full flex justify-center items-center bg-button-bg-color text-white'
				)
			}
		>
			{name}
		</div>
	);
}

export default Numbers;
