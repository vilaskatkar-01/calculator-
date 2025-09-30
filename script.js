let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerText;

        if (btnValue === '=') {
            try {
                // Safely evaluate the math expression
                expression = eval(expression).toString();
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        } 
        else if (btnValue === 'AC') {
            expression = "";
            input.value = "";
        } 
        else if (btnValue === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } 
        else {
            // Prevent two operators in a row (e.g., ++ or **)
            if (/[\+\-\*\/%]$/.test(expression) && /[\+\-\*\/%]/.test(btnValue)) {
                return; // ignore if last char is operator and next is operator
            }
            expression += btnValue;
            input.value = expression;
        }
    });
});
