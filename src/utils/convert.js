const convert = (number) => {
	return number.toLocaleString("fa-IR", {
		useGrouping: true,
	});
};

export default convert;

export const toPersianDigits = (number) => {
	if (number === undefined || number === null) {
		// console.error('Invalid input: number is undefined or null');
		return number;
	}
	const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
	return number.toString().replace(/\d/g, (x) => persianNumbers[x]);
};

export const getGenderDescription = (genderCode) => {
	if (!genderCode) {
		return "خالی";
	}
	const genderMap = {
		m: "آقا",
		f: "خانم",
		u: "مایل به گفتن ندارم",
	};
	return genderMap[genderCode.toLowerCase()] || "خالی";
};

export const createFullName = (firstName, lastName) => {
	return `${firstName} ${lastName}`;
};
