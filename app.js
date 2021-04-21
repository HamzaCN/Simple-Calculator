const getNumber = (num1) =>{
    let result = document.getElementById('result');
    result.value += num1;
}
const clearResult = () =>{
    let result = document.getElementById('result');
    result.value = '';
}
const getResult = () =>{
    let result = document.getElementById('result');
   result.value = eval(result.value);
}
