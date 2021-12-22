import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="bg-gray-200 pb-12">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
