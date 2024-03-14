const convert = (number) => {
	return number.toLocaleString("fa-IR", {
		useGrouping: false,
	});
};

export default convert;
