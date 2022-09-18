let palette = ['#040c06','#112318','#1e3a29','#305d42','#4d8061','#89a257','#bedc7f','#eeffcc']
let randGridX = [100,125,150,175,200,225,250,275,300];
let randGridY = [67.5,92.5,117.5,142.5,167.5,192.5,217.5,242.5,267.5];
const hero = {gridX: 100, gridY: 67.5};
const star = {};
let rotation = 0;

function setup() {
    createCanvas(400, 500);
    background(palette[6]);
    rectMode(CENTER);
    noStroke();
    //create screen
    fill(palette[1]);
    rect(width/2, height/3, 275, 275, 15);
    fill(palette[0]);
    rect(width/2, height/3, 250, 250, 25);
    //buttons
    strokeWeight(3);
    stroke(palette[1]);
    buttons(300,406.5);
    dPad(100, 406.5);
    frameRate(24);
    star.gridX = random(randGridX);
    star.gridY = random(randGridY);
}

function draw() {
    //grid on screen
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
           rect (100 + (25*j), 67.5 + (25*i),25); 
        }
    }
    circle(hero.gridX, hero.gridY, 12.5); 
    drawStar(star.gridX, star.gridY, rotation);
    if (hero.gridX == star.gridX && hero.gridY == star.gridY) {
        star.gridX = random(randGridX);
        star.gridY = random(randGridY);
    }
    else {}
    rotation += 0.1
}

function mousePressed() {
    dPadPushed(mouseX,mouseY);
}

function dPadPushed(mX,mY) {
    // moves left
    if ((45 < mX && mX < 85) && (391.5 < mY && mY < 421.5)) {
        print ("left");
        if (hero.gridX <= 100) {
            print(" too far left");
        }
        else { 
            hero.gridX -= 25;
        }
    }
    //moves right
    else if ((115 < mX && mX < 155) && (391.5 < mY && mY < 421.5)) {
        print ("right");
        if (hero.gridX >= 300) {
            print(" too far right");
        }
        else { 
            hero.gridX += 25;
        }
    }
    //moves up
    else if ((85 < mX && mX < 115) && (351.5 < mY && mY< 391.5)) {
        print ("up");
        if (hero.gridY <= 67.5) {
            print(" too far up");
        }
        else { 
            hero.gridY -= 25;
        }
    }
    //moves down
    else if ((85 < mX && mX < 115) && (421.5 < mY && mY< 471.5)) {
        print ("down");
        if (hero.gridY >= 267.5) {
            print(" too far down");
        }
        else { 
            hero.gridY += 25;
        }
    }
    else {print("nope")}
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

function drawStar(starX,starY,rotate) {
    beginShape();
    for (i = 0; i < 11; i++) {
        if (i%2 == 0) {
          vertex(10*cos((i + rotate)*PI/5)  + starX, 10*sin((i + rotate)*PI/5)  + starY);
        }
        else {
          vertex(5*cos((i + rotate)*PI/5) + starX, 5*sin((i + rotate)*PI/5)  + starY);
        }
      }
      endShape();
}
