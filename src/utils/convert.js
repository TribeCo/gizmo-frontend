const convert = (number) => {
	return number.toLocaleString("fa-IR", {
		useGrouping: false,
	});
};

export default convert;

export const toPersianDigits = (num) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.replace(/\d/g, x => persianDigits[x]);
};

