import React from 'react';
import * as MathJax from '@nteract/mathjax';
import Box from '../../../components/Box';
import { exp } from '../../../utils/latex';
import { getRandomInt } from '../../../utils/numbers';

type Factors = [number, number][];

const getFactors = (num: number): Factors => {
	const factors: Factors = [];
	for (let index = 0; index <= num; index++) {
		if (num % index !== 0) {
			continue;
		}
		factors.push([index, num / index]);
	}

	return factors;
};

interface Term {
	variable: string;
	coefficient: number;
	degree: number;
}

interface Polynomial {
	terms: Term[];
	solutions: number[];
}

const generatePolynomial = (): Polynomial => {
	let factors: [number, number][] = [];
	let seed: number;
	while (factors.length === 0) {
		const isPositive = getRandomInt(1, 2) === 1;
		seed = isPositive ? getRandomInt(2, 30) : getRandomInt(-30, -2);
		factors = getFactors(seed);
	}

	const randomPair = getRandomInt(1, factors.length - 2);
	const pair = factors[randomPair];
	const b = pair[0] + pair[1];

	return {
		terms: [
			{
				variable: 'x',
				degree: 2,
				coefficient: 1,
			},
			{
				variable: 'x',
				degree: 1,
				coefficient: b,
			},
			{
				variable: '',
				degree: 1,
				coefficient: seed,
			},
		],
		solutions: pair,
	};
};

const toStringSolutions = (poly: Polynomial) => {
	const {
		solutions: [first, second],
	} = poly;
	return `x = ${first}, x = ${second}`;
};

const defaultPolynomial = generatePolynomial();

const toStringPolynomial = (poly: Polynomial) => {
	const { terms } = poly;
	const [a, b, c] = terms;
	return `${a.variable}^${a.degree}+${b.coefficient}${b.variable}+${c.coefficient}`;
};

const Trinomials: React.FC = () => {
	const [polynomial, setPolynomial] =
		React.useState(defaultPolynomial);

	const onGenerate = () => {
		setPolynomial(generatePolynomial());
	};

	return (
		<div className="container md:px-6 mx-auto md:max-w-lg">
			<Box>
				<h2>
					<MathJax.Node inline>{exp`x^2+bx+c`}</MathJax.Node>
				</h2>

				<div>
					<MathJax.Node inline>
						{toStringPolynomial(polynomial)}
					</MathJax.Node>
				</div>
				<div>
					<MathJax.Node inline>
						{toStringSolutions(polynomial)}
					</MathJax.Node>
				</div>

				<button
					className="border rounded px-2 py-1"
					onClick={onGenerate}
				>
					Generate
				</button>
			</Box>
		</div>
	);
};

export default Trinomials;
