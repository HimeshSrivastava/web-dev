let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('btn'))

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'Clear':
                display.innerText = '';
                break;
            case '=':
                // evaluateExpression(display)
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'Delete':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0,-1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
// alternative method more safer
function evaluateExpression(display) {
    try {
        const result = Function('"use strict";return (' + display.innerText + ')')();
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error: " + error.message;
    }
}
