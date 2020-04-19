import React from 'react';

interface PropTypes {
	className?: string;
}

const Box: React.FC<PropTypes> = (props) => {
	const { children, className } = props;
	return (
		<div className={`rounded-sm bg-white shadow p-3 mt-4 ${className}`}>
			{children}
		</div>
	);
};

export default Box;
