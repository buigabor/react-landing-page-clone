export const writeTopTextInCircle = (text, rad) => {
	const chars = text.split('');
	return chars.map((char, i) => {
		return <span key={i} style={{ transform: `rotate(${rad * i}deg)` }}>{char}</span>;
	});
};

export const writeBottomTextInCircle = (text, rad) => {
	const chars = text.split('');
	return chars.map((char, i) => {
		return (
			<span key={i} style={{ transform: `rotate(${rad * i}deg)` }}>
				{char}
			</span>
		);
	});
};
