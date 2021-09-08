var antX = 900;
var antY = 400;
var grid = []; 
var dir = 0;
var maxX = 400;
var maxY = 400;
var gap = 10;
var dict= {
  0 :[0,-gap],
  1 :[-gap,0],
  2 :[0,gap],
  3 :[gap,0],
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxX = windowWidth;
  maxY = windowHeight;
   var x = 0;
   var y =0;
  while (x < maxX) {
    line(x, 0, x, maxY);
    x += gap;
  }
   
  while (y < maxY) {
    line(0, y, maxX, y);
    y += gap;
  }
  
  
  for (let x = 0; x < maxX; x+=gap) {
    grid[x] = []; // create nested array
    for (let y = 0; y < maxY; y+=gap) {
      grid[x][y] = 255;
    }
  }
  
}

  function new_square(x,antX,antY){
    fill(255,x,x);
    rect(antX, antY, gap, gap);
  }
  
  
  function turn_left(curr_dir, currX, currY){
    dir = (curr_dir+1)%4;
    var temp = dict[dir];
    grid[currX][currY] = 255- grid[currX][currY];
    new_square(grid[currX][currY],currX,currY);
    antX += temp[0];
    antY += temp[1];  
  }
  function turn_right(curr_dir, currX, currY){
    dir = (curr_dir+3)%4;
    var temp = dict[dir];
    grid[currX][currY] = 255- grid[currX][currY];
    new_square(grid[currX][currY],currX,currY);
    antX +=  temp[0];
    antY +=  temp[1];
  } 
  function draw() {
    if(grid[antX][antY]===255){
    //console.log(dir);
      turn_left(dir,antX,antY);
    }
  
    if(grid[antX][antY]===0){
     //console.log(dir);
     turn_right(dir,antX,antY);
    }
  }