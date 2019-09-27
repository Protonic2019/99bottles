// Import stylesheets
import './style.css';

// Write Javascript code!

/*
Steps in the program:
0. Create an array for output
1. Set 99 bottles of beer in a variable.
2. Create a function that can run the song
3. While loop in the function that as long as there are bottles of beer, the song keeps running
4. If statement for bottle <=99 && > 2
5. If statement for bottle = 2
6. If statmeent for bottle = 1
7. If statement for bottle = 0

decrement counter on beer bottles
popping the array so the messages don't stack.

This might help:
var output = [];
var count = 100;

function decreaseCount(){
    while(count > 0){
        output.push(count);
        console.log (output);
        count--;
        output.pop();
    }
}
*/
