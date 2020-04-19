enum ExerciseType {
	VectorModule,
	MixedToFraction,
	FractionToMixed,
}

const exercises = [
	{
		problem: 'Find the magnitud of the vector \\(\\vec{V}\\)',
		given: ['\\vec{V} = (4, 2)'],
		types: [ExerciseType.VectorModule],
		answers: ['|\\vec{a}| = \\sqrt{20}'],
	},
	{
		problem: 'Find the magnitud of the vector \\(\\vec{V}\\)',
		given: ['\\vec{V} = (-10, 4)'],
		types: [ExerciseType.VectorModule],
		answers: ['|\\vec{a}| = \\sqrt{116}'],
	},
	{
		problem: 'Find the magnitud of the vector \\(\\vec{AB}\\) ',
		given: ['\\vec{A} = (5, 10)', '\\vec{B} = (30, 15)'],
		types: [ExerciseType.VectorModule],
		answers: ['|\\vec{a}| = \\sqrt{650}'],
	},
	{
		problem: 'Convert mixed fraction to fraction \\(3\\frac{7}{5}\\) ',
		given: ['3\\frac{7}{5}'],
		types: [ExerciseType.MixedToFraction],
		answers: ['3\\frac{7}{5} = \\frac{21}{5}'],
	},
	{
		problem: 'Convert mixed fraction to fraction \\(2\\frac{4}{8}\\) ',
		given: ['2\\frac{4}{8}'],
		types: [ExerciseType.MixedToFraction],
		answers: ['2\\frac{4}{8} = \\frac{5}{2}'],
	},
	{
		problem: 'Convert fraction to mixed fraction \\(\\frac{17}{3}\\) ',
		given: ['\\frac{17}{3}'],
		types: [ExerciseType.FractionToMixed],
		answers: ['\\frac{17}{3} = 5\\frac{2}{3}'],
	},
	{
		problem: 'Convert fraction to mixed fraction \\(\\frac{16}{5}\\) ',
		given: ['\\frac{17}{3}'],
		types: [ExerciseType.FractionToMixed],
		answers: ['\\frac{16}{5} = 3\\frac{1}{5}'],
	},
];

export { exercises };
