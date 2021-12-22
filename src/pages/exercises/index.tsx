import React from 'react';
import * as MathJax from '@nteract/mathjax';
import { exercises } from '../../exercises';
import Box from '../../components/Box';
import { log, root } from '../../utils/latex';
import { getRandomInt } from '../../utils/numbers';

const logOfARoot = () => {
	const base = getRandomInt(2, 10);
	console.log(12 - base);

	const randicand = Math.pow(base, getRandomInt(2, 10 - base));
	return log(base, root(getRandomInt(2, 10), randicand));
};

const Exercises = () => {
	return (
		<div className="container md:px-6 mx-auto md:max-w-lg">
			{exercises.map((exercise, index) => {
				return (
					<Box key={index}>
						<p>
							<span className="font-bold">Problem:</span>
							<MathJax.Text>{exercise.problem}</MathJax.Text>
						</p>
						<span className="font-bold">given: </span>
						<ul>
							{exercise.given.map((value, index) => {
								return (
									<li key={index}>
										<MathJax.Node inline>{value}</MathJax.Node>
									</li>
								);
							})}
						</ul>
						<span className="font-bold">awnser: </span>
						<ul>
							{exercise.answers.map((answer, index) => {
								return (
									<li key={index}>
										<MathJax.Node inline>{answer}</MathJax.Node>
									</li>
								);
							})}
						</ul>
					</Box>
				);
			})}
		</div>
	);
};

export default Exercises;
