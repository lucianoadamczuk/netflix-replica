import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

export default function Input() {
	// event handler
	function handleInput(event: ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		debounceCallback(value);
	}

	// debounce input value to avoid multiple calls
	const debounceCallback = useDebouncedCallback((value) => {
		console.log(value);
		navigation(value);
	}, 1500);

	// navigation when input value changes
	const navigate = useNavigate();
	function navigation(param: string) {
		if (param.length === 0) {
			navigate('/movies');
		}
		if (param.length !== 0) {
			const slug = param.trim().replace(/\s+/g, '-');
			const pagination = 1;

			navigate(`/search?title=${slug}&page=${pagination}`);
		}
	}

	return (
		<input
			placeholder='Make a search'
			type='text'
			onChange={(event) => handleInput(event)}
		/>
	);
}
