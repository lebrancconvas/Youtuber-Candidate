import React from 'react';
import Navbar from '../components/Navbar';

const Homepage: React.FC = () => {
	return(
		<div>
			<Navbar />
			<h1 className="flex justify-center items-center text-3xl mb-3">Thai Youtuber Election</h1>
			<h2 className="flex justify-center items-center text-xl">เลือกตั้งผู้ว่า Youtuber ไทย</h2>
		</div>
	)
};

export default Homepage;