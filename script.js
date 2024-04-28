//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {

	const container = document.getElementById('color-board');

	// create 800 square boxes
	for(let i=0; i < 800; i++){
		const square = document.createElement('div');
		square.classList.add('square');
		container.appendChild(square);

		square.addEventListener("mouseenter", () =>{
			let ele = this; // this keyword has (reference) refers to the square 
			ele.style.backgroundColor = '#56a5e3';
			setTimeout(function () {
				ele.style.backgroundColor = 'white';
			}, 1000);
			
		});
	}
});
