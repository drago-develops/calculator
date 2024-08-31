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
    document.getElementById('calculations').textContent += '/';
}
function opTimes(){
    document.getElementById('calculations').textContent += '*';
}
function opMinus(){
    document.getElementById('calculations').textContent += '-';
}
function opPlus(){
    document.getElementById('calculations').textContent += '+';
}
function operate(){
    //document.getElementById('calculations').textContent += '=';
    const element = document.getElementById('calculations')
    const text = element.innerText || element.textContent;
    const result = element.innerHTML = text
    console.log(result);
    transStringToOperation(result)
};

function transStringToOperation(str){
    if (str.includes('+')){
        let calcArray = str.split('+');
        console.log(calcArray)
        let a = parseInt(calcArray[0]);
        let b = parseInt(calcArray[1]);
        let c = a + b
        console.log(c)
        document.getElementById('answers').textContent = c;
    }

}