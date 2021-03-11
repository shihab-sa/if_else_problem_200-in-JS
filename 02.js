// Write a js program to find maximum between three numbers.


let a =7
let b =5
let c = 1
if(a>b || a>c){
    console.log('A is a maximum number');
}
else if(b>c){
    console.log('B is a maximum number');
}
else if(c>b){
    console.log('C is a maximum number');
}
else if(a==b && a==c && b==c){
    console.log('A & B & C : both are equal');
}