/**
 * objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step-1 : get base value of the triangle
 * step-2 : added an id int the base input field.
 * step-3 : use getElementById to access the input field
 * step-4 : get value from the input field. (Value is string now)
 * step-5 : convert the value to a number . use praseFloat 
 **/ 
function calculateTriangle() {
    // triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);

    // triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height);

    // calculate area
    const triCal = 0.5 * base * height;

    // triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = triCal;
}