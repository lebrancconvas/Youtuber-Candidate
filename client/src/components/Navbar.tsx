import React from 'react';

const Navbar: React.FC = () => {
	return(
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				Thai Youtuber Election 
				<div className="hidden w-full md:block md:w-auto">
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-xl">
						<li>Candidate</li>
						<li>Trend</li>
						<li>About Us</li>
					</ul>
				</div>
			</div>
		</nav>
	)
};

export default Navbar;