const userAnswer = prompt("Would you like 'add', 'sub, 'mult' or 'div'?", "add");
if (userAnswer == 'add' || userAnswer == 'sub' || userAnswer == 'mult' || userAnswer == 'div') {
    const userNum1 = prompt("Enter a number", "33");
    const userNum2 = prompt("Enter a number", "11");
if (userAnswer == 'add') {
    alert(`${userNum1} + ${userNum2} = ${Number(userNum1) + Number(userNum2)}`);
} else if (userAnswer == 'sub') {
    alert(`${userNum1} - ${userNum2} = ${Number(userNum1) - Number(userNum2)}`);
} else if (userAnswer == 'mult') {
    alert(`${userNum1} * ${userNum2} = ${Number(userNum1) * Number(userNum2)}`);
} else {
    alert(`${userNum1} / ${userNum2} = ${Number(userNum1) / Number(userNum2)}`);
}
} else {
    alert("You entered wrong command. Please renovate the page and try again. ")
}