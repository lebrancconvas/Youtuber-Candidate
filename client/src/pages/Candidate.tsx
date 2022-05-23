import React from 'react';
import { useAPI } from '../hooks/useAPI';
import { YoutuberData } from '../lib/youtuber.interface';

// URL = "http://localhost:8000/api/v1/youtubers" 

const Candidate: React.FC = () => {
	const youtubers = useAPI();

	return(
		<div className="content-center"> 
			<h1>Candidate - ข้อมูลผู้สมัครเลือกตั้งผู้ว่า Youtuber</h1> 
			{youtubers.map((youtuber: YoutuberData, index: number) => {
				const youtuberURL = `https://youtube.com/channel/${youtuber.id}`;
				return(
					<div key={index}>
						<div className="py-3 px-5 pb-5">
							<a href={youtuberURL} target="_blank" rel="noreferrer">
								<img src={youtuber.snippet.thumbnails.medium.url} alt="" />
								<div className="font-bold text-3xl">{youtuber.snippet.title}</div> 
								<br /> 
								<div>
									Subscriber {youtuber.statistics.subscriberCount}  
								</div> 
							</a>
						</div> 
					</div>
				)
			})}
		</div>
	)
};

export default Candidate;