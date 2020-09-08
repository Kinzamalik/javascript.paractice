//Challenge 1: Your Age in Days
function ageInDays(){
var birthYear = prompt('What year were you born...Good friend? ');
var ageInDayss = (2019-birthYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ageInDayss+'days old...');
h1.setAttribute('id ','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-reslt').appendChild(h1);
// console.log(ageInDayss); 

}

function reset(){
    document.getElementById('ageInDays').remove();
}


///Challange 2: Cat Generator
function generateCat(){
    var image = document.getElementById('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif"
    div.appendChild(image);
}









