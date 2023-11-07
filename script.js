document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("carbon-form");
    const resultDiv = document.getElementById("result");
    const carbonResult = document.getElementById("carbon-result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values
        const electricityUsage = parseFloat(document.getElementById("electricity").value); // In units/year
        const gasUsage = parseFloat(document.getElementById("gas").value); // In cylinders/year
        const waterUsage = parseFloat(document.getElementById("water").value); // In liters/day
        const wasteProduction = parseFloat(document.getElementById("waste").value); // In kilograms/day

        // Constants for Indian household carbon footprint calculations (values are examples)
        const electricityCO2EmissionFactor = 0.82; // kg CO2 per unit (Based on the Indian electricity grid)
        const gasCO2EmissionFactor = 2.3; // kg CO2 per cylinder (Typical value for LPG)
        const waterCO2EmissionFactor = 0.0003; // kg CO2 per liter (Based on water treatment and distribution)
        const wasteCO2EmissionFactor = 0.15; // kg CO2 per kilogram (Average for waste disposal)

        // Calculate carbon footprint for each element
        const electricityFootprint = electricityUsage * electricityCO2EmissionFactor;
        const gasFootprint = gasUsage * gasCO2EmissionFactor;
        const waterFootprint = (waterUsage * 365) * waterCO2EmissionFactor; // Annual water usage
        const wasteFootprint = (wasteProduction * 365) * wasteCO2EmissionFactor; // Annual waste production

        // Calculate the total carbon footprint
        const totalFootprint = electricityFootprint + gasFootprint + waterFootprint + wasteFootprint;

        // Display the result
        carbonResult.textContent = totalFootprint.toFixed(2) + " kg CO2 equivalent per year";
        resultDiv.classList.remove("hidden");
    });
});
