const getIconSrc = iconNum => 'https://www.accuweather.com/images/weathericons/' + iconNum + '.svg';

/**
 * Get string of date and return day name
 * 
 * @param {string of date} date
 * @return {string} 
 */
const getFormattedDay = date => {
	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const newDate = new Date(date);

	return `${weekday[newDate.getDay()]}`;
};

/**
 * Convert fahrenheit To celsius
 * 
 * @param {number} fahrenheit 
 * @return {number}
 */
const convertFToC = fahrenheit => ((5 / 9) * (fahrenheit - 32)).toFixed(1);

/**
 *	Get number or array of 2 numbers and return temperature string
 * 
 * @param {number || array} tempInF
 * @param {boolean} isFahrenheit
 * @return {string} 
 */
const getFormattedTemperature = (tempInF, isFahrenheit) => {
	if (Array.isArray(tempInF)) {
		if (tempInF.length === 2) {
			return isFahrenheit
				? `${tempInF[0]} - ${tempInF[1]}°`
				: `${convertFToC(tempInF[0])} - ${convertFToC(tempInF[1])}°`;
		}

		tempInF = tempInF[0];
	}

	return isFahrenheit
		? `${tempInF}°`
		: `${convertFToC(tempInF)}°`;
};

export {
	getIconSrc,
	getFormattedDay,
	getFormattedTemperature
};