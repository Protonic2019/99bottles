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

var output = [];
var count = 99;

function decreaseCount(){
    while(count >= 0){
        output.push(lyricForCount(count));
        console.log (output);
        count--;
        output.pop();
    }
}

function lyricForCount(count){
  var countDecreased = count-1;
  var lyric;
  if (count >2){
  lyric= (count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + countDecreased + " bottles of beer on the wall.");
} if(count === 2){
  lyric= (count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + countDecreased + " bottle of beer on the wall.");
} if(count === 1){
  lyric= (count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
} if(count === 0){
  lyric= ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}
return lyric;
}
decreaseCount();
