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
    const element = document.getElementById('calculations')
    const text = element.innerText || element.textContent;
    const result = element.innerHTML = text
    console.log(result);
    let x = parseInt(result);
    console.log(x)

};