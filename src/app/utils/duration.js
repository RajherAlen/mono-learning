const Duration = function (green, yellow, additional, red) {
	this.green = green;
	this.yellow = green + yellow;
	this.additional = this.yellow + additional;
	this.red = this.additional + red;
};

export default Duration;
