import { useState, useEffect } from 'react';

export const useAPI = (url: string) => {
	const [channel, setChannel] = useState([]);

	useEffect(() => {
		fetch(url) 
			.then(response => response.json())
			.then(data => setChannel(data))
			.catch(err => console.error(err)) 
	}, [url]); 

	return channel;
}