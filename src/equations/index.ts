const Vars = {
	Radius: {
		name: 'radius',
		varName: 'r',
	},
	Area: {
		name: 'area',
		varName: 'a',
	},
	Diameter: {
		name: 'diameter',
		varName: 'd',
	},
	Velocity: {
		name: 'velocity',
		varName: '\\vec{v}',
	},
	Displacement: {
		name: 'displacement',
		varName: '\\vec{s}',
	},
	Time: {
		name: 'time',
		varName: 't',
	},
};

export type VarList = keyof typeof Vars;
export type VarNames = Record<VarList, string>;

export interface Equation {
	name: string;
	result: string;
	latex: (vars: VarNames) => string;
	vars: string[];
	relations: string[];
}

const equations: Equation[] = [
	{
		latex: (vars: VarNames) => `\\pi ${vars.Radius}^2`,
		vars: [Vars.Radius.name],
		name: 'circle.area',
		relations: ['area', 'radius'],
		result: 'area',
	},
	{
		latex: (vars: VarNames) => `\\sqrt{\\frac{${vars.Area}}{\\pi}}`,
		vars: [Vars.Area.name],
		name: 'circle.pi.radius',
		relations: ['area', 'radius'],
		result: 'radius',
	},
	{
		latex: (vars: VarNames) => `2${vars.Radius}`,
		vars: [Vars.Radius.name],
		name: 'circle.diameter',
		relations: ['diameter', 'radius'],
		result: 'diameter',
	},
	{
		latex: (vars: VarNames) => `\\frac{${vars.Diameter}}{2}`,
		vars: [Vars.Diameter.name],
		name: 'circle.radius',
		relations: ['diameter', 'radius'],
		result: 'radius',
	},
	{
		latex: (vars: VarNames) => `\\frac{${vars.Diameter}}{${vars.Time}}`,
		vars: [Vars.Displacement.name, Vars.Time.name],
		name: 'velocity',
		relations: ['diameter', 'radius'],
		result: 'velocity',
	},
];

export { equations, Vars };
