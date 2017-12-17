var snakeLength=5;
var mapDivElement=document.getElementById("map-element");
var shouldMakeAnotherMove;
function SnakeDot(){

}

function SnakeDot(previousDot){
	this.PreviousDot=previousDot;
}

var snakeDot1=new SnakeDot();
var snakeDot2=new SnakeDot();
var snakeDot3=new SnakeDot();
var snakeDot4=new SnakeDot();
var snakeDot5=new SnakeDot();
snakeDot1.NextDot=snakeDot2;
snakeDot2.PreviousDot=snakeDot1;
snakeDot2.NextDot=snakeDot3;
snakeDot3.PreviousDot=snakeDot2;
snakeDot3.NextDot=snakeDot4;
snakeDot4.PreviousDot=snakeDot3;
snakeDot4.NextDot=snakeDot5;
snakeDot5.PreviousDot=snakeDot4;

var emptySpace=2;
var apple=3;
var map=
[
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, snakeDot1, snakeDot2, snakeDot3, snakeDot4, snakeDot5, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
	[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace]
];

var headCurrentPosition;
var tailCurrentPosition;
var lastValidDirection="right";
function SetMapPointSize(mapPoint, width, height) {
		mapPoint.style.width=width;
		mapPoint.style.height=height;
}

function SetMapPointBackground(mapPoint, currentRow, currentColumn){
	var backgroundColor;
	var currentElement=map[currentRow][currentColumn];
			if(emptySpace==currentElement){
				backgroundColor="black";
			}
			else if(currentElement instanceof SnakeDot){
				backgroundColor="white";
			}
	mapPoint.style.backgroundColor=backgroundColor;
}

function CreateMapPoint(){
	var mapPoint=document.createElement("div");
	mapPoint.style.position="inline-block";
	return mapPoint;
}

function IsEndOfRow(mapRow, currentColumn){
	if (currentColumn+1==mapRow.length) {
		return true;
	}
	return false;
}

function IsSnakeBodyPoint(row, column) {
	if (map[row][column] instanceof SnakeDot) {
		return true;
	}
	return false;
}

function ClearScreen(){
	mapDivElement.innerHTML="";
}

function RenderScreen(){
	ClearScreen();
	for (var row = 0; row < map.length; row++) {
		for (var column = 0; column < map[row].length; column++) {
			var mapPoint=CreateMapPoint();
			SetMapPointSize(mapPoint,"20px","20px");
			SetMapPointBackground(mapPoint, row, column);
			if (IsSnakeBodyPoint(row, column)) {
				mapPoint.style.borderRadius="50px";
			}
			mapDivElement.appendChild(mapPoint);
			if (IsEndOfRow(map[row], column)) {
				mapDivElement.appendChild(document.createElement("br"));
			}
		}
	}
}


function GetHeadCurrentPosition(){
	var currentPosition={x: null, y: null}
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[i].length; j++) {
			var currentElement=map[i][j];
			if (currentElement instanceof SnakeDot && currentElement.NextDot==null) { //the head of the snake
				currentPosition.x=j;
				currentPosition.y=i;
				return currentPosition;
			}
		}
	}
}

function GetTailCurrentPosition(){
	var currentPosition={x: null, y: null}
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[i].length; j++) {
			var currentElement=map[i][j];
			if (currentElement instanceof SnakeDot && currentElement.PreviousDot==null) { //the head of the snake
				currentPosition.x=j;
				currentPosition.y=i;
				return currentPosition;
			}
		}
	}
}


function RemoveTail(){
	tailCurrentPosition=GetTailCurrentPosition();
	var tailObject=map[tailCurrentPosition.y][tailCurrentPosition.x];
	tailObject.NextDot.PreviousDot=null;
	map[tailCurrentPosition.y][tailCurrentPosition.x]=emptySpace;
}

function AddNewHead(x, y){
	headCurrentPosition=GetHeadCurrentPosition();
	var currentHeadObject=map[headCurrentPosition.y][headCurrentPosition.x];
	var newSnakeDot=new SnakeDot(currentHeadObject);
	currentHeadObject.NextDot=newSnakeDot;
	map[y][x]=newSnakeDot;
}

function MoveSnake(position){
	RemoveTail();
	AddNewHead(position.x, position.y);
}


function ChooseDirection(direction, position){
	switch (direction){
		case "right":
		position.x++;
		break;
		case "up":
		position.y--;
		break;
		case "down":
		position.y++;
		break;
		case "left":
		position.x--;
		break;
	}
}

function MakeNextMove(direction){
	if (!IsDirectionValid(direction)) {
		direction=lastValidDirection; // if it's invalid direction then proceed with the last chosen direction 
	}

	headCurrentPosition=GetHeadCurrentPosition();
	var tempPosition=headCurrentPosition;
	ChooseDirection(direction, tempPosition);
	if (IsPositionValid(tempPosition)) {
		lastValidDirection=direction;
		MoveSnake(tempPosition);
		RenderScreen();
		shouldMakeAnotherMove=setTimeout(MakeNextMove, 200, direction);

	}
	else{
		alert("Game over!");
	}
}

function IsDirectionValid(currentDirection){
	var isOppositeDirection = false;
	if (currentDirection == "right" && lastValidDirection == "left") {
		isOppositeDirection = true;
	}
	else if(currentDirection == "left" && lastValidDirection == "right"){
		isOppositeDirection = true;
	}
	else if(currentDirection == "up" && lastValidDirection == "down"){
		isOppositeDirection = true;
	}
	else if(currentDirection == "down" && lastValidDirection == "up"){
		isOppositeDirection = true;
	}

	if (isOppositeDirection) {
		return false;
	}
	return true;
}

function IsPositionValid(position) {
	if (position.x < 0 || position.y < 0){
		return false;
	}//outside of borders (left and top)
	
	if (position.y > map.length-1 || position.x > map[position.y].length-1){
		return false;
	}//outside of borders (right and bottom)

	return true;
}


	document.addEventListener('keydown', function(event) {
		clearTimeout(shouldMakeAnotherMove);
		switch(event.key){
			case "ArrowUp":
			MakeNextMove("up");
			break;
			case "ArrowDown":
			MakeNextMove("down");
			break;
			case "ArrowLeft":
			MakeNextMove("left");
			break;
			case "ArrowRight":
			MakeNextMove("right");
			break;
		}
	})
