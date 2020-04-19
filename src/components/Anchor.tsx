import React from 'react';
import Link from 'next/link';

interface PropTypes {
	href: string;
	children: React.ReactNode;
}

const Anchor: React.FC<PropTypes> = (props) => {
	const { children, href } = props;
	return (
		<Link href={href}>
			<a className="text-blue-600 underline visited:text-purple-600">
				{children}
			</a>
		</Link>
	);
};

export default Anchor;
