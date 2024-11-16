function toCase(text) {

	const upper= text.toUpperCase();
	const lower = text.toLowerCase();
	return `${lower}-${upper}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
