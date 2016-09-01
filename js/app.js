'use strict'

// create an img arr first
// obj const,
// empt [] to push data,
// event listener for clicks,

var img = ['img/bathroom.jpg', 'img/bag.jpg' , 'img/banana.jpg', 'img/breakfast.jpg',
'img/bubblegum.jpg', 'img/chair.jpg','img/cthulhu.jpg',
'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg',
'img/scissors.jpg' , 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg',
'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
function picRan (){
  return Math.floor(img.length * Math.random());
}//random pic generated. by setting this up as a fx, can call x times and each time
//with ran pix
var imgShort = [];  //empty arry for shortened img names
// var totalClick = 0 ;
var amtClick = [];
function Picture (name, path) {   //setting up constructor
  this.name = name;
  this.path = path;
  this.clicked = 0;
};
for (var i = 0; i < img.length; i++) { //loop thru all images. img names will be
  //the shorter version.
  imgShort.push(img[i].split('/')[1].split('.')[0]);
  console.log(imgShort[i]);
}
var imgArry = [];
for (var m = 0; m < imgShort.length; m++) {
  imgArry.push(new Picture(imgShort[m], img[m]));
  console.log(imgArry[m]);
}  //CREATE AN ARRAY TO STORE ALL NEW OBJECTS

for (var n = 0; n < 3; n++) {
// setting up to create  generate 3 img at a time}
  var imgTag = document.createElement('img')
  var imgContent = document.getElementById('img_box'); //the div is where the imgs will be
  imgTag.setAttribute('src',img[picRan]);   //using the setAttribute method to pass in param
    //of 'src', 'randomd imgs'
  imgTag.setAttribute('id',img);
  imgContent.appendChild(imgTag); //div is parent element. append so pic shows up.
  this.clicked++;
//tracks how many time an img has been clicked
   //id tag in dom triggers the event to fire
function pickedImg() {  //the clicked img will be run every other time
  for ( var k = 0; k < imgShort.length; k +=2 ) {
  };
  function clicky(event) {
    var clicked1 = event.target.id;
    document.getElementById('img_box').addEventListener('click', clicky);
  }
}
var tallyClick = [];
for (var t = 0; t < imgShort.length; t++) {
  if (imgShort.clicked === 6) {
    tallyClick.push('Yay!This' + pickedImg + 'has been clicked' + totalClick);
    console.log(tallyClick);
  }
}
//local storage
var dataLastViewed = []; //create two arry to store values for lastviewed and numClicks
var dataNumClicks = [];
var btn = document.getElementById('btn');
var input = document.getElementById('list');
var tab = document.getElementById('task')

function Here( lastViewed, numClicks) {    //loop through img arry to get data
  this.lastViewed = lastViewed;
  this.numClicks = numClicks;
};
for ( var b = 0; b <imgShort.length; b++) {
  dataLastViewed.push(imgArry[b] + this.lastViewed);
  dataNumClicks.push(imgArry[b]) + this.numClicks);
  console.log(dataNumClicks[]);
  console.log(dataLastViewed[]);
}
  if (localStorage.lastViewed) {  //checking if info is stored locally
  var lastViewed = localStorage.lastViewed.split('.'); //if it is locally, make the value returned into an array
} else {
  var lastViewed = []; //if not stored locally, empt str will be returend.
}

if (localStorage.numClicks) {
  var numClicks = localStorage.numClicks.split('.');
} else {
  var numClicks = [];
}

function save () {  //save entered value. if stored locally, save vaules in variable. otherwise, push into the arrays
  localStorage.lastViewed = lastViewed;  //treating the lastViewed and numClicks as info entered previously.
  localStorage.numClicks = numClicks;
  numClicks.push(input.value);
  lastViewed.push(input.value);
  console.log('yes,on computer', lastViewed);
  console.log('not here', lastViewed);
}
function saveInfo() {   //save in dom
  var list = document.getElementById('li');
  list.appendChild(document.createTextNode(input));
  tab.appendChild;
  console.log(saveInfo);
}
function load() {   //save info on page load. if info is locally housed
  if (localStorage.lastViewed $$ localStorage.numClicks) {
    for ( var i = x; i < imgShort.length; x++) {
      list.appendChild(document.createTextNode(input));
      tab.appendChild;
    }
  }
}
function render() {      //create a render fx to save all info
saveInfo();
load();
};
btn.addEventListener('click', render);


// function chartArry () {
//   for (var z = 0; z < imgShort.length; z++) {
//     amtClick[z]
//   }
// }
// // create a chart
// function drawChart() {
//    var canvas = document.getElementById("chart-chart");
//    var ctx = canvas.getContext('2d');
//     type: 'polar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

function table() {  //create data that includes name of img and number of clicks
  for ( var g = 0; g < imgShort.length; g++) {  //loop though all pic
    var tb = document.getElementById('table_1');  //create a memory in dom by the table id
    var row = document.createElement('tr'); //setting up to add content to dom by 'tr' id
    row.creatContent = '<td>' + imgShort[g] + '</td>' +
   '<td>' + imgShort[g].clicked + '</td>'; //msg printed in the row.
    tb.appendChild(row);
  }
};
table();
