console.log("Hello words");

const area1 = document.getElementById('area1');
const area2 = document.getElementById('area2');
const area2 = document.getElementById('area3');

area1.onclick = handleOnClick;
area2.onclick = handleOnClick;

function handleOnClick(event) {
	event.preventDefault();
	console.log("Good Job");
	console.log(event);
}

