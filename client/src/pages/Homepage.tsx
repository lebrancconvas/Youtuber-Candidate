import React from 'react';



const Homepage: React.FC = () => {
	return(
		<div className="text-center"> 
			<h1 className="flex justify-center items-center text-3xl mb-3">Thai Youtuber Election</h1>
			<h2 className="flex justify-center items-center text-xl">เลือกตั้งผู้ว่า Youtuber ไทย</h2>
			<br />
			<div className="text-3xl font-bold">
				ทำไมถึงต้องมีผู้ว่า Youtuber ?
			</div>
			<div>
			ผู้ว่า Youtuber จะเป็นเหมือนหน้าตาของ Youtuber ในไทย 
			</div>
		</div>
	)
};

export default Homepage;