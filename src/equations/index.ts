import { PI, frac } from '../utils/latex';

const { raw: r } = String;

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
		varName: r`\vec{v}`,
	},
	Displacement: {
		name: 'displacement',
		varName: r`\vec{s}`,
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
		latex: (vars: VarNames) => r`${PI} ${vars.Radius}^2`,
		vars: [Vars.Radius.name],
		name: 'circle.area',
		relations: ['area', 'radius', 'pi'],
		result: 'area',
	},
	{
		latex: (vars: VarNames) => r`\sqrt{${frac(vars.Area, PI)}}`,
		vars: [Vars.Area.name],
		name: 'circle.pi.radius',
		relations: ['area', 'radius', 'pi'],
		result: 'radius',
	},
	{
		latex: (vars: VarNames) => r`2${vars.Radius}`,
		vars: [Vars.Radius.name],
		name: 'circle.diameter',
		relations: ['diameter', 'radius'],
		result: 'diameter',
	},
	{
		latex: (vars: VarNames) => r`${frac(vars.Diameter, 2)}`,
		vars: [Vars.Diameter.name],
		name: 'circle.radius',
		relations: ['diameter', 'radius'],
		result: 'radius',
	},
	{
		latex: (vars: VarNames) => r`${frac(vars.Diameter, vars.Time)}`,
		vars: [Vars.Displacement.name, Vars.Time.name],
		name: 'velocity',
		relations: ['diameter', 'radius'],
		result: 'velocity',
	},
];

export { equations, Vars };
