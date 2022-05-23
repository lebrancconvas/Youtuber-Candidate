import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
	return(
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto bg-orange-300">
				<NavLink to="/">
					Thai Youtuber Election 
				</NavLink>
				<div className="hidden w-full md:block md:w-auto">
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-xl">
						<li>
							<NavLink to="/candidate"> 
								Candidate
							</NavLink> 
						</li>
						<li>
							<NavLink to="/trend"> 
								Trend
							</NavLink>
						</li> 
						<li>
							<NavLink to="/about">
								About Us
							</NavLink>
						</li> 
					</ul>
				</div>
			</div>
		</nav>
	)
};

export default Navbar;