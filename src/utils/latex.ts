type Value = string | number;

const { raw: r } = String;

const frac = (numerator: Value, denominator: Value) =>
	r`\frac{${numerator}}{${denominator}}`;

const mixedFrac = (interger: Value, numerator: Value, denominator: Value) =>
	r`${interger}${frac(numerator, denominator)}`;

const log = (baseOrArgument: Value, argument?: Value) => {
	if (argument === undefined) {
		return log(10, baseOrArgument);
	}

	const base = baseOrArgument;

	if (base === 10) {
		return r`\log ${argument}`;
	}

	return r`\log_${base} ${argument}`;
};

export const root = (index: Value, radicand?: Value) => {
	if (radicand === undefined) {
		return root(2, radicand);
	}

	if (index === 2) {
		return r`\sqrt{${radicand}}`;
	}

	return r`\sqrt[${index}]{${radicand}}`;
};

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

export { PI, frac, exp, mixedFrac, vec, log };
