import React from 'react';
import { useAPI } from '../hooks/useAPI';
import { YoutuberData } from '../lib/youtuber.interface';

// URL = "http://localhost:8000/api/v1/youtubers" 

const Candidate: React.FC = () => {
	const youtubers = useAPI();

	return(
		<div className="text-center">   
			<h1 className="font-bold text-3xl">Candidate - ข้อมูลผู้สมัครเลือกตั้งผู้ว่า Youtuber</h1> 
			
			<div className="grid grid-cols-3"> 
				{youtubers.map((youtuber: YoutuberData, index: number) => {
					const youtuberURL = `https://youtube.com/channel/${youtuber.id}`;
					return(
						<div key={index}>
							<div className="flex items-center justify-center py-3 px-5"> 
								<a href={youtuberURL} target="_blank" rel="noreferrer">
									<img src={youtuber.snippet.thumbnails.medium.url} alt="" />   
									<div className="font-bold text-3xl">{youtuber.snippet.title}</div> 
									<div>
										Subscriber {youtuber.statistics.subscriberCount}  
									</div> 
									<div>
										View Count {youtuber.statistics.viewCount}
									</div>
									<div>
										Video Count {youtuber.statistics.videoCount} 
									</div>
									<div>
										Date Created {youtuber.snippet.publishedAt.split("T")[0]} 
									</div>
								</a>
							</div> 
						</div>
					)
				})}
			</div>
		</div>
	)
};

export default Candidate;