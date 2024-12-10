
// Conversion functions
const conversions = {
    metersToFeet: (value) => value * 3.28084,
    feetToMeters: (value) => value / 3.28084,
    kilometersToMiles: (value) => value * 0.621371,
    milesToKilometers: (value) => value / 0.621371,
    celsiusToFahrenheit: (value) => (value * 9/5) + 32,
    fahrenheitToCelsius: (value) => (value - 32) * 5/9,
    kilogramsToPounds: (value) => value * 2.20462,
    poundsToKilograms: (value) => value / 2.20462,
    gramsToOunces: (value) => value * 0.035274,
    ouncesToGrams: (value) => value / 0.035274
};

// Function to handle conversion
function convert() {
    const form = document.getElementById("converterForm");
    const selectedConversion = form.conversionType.value;
    const inputValue = parseFloat(document.getElementById("value").value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    const conversionFunction = conversions[selectedConversion];
    const result = conversionFunction(inputValue);

    document.getElementById("result").textContent = result.toFixed(2);
}
