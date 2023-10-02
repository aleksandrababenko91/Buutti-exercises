/*Assignment 3 (Repetitive code)
The following code has 3 triangles with different lengths for their cathetuses. 
The trianges' areas are calculated and printed.


However, if you look at the code, you'll notice that it has some repetition. 
In particular, the way the area is calculated for a triangle is repeated 3 times.

The code would be cleaner if that calculation was split into its own function 
that took a triangle as a parameter and returned the area of the given triangle. 
That function could then be called 3 times (once for each triangle) 
instead of having the calculation just copy-pasted in the code.

Split the area calculation into its own function as described above 
and replace the repetitive calculations with calls to your function.*/

const firstTriangle = { width: 7.0, length: 3.5 };
const secondTriangle = { width: 4.3, length: 6.4 };
const thirdTriangle = { width: 5.5, length: 5.0 };

function areaOfTriangle(triangle) {
    return (0.5*triangle.width*triangle.length);
}

console.log(areaOfTriangle(firstTriangle));
console.log(areaOfTriangle(secondTriangle));
console.log(areaOfTriangle(thirdTriangle));


/*
EXTRA: Create another function that figures out which 
triangle had the biggest area and prints it. 
For example, if the area of the third triangle was biggest, 
it'd print "Third triangle has biggest area!". 
Call your function at the end of the code.*/

const firstTriangleArea = areaOfTriangle(firstTriangle);
const secondTriangleArea = areaOfTriangle(secondTriangle);
const thirdTriangleArea = areaOfTriangle(thirdTriangle);
function biggestTriangle(){
     return Math.max(firstTriangleArea, secondTriangleArea, thirdTriangleArea);
}
console.log(biggestTriangle(), "has the biggest area");