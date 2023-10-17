function calculateWage() {
    const normalHoursInput = document.getElementById("normalHours").value;
    const normalRateInput = document.getElementById("normalRate").value;
    const overtimeRateInput = document.getElementById("overtimeRate").value;
    const hoursWorkedInput = document.getElementById("hoursWorked").value;
    const resultDisplay = document.getElementById("result");

    const Hours = parseFloat(normalHoursInput);
    const Rate = parseFloat(normalRateInput);
    const overtime = parseFloat(overtimeRateInput);
    const Worked = parseFloat(hoursWorkedInput);

    console.log("resultDisplay:", resultDisplay);

    let wage;
    if (Worked <= Hours) {
        wage = Worked * Rate;
    } else {
        const normalWage = Hours * Rate;
        const overtimeHours = Worked - Hours;
        const overtimeWage = overtimeHours * overtime;
        wage = normalWage + overtimeWage;
    }

    resultDisplay.innerHTML = `You have Earned: $${wage}`;
}
