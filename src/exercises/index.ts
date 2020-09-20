import { frac, exp, mixedFrac, vec } from '../utils/latex';

const { raw: r } = String;

enum ExerciseType {
	VectorModule,
	MixedToFraction,
	FractionToMixed,
}

const exercises = [
	{
		problem: exp`Find the magnitud of the vector ${vec('V')}`,
		given: [r`\vec{V} = (4, 2)`],
		types: [ExerciseType.VectorModule],
		answers: [r`|\vec{a}| = \sqrt{20}`],
	},
	{
		problem: r`Find the magnitud of the vector \(\vec{V}\)`,
		given: [r`\vec{V} = (-10, 4)`],
		types: [ExerciseType.VectorModule],
		answers: [r`|\vec{a}| = \sqrt{116}`],
	},
	{
		problem: r`Find the magnitud of the vector \(\vec{AB}\)`,
		given: [r`\vec{A} = (5, 10)`, r`\vec{B} = (30, 15)`],
		types: [ExerciseType.VectorModule],
		answers: [r`|\vec{a}| = \sqrt{650}`],
	},
	{
		problem: 'Convert mixed fraction to fraction \\(3\\frac{7}{5}\\)',
		given: [r`3\frac{7}{5}`],
		types: [ExerciseType.MixedToFraction],
		answers: [r`3\frac{7}{5} = \frac{21}{5}`],
	},
	{
		problem: r`Convert mixed fraction to fraction \(2\frac{4}{8}\)`,
		given: [r`2\frac{4}{8}`],
		types: [ExerciseType.MixedToFraction],
		answers: [r`2\frac{4}{8} = \frac{5}{2}`],
	},
	{
		problem: r`Convert fraction to mixed fraction \(\frac{17}{3}\)`,
		given: [r`\frac{17}{3}`],
		types: [ExerciseType.FractionToMixed],
		answers: [r`\frac{17}{3} = 5\frac{2}{3}`],
	},
	{
		problem: r`Convert fraction to mixed fraction \(\frac{16}{5}\)`,
		given: [r`\frac{17}{3}`],
		types: [ExerciseType.FractionToMixed],
		answers: [r`\\frac{16}{5} = 3\\frac{1}{5}`],
	},
	((fraction = frac(17, 3), mixedFraction = mixedFrac(3, 1, 5)) => ({
		problem: exp`Convert fraction to mixed fraction ${fraction}`,
		given: [fraction],
		types: [ExerciseType.FractionToMixed],
		answers: [`${fraction} = ${mixedFraction}`],
	}))(),
];

export { exercises };
