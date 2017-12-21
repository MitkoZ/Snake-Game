// y=row
// x=column 
//unless there's something other said

var controls=["right","left", "up", "down"];
var points=0;
var mapDivElement=document.getElementById("map-element");
var shouldMakeAnotherMoveId;
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
			if(currentElement instanceof SnakeDot){
				backgroundColor="green";
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

function IsApplePoint(row, column){
	if (map[row][column] == apple) {
		return true;
	}
	return false;
}

function ClearScreen(){
	mapDivElement.innerHTML="";
}

var pointsContainer=document.getElementById('points-container');

function RenderScreen(){
	ClearScreen();
	for (var row = 0; row < map.length; row++) {
		for (var column = 0; column < map[row].length; column++) {
			var mapPoint=CreateMapPoint();
			SetMapPointSize(mapPoint, "20px", "20px");
			SetMapPointBackground(mapPoint, row, column);
			if (IsSnakeBodyPoint(row, column)) {
				mapPoint.style.borderRadius="50px";
			}
			else if(IsApplePoint(row, column)){
				mapPoint.style.backgroundImage="url('Graphics/apple.png')";
				mapPoint.style.backgroundSize="20px";
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
			if (currentElement instanceof SnakeDot && currentElement.PreviousDot==null) { //the tail of the snake
				currentPosition.x=j;
				currentPosition.y=i;
				return currentPosition;
			}
		}
	}
}


function IsUndefined(coordinate) {
	if(typeof coordinate == "undefined"){
		return true;
	}
	return false;
}

function FindEmptyPosition(position){
	if (!IsUndefined(map[position.y][position.x+1]) && map[position.y][position.x+1]==emptySpace) {
		position.x++;
		return position;
	}
	else if(!IsUndefined(map[position.y][position.x-1]) && map[position.y][position.x-1]==emptySpace){
		position.x--;
		return position;
	}
	else if(!IsUndefined(map[position.y+1]) && map[position.y+1][position.x]==emptySpace){
		position.y++;
		return position;
	}
	else if(!IsUndefined(map[position.y-1]) && map[position.y-1][position.x]==emptySpace){
		position.y--;
		return position;
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

function AddNewTail(){
	tailCurrentPosition=GetTailCurrentPosition();
	var currentTailObject=map[tailCurrentPosition.y][tailCurrentPosition.x];
	var newTailDot=new SnakeDot();
	currentTailObject.PreviousDot=newTailDot;
	newTailDot.NextDot=currentTailObject;
	var emptyPosition=FindEmptyPosition(tailCurrentPosition);
	map[emptyPosition.y][emptyPosition.x]=newTailDot;
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
	headCurrentPosition=GetHeadCurrentPosition();
	var tempPosition=headCurrentPosition;
	ChooseDirection(direction, tempPosition);
	if (IsPositionValid(tempPosition)) {
		lastValidDirection=direction;
		SpecialItemChecker(tempPosition);
		MoveSnake(tempPosition);
		RenderScreen();
		shouldMakeAnotherMoveId=setTimeout(MakeNextMove, 500, direction);
	}
	else{
		var deadEvent=new CustomEvent("dead-event");
		document.dispatchEvent(deadEvent);
	}
}

function IsOppositeDirection(currentDirection){
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
	
	return isOppositeDirection;

}

function IsPositionValid(position) {
	if (position.x < 0 || position.y < 0){
		return false;
	}//outside of borders (left and top)
	
	if (position.y > map.length-1 || position.x > map[position.y].length-1){
		return false;
	}//outside of borders (right and bottom)

	if (IsSnakeBodyPoint(position.y, position.x)) {
		return false;
	}// eaten itself
	
	return true;
}

function SpecialItemChecker(position){
	if (map[position.y][position.x]==apple) {
		var appleEaten=new CustomEvent("apple-eaten");
		document.dispatchEvent(appleEaten);
	}
}

var keyPressed;
function IsEventKeyValid(event){
	keyPressed=null;
	switch (event.key){
		case "ArrowUp":
			keyPressed="up";
		break;
		case "ArrowDown":
			keyPressed="down";
		break;
		case "ArrowLeft":
			keyPressed="left";
		break;
		case "ArrowRight":
			keyPressed="right";
		break;
	}

	if (!controls.includes(keyPressed)) {
		return false;
	}
	return true;
}

function KeydownPress(event) {
	if (!IsEventKeyValid(event)) {
		return;
	}
	var direction=keyPressed;
	if (IsOppositeDirection(direction)) {//if it's opposite then proceed with the last chosen valid direction
		return;
	}
	clearTimeout(shouldMakeAnotherMoveId);
	MakeNextMove(direction);
}

document.addEventListener("keydown", KeydownPress);


function GetRandomInteger(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue;
}

function IsEmptySpace(row, column) {
	if (map[row][column] == emptySpace) {
		return true;
	}
	return false;
}

function GetRandomXAndYCoordinates(xMinValue, xMaxValue, yMinValue, yMaxValue) {// x and y in the normal coordinate plane for parameters
	var coordinates={x:0, y:0};
	do {
	coordinates.x=GetRandomInteger(xMinValue, xMaxValue);
	coordinates.y=GetRandomInteger(yMinValue, yMaxValue);	
	}
	while(!IsEmptySpace(coordinates.y, coordinates.x));
	return coordinates;
}


function AddItemToMap(row, column, item){
	map[row][column]=item;
}

function SpawnApple() {
	var spawnCoordinates = GetRandomXAndYCoordinates(0, map[0].length-1, 0, map.length-1);// x and y in the normal coordinate plane for parameters
	AddItemToMap(spawnCoordinates.y, spawnCoordinates.x, apple);
}


function UpdatePoints(){
	points++;
	pointsContainer.innerHTML=points;
}

function GrowSnake() {
	AddNewTail();
}

var stopSpawningApplesId;
function GameOver(){
	alert("Game over");
	document.removeEventListener("keydown", KeydownPress);
	document.removeEventListener("spawn-apple", SpawnApple);
	clearInterval(stopSpawningApplesId);
}

function TriggerSpawnApple() {
	var spawnAppleEvent=new CustomEvent("spawn-apple");
	document.dispatchEvent(spawnAppleEvent);
}

function StartGame(event){
	if(!IsEventKeyValid(event)){
		return;
	}
	stopSpawningApplesId=setInterval(TriggerSpawnApple, 8000);
	document.removeEventListener("keydown", StartGame);
}

document.addEventListener("spawn-apple", SpawnApple);
document.addEventListener("apple-eaten", UpdatePoints);
document.addEventListener("apple-eaten", GrowSnake);
document.addEventListener("dead-event",	GameOver);
document.addEventListener("keydown", StartGame);