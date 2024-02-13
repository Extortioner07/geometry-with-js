function rectangleCalculate() {
    // rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue);
    console.log(width);

    // rectangle length value
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLength.value;
    const length = parseFloat(rectangleLengthValue);
    console.log(length);

    // calculation of rectangle
    const calculate = width * length;
    console.log('area: ', calculate);

    // rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = calculate;
}