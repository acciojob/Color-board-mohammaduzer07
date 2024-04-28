// //your JS code here. If required

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const container  = document.getElementById("container")

const SQUARES = 800

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=> setColor(square));
    square.addEventListener("mouseout",()=> removeColor(square));

    container.appendChild(square)
}

function setColor(element) {
	const color = randomColor();

	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}

function randomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index];
}
// document.addEventListener("DOMContentLoaded", function () {

// 	const container = document.getElementById('color-board');

// 	// create 800 square boxes
// 	for(let i=0; i < 800; i++){
// 		const square = document.createElement('div');
// 		square.classList.add('square');
// 		container.appendChild(square);

// 		square.addEventListener("mouseenter", () =>{
// 			let ele = this; // this keyword has (reference) refers to the square 
// 			ele.style.backgroundColor = '#56a5e3';
// 			setTimeout(function () {
// 				ele.style.backgroundColor = 'rgb(29, 29, 29)';
// 			}, 1000);
			
// 		});
// 	}
// });
