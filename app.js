// var str = "5+5-";

// var newinput = "12";
// var last = str [str.length - 1]

// var arr = ["+" , "-" ,"*", "/"];
    

// if(arr.indexOf(last) !==-1 &&  arr.indexOf(newinput) !== -1){
//     str = str.slice(0, -1)+ newinput ;
// } else{
//     str += newinput ;
// }
// console.log(str)
 
var farword = 0 ;
var character = document.getElementById('character'); 
function abc(){
    console.log(event.keyCode);

// var forward= document.getElementById('character'); 

if (event.keyCode === 68){
    farword = farword + 10;
   character.style.left = farword + 'px'
   character.src = '../img/akari-realstance.gif'
}
}
window.onkeydown = abc;





