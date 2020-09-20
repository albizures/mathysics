type Value = string | number;

const { raw: r } = String;

const frac = (numerator: Value, denominator: Value) =>
	r`\frac{${numerator}}{${denominator}}`;

const mixedFrac = (interger: Value, numerator: Value, denominator: Value) =>
	r`${interger}${frac(numerator, denominator)}`;

const exp = (
	strings: TemplateStringsArray,
	...expressions: string[]
): string => {
	return strings.reduce((str, current, index) => {
		const expression = expressions[index];
		if (expression) {
			return r`${str}${current} \(${expressions[index]}\)`;
		} else {
			return r`${str}${current}`;
		}
	}, '');
};

const vec = (value: Value) => r`\vec{${value}}`;

const PI = r`\pi`;

export { PI, frac, exp, mixedFrac, vec };
