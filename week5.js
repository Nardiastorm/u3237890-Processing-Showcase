let palette = ['#040c06','#112318','#1e3a29','#305d42','#4d8061','#89a257','#bedc7f','#eeffcc']
let rotation = 0

function setup() {
    createCanvas(400, 500);
    background(palette[6]);
    rectMode(CENTER);
    noStroke();
    //create screen
    fill(palette[1]);
    rect(width/2, height/3, 275, 275, 15);
    //buttons
    strokeWeight(3);
    stroke(palette[1]);
    buttons(300,406.5);
    dPad(100, 406.5);
    frameRate(30);
}

function draw() {
    fill(palette[0]);
    noStroke();
    rect(width/2, height/3, 250, 250, 25);
    translate(width/2, height/3);
    rotation -= 1;
    //stroke(color(palette[7]));
    for (i = 0; i < 16; i++){  
        if (i < 8) {
            fill(color(palette[0]));
            circle(75*cos(((rotation+i)*PI)/8),75*sin(((rotation+i)*PI)/8),25);
        }
        else {
            fill(color(palette[15-i]));
            circle(75*cos(((rotation+i)*PI)/8),75*sin(((rotation+i)*PI)/8),25);
        }
    }
    fill(palette[6]);
    noStroke();
    textSize(25);
    textFont('Impact');
    text('GAME',-30,0);
    text('PAD', -20,25);
}


function buttons(buttonsX,buttonsY) {
    fill(palette[7]);
    circle(buttonsX,buttonsY-40,40);
    circle(buttonsX,buttonsY+40,40);
    circle(buttonsX+40,buttonsY,40);
    circle(buttonsX-40,buttonsY,40);
  }
  
function dPad(padX,padY) {
    beginShape();
    let padPattern = [15,15,15,15,55,55]
    for (i = 0; i < 13; i++) {
      //switches the direction of the pattern 
      j = (i + 3);
      if (i > 1 && i < 8) {
        negativeX = -1;
      }
      else {
        negativeX = 1;
      }
      if (j > 7 && j < 14) {negativeY = -1;}
      else {
        negativeY = 1;
      }
      //actual vertex after checks
      vertex(-1*negativeX*padPattern[i%6]+padX, -1*negativeY*padPattern[j%6]+padY);
    }
    endShape();
}