'use strict'

// create an img arr first
// obj const,
// empt [] to push data,
// event listener for clicks,

var img = ['img/bathroom.jpg', 'img/bag.jpg' , 'img/banana.jpg', 'img/breakfast.jpg',
'img/bubblegum.jpg', 'img/chair.jpg','img/cthulhu.jpg',
'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg',
'img/scrissors.jpg' , 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg',
'img/unicocrn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var picRan = img.length * Math.random();  //random pic generated
var imgShort = [];  //empty arry for shortened img names
var totalClick = 0 ;
var amtClick = [];
function Picture (name, path) {   //setting up constructor
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.numClicks = 0;
};
for (var i = 0; i < img.length; i++) { //loop thru all images. img names will be
  //the shorter version.
  imgShort.push(img[i].split('/')[1].split('.')[0]);
  console.log(imgShort[i]);
}

var imgArry = [];
for (var m = 0; m < imgShort.length; m++) {
  imgArry.push(new Picture(imgShort, img));
  console.log(imgArry[i]);
}  //CREATE AN ARRAY TO STORE ALL NEW OBJECTS

// setting up to create  generate 3 img at a time}
for (var n = 0; n < 3; n++) {
  var imgContent = document.getElementById('img-box'); //the div is where the imgs will be
  imgContent.setAttribute('src', picRan, img);   //using the setAttribute method to pass in param
    //of 'src', 'randomd imgs'
  div.appendChild(imgContent); //div is parent element. append so pic shows up.
  totalClick++; //tracks how many time an img has been clicked
}
function clicky(event) {  //create an event <click>.
  var amtClick = [];  //img clicked will be pushed to this empty array
  var clicked1 = event.target.id; //
  if ( imgShort.clicked === true) { //if an img is cliked, that img will be pushed to the
    //totalClick arry. or an alert will ask user to click on an img.
    amtClick.push(new Picture(clicked1));
    console.log(amtClick);
  } else {
    alert('Please click on an image');
    totalClick++;
  }
}
id.addEventListener('click', clicky); //id tag in dom triggers the event to fire
// if an img is picked then, it will get run again every othert time

function  pickedImg() {  //the clicked img will be run every other time
  for ( var k = 0; k < imgShort.length; k +=2) {
  }
}
var tallyClick = [];
for (var t = 0; t < imgShort.length; t++) {
  if (totalClick === 6) {
    tallyClick.push('Yay!This' + pickedImg + 'has been clicked' + totalClick);
    console.log(tallyClick);
  }
}

function table() {  //create data that includes name of img and number of clicks
  for ( var g = 0; g < imgShort.length; g++) {  //loop though all pic
  var tb = document.getElementById('table');  //create a memory in dom by the table id
  var row1 = document.getElementById('tr'); //setting up to add content to dom by 'tr' id
  row1.creatContent = '<td>' + imgShort + '</td>' +
  '<td>' + this.numClicks + '</td>' + '<td>' + totalClick + '</td>'; //msg printed in the row.
  tb.appendChild(row1);
  }
  };
table();
