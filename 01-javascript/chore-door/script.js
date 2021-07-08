let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let openDoor1, openDoor2, openDoor3;

let numClosedDoors = 3;

let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
	let choreDoor = Math.floor(Math.random() * numClosedDoors);
	switch(choreDoor) {
		case 0:
			openDoor1 = botDoorPath;
			openDoor2 = beachDoorPath;
			openDoor3 = spaceDoorPath;
			break;
		case 1:
			openDoor1 = beachDoorPath;
			openDoor2 = botDoorPath;
			openDoor3 = spaceDoorPath;
			break;
		case 2:
			openDoor1 = spaceDoorPath;
			openDoor2 = beachDoorPath;
			openDoor3 = botDoorPath;
			break;
		default:
			break;
	}
};

startButton.onclick = () => {
	if (!currentlyPlaying) {
		startRound();
	}
};

doorImage1.onclick = () => {
	if (!isClicked(doorImage1) && currentlyPlaying) {
		doorImage1.src = openDoor1;
		playDoor(doorImage1);
	}
};

doorImage2.onclick = () => {
	if (!isClicked(doorImage2) && currentlyPlaying) {
		doorImage2.src = openDoor2;
		playDoor(doorImage2);
	}
};

doorImage3.onclick = () => {
	if (!isClicked(doorImage3) && currentlyPlaying) {
		doorImage3.src = openDoor3;
		playDoor(doorImage3);
	}
};

const startRound = () => {
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = "Goodluck!";
	currentlyPlaying = true;
	randomChoreDoorGenerator();
};

const isBot = door => {
	return (door.src === botDoorPath) ? true : false;
};

const isClicked = door => {
	return (door.src === closedDoorPath) ? false : true;
};

const playDoor = door => {
	numClosedDoors--;
	if (numClosedDoors === 0) {
		gameOver('win');
	} else if (isBot(door)) {
		gameOver();
	}
};

const gameOver = (status) => {
	if (status === 'win') {
		startButton.innerHTML = 'You win! Play again?';
	} else {
		startButton.innerHTML = 'Game over! Play again?';
		currentlyPlaying = false;
	}
}

startRound();