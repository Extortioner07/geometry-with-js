// parallelogram---------------->
function parallelogramCalculate() {
    const base = inputValue('parallelogram-base');
    const length = inputValue('parallelogram-height');
    const total = base * length;
    inputInnerText('parallelogram-area', total)
}
function inputValue(input) {
    const inputField = document.getElementById(input);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;
}
function inputInnerText(innerText, totalArea) {
    const element = document.getElementById(innerText);
    element.innerText = totalArea;
}