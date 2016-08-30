// create an img arr first
// obj const,
// empt [] to push data,
// event listener for clicks,
var imgShort = [];  //empty arry for shortened img names
var img = ['../img/bathroom.jpg', '../img/bag.jpg'], 'img/banana.jpg', 'img/breakfast.jpg',
'img/bubblegum.jpg', 'img/chair.jpg','img/cthulhu.jpg',
'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg',
'img/scrissors.jpg' , 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg',
'img/unicocrn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var picRan = img.length * Math.random;  //random pic generated

function Picture (name, path, clicked, numClicks) {   //setting up constructor
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.numClicks = 0;
};
Picture.prototype.imgName = function () {  //making imgName shorter by making a method.
  for (var i = 0; i < img.length; i++) { //loop thru all images. strings will be
    imgShort.push(img[i].split('/').split('.')[0]);   //created with the split method
  }
imgName;   //calilng the img method with shortened names. create an img in memeory by the src id

function runImg () {  //create a function that will generate 3 img at a time}
  for (var i = 0; i < 3; i++) {
    var imgContent = document.getElementById('img-box'); //the div is where the imgs will be
    imgContent.setAttribute('src' + picRan);    //adding content(img) to table
    div.appendChild(imgContent); //div is parent element. append so pic shows up.
}
runImg();

function clickTrack (event) {  //create an event <click>.
  event.preventDefault();
  var totalClick = [];
  var clicked1 = event.target.clicked.value;
  var numClicks1 = event.target.numClicks.value;
  totalClick.push()
}
//create a table 
