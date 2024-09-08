function num7(){
    document.getElementById('calculations').textContent += '7';
}
function num8(){
    document.getElementById('calculations').textContent += '8';
}
function num9(){
    document.getElementById('calculations').textContent += '9';
}
function num4(){
    document.getElementById('calculations').textContent += '4';
}
function num5(){
    document.getElementById('calculations').textContent += '5';
}
function num6(){
    document.getElementById('calculations').textContent += '6';
}
function num3(){
    document.getElementById('calculations').textContent += '3';
}
function num2(){
    document.getElementById('calculations').textContent += '2';
}
function num1(){
    document.getElementById('calculations').textContent += '1';
}
function num0(){
    document.getElementById('calculations').textContent += '0';
}
function opDivide(){
    document.getElementById('calculations').textContent += '÷';
}
function opTimes(){
    document.getElementById('calculations').textContent += 'x';
}
function opMinus(){
    document.getElementById('calculations').textContent += '-';
}
function opPlus(){
    document.getElementById('calculations').textContent += '+';
}
document.addEventListener('keydown', (event) =>{
    let key = event.key
    console.log(key)
    let keyCode = event.which
    if (keyCode > 95 && keyCode < 108 || keyCode > 188 && keyCode < 191 || keyCode > 47 && keyCode < 58) {
        document.getElementById('calculations').textContent += key
    }
     else if (keyCode == 13){
        operate();
    } else if (keyCode == 8){
        deleteButt();
    } else if (keyCode == 191){
        opDivide();
    } else if (keyCode == 88){
        opTimes();
    } else if (keyCode == 187){
        opPlus();
    }
    console.log(keyCode)
})

function operate(){
    const element = document.getElementById('calculations')
    const text = element.innerText || element.textContent;
    var result = element.innerHTML = text
    console.log(result);
    transStringToOperation(result)
    document.getElementById('calculations').textContent += '=';
};
function checkForOperators(){
    const expression = document.getElementById('calculations').textContent
    if (expression.includes('+') || expression.includes('-') || expression.includes('x') || expression.includes('÷')){
        //operate(); 
        const removeLastOp = document.getElementById('answer').textContent;
        const cleanEquation = removeLastOp.substring(0, removeLastOp.length-1);
        document.getElementById('answer').textContent = cleanEquation;
    };
};
//issue with below func need to fix it tommorow
// function useAnswer(){
//     const ansText = document.getElementById('answer')
//     if (ansText == ''){
//         console.log('check useAnswer')
//     } else { 
//         const usePreviousResult = document.getElementById('answers').textContent
//         document.getElementById('calculations').textContent = usePreviousResult;

//     }
// }

function transStringToOperation(str){
    if (str.includes('+')){
        let calcArray = str.split('+');
        console.log(calcArray)
        let a = parseFloat(calcArray[0]);
        let b = parseFloat(calcArray[1]);
        let c = a + b
        console.log(c)
        isAnswerNan(c.toFixed(2));
    } else if (str.includes('-')){
        let calcArray = str.split('-');
        console.log(calcArray)
        let a = parseFloat(calcArray[0]);
        let b = parseFloat(calcArray[1]);
        let c = a - b
        console.log(c)
        isAnswerNan(c.toFixed(2));
    } else if (str.includes('x')){
        let calcArray = str.split('x');
        console.log(calcArray)
        let a = parseFloat(calcArray[0]);
        let b = parseFloat(calcArray[1]);
        let c = a * b
        console.log(c)
        isAnswerNan(c.toFixed(2));
    } else if (str.includes('÷')){
        let calcArray = str.split('÷');
        console.log(calcArray)
        let a = parseFloat(calcArray[0]);
        let b = parseFloat(calcArray[1]);
        let c = a / b
        console.log(c)
        isAnswerNan(c.toFixed(2));        
    };
};
function isAnswerNan(ans){
    if (isNaN(ans)){
        document.getElementById('answers').textContent = 'Error';
    } else {
        document.getElementById('answers').textContent = ans;
    };
}
function clearButt(){
    document.getElementById('calculations').textContent = '';
    document.getElementById('answers').textContent = '';
    result = '';
}
function deleteButt(){
    const text = document.getElementById('calculations').textContent
    const newText = text.substring(0, text.length -1);
    document.getElementById('calculations').textContent = newText;
}


function decimalButt(){
    const expr = document.getElementById('calculations').textContent
    if (expr.includes('+') || expr.includes('-') || expr.includes('x') || expr.includes('÷')){
        const calArray = expr.split(/[+\-x÷]/)
        if (calArray[1] && calArray[1].includes('.')){
            console.log('using second decimal not allowed!')
        } else{
            document.getElementById('calculations').textContent += '.';
        }    
    } else if (expr.includes('.')){
        Error
    } else {
        document.getElementById('calculations').textContent += '.'
    }

}
