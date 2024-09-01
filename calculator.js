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
function operate(){
    const element = document.getElementById('calculations')
    const text = element.innerText || element.textContent;
    var result = element.innerHTML = text
    console.log(result);
    transStringToOperation(result)
    document.getElementById('calculations').textContent += '=';
};

function transStringToOperation(str){
    if (str.includes('+')){
        let calcArray = str.split('+');
        console.log(calcArray)
        let a = parseInt(calcArray[0]);
        let b = parseInt(calcArray[1]);
        let c = a + b
        console.log(c)
        isAnswerNan(c);
    } else if (str.includes('-')){
        let calcArray = str.split('-');
        console.log(calcArray)
        let a = parseInt(calcArray[0]);
        let b = parseInt(calcArray[1]);
        let c = a - b
        console.log(c)
        isAnswerNan(c);
    } else if (str.includes('x')){
        let calcArray = str.split('x');
        console.log(calcArray)
        let a = parseInt(calcArray[0]);
        let b = parseInt(calcArray[1]);
        let c = a * b
        console.log(c)
        isAnswerNan(c);
    } else if (str.includes('÷')){
        let calcArray = str.split('÷');
        console.log(calcArray)
        let a = parseInt(calcArray[0]);
        let b = parseInt(calcArray[1]);
        let c = a / b
        console.log(c)
        isAnswerNan(c);        
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
    const string = document.getElementById('calculations').textContent
    //let operators = ['+', '-', 'x' , '÷']
    if (string.includes('+' || '-' || 'x' || '÷')){
        
    };

}