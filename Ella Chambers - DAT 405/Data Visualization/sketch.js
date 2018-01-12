//Dat 405 - Ella Chambers
//Data Visualisation

let apiKey = "&apikey=a6028204"; //api key
let wonderwoman; //add a new one for each movie
let guardiansoftheglaxayvol2;
let spidermanhomecoming;
let it;
let thorragnarok;
let logan;
let dunkirk;
let babydriver;
let line1 = ""; //create a new one for each movie
let line2 = "";
let line3 = "";
let line4 = "";
let line5 = "";
let line6 = "";
let line8 = "";
let line7 = "";
let booleanSwitch = false; //allows it to go in a rotation between the infomation
let bg; //This is needed to set the background as an image
let dunkirkSwitch = false;
let babydriverSwitch = false;
let loganSwitch = false;
let wonderwomanSwitch = false;
let guardiansoftheglaxayvol2Switch = false;
let spidermanSwitch = false;
let itSwitch = false;
let thorSwitch = false;


//URL
function preload() {
  let url = "http://www.omdbapi.com/?t=Wonder+Woman+&y=2017" + apiKey;
  let url2 = "http://www.omdbapi.com/?t=Guardians+of+the+Galaxy+Vol+2&y=2017" + apiKey; //the json link for each movie
  let url3 = "http://www.omdbapi.com/?t=Spider-Man+Homecoming&y=2017" + apiKey;
  let url4 = "http://www.omdbapi.com/?t=IT&y=2017" + apiKey;
  let url5 = "http://www.omdbapi.com/?t=Thor%3A+Ragnarok&y=2017" + apiKey;
  let url6 = "http://www.omdbapi.com/?t=Logan&y=2017" + apiKey;
  let url9 = "http://www.omdbapi.com/?t=Dunkirk&y=2017&" + apiKey;
  let url11 = "http://www.omdbapi.com/?t=Baby+Driver&y=2017" + apiKey;

  //Movie JSON
  wonderwoman = loadJSON(url);//add a new one for each movie
  guardiansoftheglaxayvol2 = loadJSON(url2); //telling it what to load
  spidermanhomecoming = loadJSON(url3);
  it = loadJSON(url4);
  thorragnarok = loadJSON(url5);
  logan = loadJSON(url6);
  dunkirk = loadJSON(url9);
  babydriver = loadJSON(url11);
}

function setup() {
  //console.log(); //change to see other info
  bg = loadImage("BACKGROUND.jpg"); //setting the image as background
  var canvas = createCanvas(1280, 720);
  canvas.class("myCanvas");
  canvas.parent("myContainer"); //canvas size for the brief
  rectMode(CENTER); //sets the shape to the centre of the canvas
  stroke(0);
  strokeWeight(4); //sets the weight of the lines
  textSize(40); //controls text size
  fill(255, 255, 255); //sets colour of the text
}

function draw(){ //add visuals here

  background(bg); //telling it to use the image as background
  push();
  translate(1280/2, 720/2);

  rotate(radians(0)); //set different rotation for each line
  rect(0,0, 1300, 2); //setting up the length and thickness of line

  rotate(radians(45));
  rect(0,0, 1300, 2);

  rotate(radians(90));
  rect(0,0, 1300, 2);

  rotate(radians(135));
  rect(0,0, 1300, 2);

  rotate(radians(180));
  rect(0,0, 1300, 2);

  rotate(radians(225));
  rect(0,0, 1300, 2);

  rotate(radians(270));
  rect(0,0, 1300, 2);

  rotate(radians(315));
  rect(0,0, 1300, 2);

  pop(); //putting it in a push and pop keeps the lines



  push(); //create this for each movie
  rotate(radians(406)); //sets angle
  if (dunkirkSwitch && mouseIsPressed){ //telling it to change when mouse pressed
    text("" + dunkirk.BoxOffice, 187, -163); //setting placement of text
  } else {
    text("Dunkirk", 187, -163); //setting placement of text
  }
  pop();

  push(); //repeat of the above
  rotate(radians(360));
  if (loganSwitch && mouseIsPressed){
    text("" + logan.BoxOffice, 5, 398);
  } else {
    text("Logan", 5, 398);
  }
  pop();

  push();
  rotate(radians(90));
  if (babydriverSwitch && mouseIsPressed){
    text("" + babydriver.BoxOffice, 0, -600);
  } else {
    text("Baby Driver", 0, -600);
  }
  pop();

  push();
  rotate(radians(675));
  if (wonderwomanSwitch && mouseIsPressed){
    text("" + wonderwoman.BoxOffice, 480, 700);
  } else {
    text("Wonder Woman",  480, 700);
  }
  pop();

  push();
  rotate(radians(720));
  if (guardiansoftheglaxayvol2Switch && mouseIsPressed){
    text("" + guardiansoftheglaxayvol2.BoxOffice, 1100, 352);
  } else {
    text("Guardians Of The Galaxy Vol 2",  901, 352);
  }
  pop();

  push();
  rotate(radians(765));
  if (spidermanSwitch && mouseIsPressed){
    text("" + spidermanhomecoming.BoxOffice, 1050, -207);
  } else {
    text("Spider-Man Homecoming",  912, -207);
  }
  pop();

  push();
  rotate(radians(90));
  if (itSwitch && mouseIsPressed){
    text("" + it.BoxOffice, 530, -650);
  } else {
    text("IT",  690, -650);
  }
  pop();

  push();
  rotate(radians(495));
  if (thorSwitch && mouseIsPressed){
    text("" + thorragnarok.BoxOffice, 90, -716);
  } else {
    text("Thor Ragnarok",  90, -716);
  }
  pop();

  makeButtons(); //function to create buttons
}

function makeButtons(){ //all buttons must go under here
  //Dunkirk
  let distance1 = dist(mouseX, mouseY, 210, 175); //setting points where you can click
  if (distance1<200){
    dunkirkSwitch = true; //telling it to switch
    //cursor(HAND);
  } else {
    dunkirkSwitch = false;
    //cursor(ARROW);
  }

  //Logan
  let distance2 = dist(mouseX, mouseY, 210, 525); //repeat of above but changed for specific movie
  //console.log(distance1);
  if (distance2<200){ //must change distance. for each one, otherwise it won't work
    loganSwitch = true;
    //cursor(HAND);
  } else {
    loganSwitch = false;
    //cursor(ARROW);
  }

  //Baby Driver
  let distance3 = dist(mouseX, mouseY, 532, 101);
  if (distance3<200){
    babydriverSwitch = true;
  } else {
    babydriverSwitch = false;
  }

  //gotg
  let distance4 = dist(mouseX, mouseY, 1120, 117);
  if (distance4<200){
    guardiansoftheglaxayvol2Switch = true;
  } else {
    guardiansoftheglaxayvol2Switch = false;
  }

  //ww
  let distance5 = dist(mouseX, mouseY, 788, 85);
  if (distance5<200){
    wonderwomanSwitch = true;
  } else {
    wonderwomanSwitch = false;
  }

  //SM
  let distance6 = dist(mouseX, mouseY, 1082, 546);
  if (distance6<200){
    spidermanSwitch = true;
  } else {
    spidermanSwitch = false;
  }

  //IT
  let distance7 = dist(mouseX, mouseY, 743, 629);
  if (distance7<200){
    itSwitch = true;
  } else {
    itSwitch = false;
  }

  //thor
  let distance8 = dist(mouseX, mouseY, 538, 616);
  if (distance8<200){
    thorSwitch = true;
  } else {
    thorSwitch = false;
  }


}
