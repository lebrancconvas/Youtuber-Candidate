import { useState, useEffect } from 'react';

export const useAPI = () => {
	const [channel, setChannel] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/api/v1/youtubers")
			.then(response => response.json())
			.then(data => setChannel(data))
			.catch(err => console.error(err)) 
	}, []); 

	return channel;
}