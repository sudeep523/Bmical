function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        resultElement.textContent = `Your BMI is: ${bmi}`;
    } else {
        resultElement.textContent = 'Please enter valid weight and height values.';
    }
}
