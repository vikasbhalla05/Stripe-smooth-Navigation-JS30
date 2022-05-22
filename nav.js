let menuItems = document.querySelectorAll(".cool > li");
let background = document.querySelector(".dropdownBackground");
let nav = document.querySelector("nav");

function itemHover() {
	this.classList.add("trigger-enter");
	setTimeout(() => {
		this.classList.contains("trigger-enter") &&
		this.classList.add("trigger-enter-active");
	}, 150);

	background.classList.add("open");
	let dropdown = this.querySelector(".dropdown");
	let dropdownCoords = dropdown.getBoundingClientRect();
	
	let navCoords = nav.getBoundingClientRect();
	let backCoords = {
		width: dropdownCoords.width,
		height: dropdownCoords.height,
		top: dropdownCoords.top - navCoords.top,
		left: dropdownCoords.left - navCoords.left
	};

	background.style.setProperty('width', `${backCoords.width}px`);
	background.style.setProperty('height', `${backCoords.height}px`);
	background.style.setProperty('transform',`translate(${backCoords.left}px,${backCoords.top}px)`);
}

function itemNotHover() {
	this.classList.remove("trigger-enter");
	this.classList.remove("trigger-enter-active");

	background.classList.remove("open");
}


menuItems.forEach(item => item.addEventListener('mouseenter', itemHover));
menuItems.forEach(item => item.addEventListener('mouseleave', itemNotHover));
