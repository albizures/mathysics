import React from 'react';
import * as MathJax from '@nteract/mathjax';
import { equations as allEquations, Vars, VarNames } from '../equations';

const varNames = Object.keys(Vars).reduce((names, key) => {
	names[key] = Vars[key].varName;

	return names;
}, {} as Partial<VarNames>) as VarNames;

const varTexts = allEquations.map((equation, index) => {
	return {
		index,
		text: `${equation.result} ${equation.relations}`,
	};
});

const Index = () => {
	const [search, setSearch] = React.useState('');
	const [equations, setEquations] = React.useState(allEquations);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const onMouseUp = (event: React.KeyboardEvent) => {
		if (event.key === 'Escape') {
			setSearch('');
		}
	};

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setEquations(
				allEquations.filter((equation) => {
					return (
						equation.result.includes(search) ||
						equation.relations.includes(search)
					);
				}),
			);
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [search]);

	return (
		<div className="mt-6">
			<div className="container px-6 mx-auto md:max-w-md">
				<label htmlFor="search" className="sr-only">
					Search:{' '}
				</label>
				<div className="relative">
					<input
						onKeyUp={onMouseUp}
						type="text"
						autoFocus={true}
						className="focus:outline-0 border border-transparent focus:border-gray-300 placeholder-gray-600 rounded-sm py-2 pr-4 pl-10 block w-full appearance-none"
						value={search}
						id="search"
						onChange={onChange}
					/>
					<div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
						<svg
							className="fill-current pointer-events-none text-gray-600 w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
						</svg>
					</div>
				</div>
			</div>
			<div className="px-2 md:max-w-4xl mx-auto">
				<div className="flex flex-wrap -mx-2">
					{equations.map((equation) => {
						return (
							<div
								className="w-full sm:w-1/2 md:w-1/4 px-2"
								key={equation.name}
							>
								<div
									className={`rounded-sm bg-white shadow p-3 mt-4 text-center`}
								>
									<MathJax.Provider>
										<MathJax.Node inline>{`${
											equation.result
										} = ${equation.latex(varNames)}`}</MathJax.Node>
									</MathJax.Provider>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Index;
