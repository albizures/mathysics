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

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setEquations(
				allEquations.filter((equation) => {
					return (
						equation.name.includes(search) ||
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
		<div>
			<div>
				<label htmlFor="search">Search</label>
				<input type="text" value={search} id="search" onChange={onChange} />
			</div>
			{equations.map((equation) => {
				return (
					<div key={equation.name}>
						<MathJax.Provider>
							<MathJax.Node inline>{`${equation.result} = ${equation.latex(
								varNames,
							)}`}</MathJax.Node>
						</MathJax.Provider>
					</div>
				);
			})}
		</div>
	);
};

export default Index;
