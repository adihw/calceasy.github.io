let string = "";
let memory = 0; 

let buttons = document.querySelectorAll('.button');
let display = document.querySelector('.rows input');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = eval(string);
            display.value = string;
        } else if (buttonText === 'C') {
            string = "";
            memory = 0; 
            display.value = string;
            display.placeholder = "";
        } else if (buttonText === 'M+') {
            memory += parseFloat(string);
            string = "";
            display.value = string;
            display.placeholder = "Memory: " + memory;
        } else if (buttonText === 'M-') {
            memory -= parseFloat(string);
            string = "";
            display.value = string;
            display.placeholder = "Memory: " + memory;
        } else {
            string += buttonText;
            display.value = string;
        }
    });
});
