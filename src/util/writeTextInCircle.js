export const writeTopTextInCircle = (text, rad) => {
	let chars = text.split('');
	console.log(chars);
	return chars.map((char, i) => {
		return <span style={{ transform: `rotate(${rad * i}deg)` }}>{char}</span>;
	});
};

export const writeBottomTextInCircle = (text, rad) => {
	let chars = text.split('');
	console.log(chars);
	return chars.map((char, i) => {
		return <span style={{ transform: `rotate(${rad * i}deg)` }}>{char}</span>;
	});
};
