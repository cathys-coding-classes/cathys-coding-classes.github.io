/** Hangman in Canvas **/
var canvas;
var contedxt;

function draw(){
  console.log("Drawing Hangman");
  clearCanvas();
  setColor('#000000');
  setLineWidth(20);
  drawGallows();
  //drawHead();
  //drawBody();
  //drawRightHand();
  //drawLeftHand();
  //drawRightFoot();
  //drawLeftFoot();
};


$(document).ready(function(){
  canvas = $('#hangman')[0];
  context = canvas.getContext("2d");

  draw();
});
