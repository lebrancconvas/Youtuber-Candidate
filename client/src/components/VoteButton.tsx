import React, { useState } from 'react';
import { Button } from '../style/VoteButton.style';

const VoteButton: React.FC = () => {
	const [isVote, setIsVote] = useState<boolean>(false);
	return(
		<div>
			{isVote ? (
				<div>
					Vote
				</div>
			):(
				<Button>
					Vote
				</Button>
			)}
		</div>
	)
};

export default VoteButton;