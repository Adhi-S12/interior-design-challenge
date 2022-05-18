let burger_btn = document.querySelector('.burger-btn');
let close_btn = document.querySelector('.close-btn');

let navigation_block = document.querySelector('.navigation');
let navigation_menu = document.querySelector('.nav-menu');

var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
document.addEventListener('DOMContentLoaded', function() {
	if (w > 1000) {
		navigation_menu.classList.remove('hide');
	}
});

// Burger button event listener
burger_btn.addEventListener('click', () => {
	burger_btn.classList.add('hide');
	close_btn.classList.remove('hide');
	navigation_block.classList.remove('hide');
	navigation_block.classList.add('show');
	navigation_menu.classList.remove('hide');
});

// Close button event listener
close_btn.addEventListener('click', () => {
	close_btn.classList.add('hide');
	burger_btn.classList.remove('hide');
	navigation_block.classList.add('hide');
	navigation_block.classList.remove('show');
	navigation_menu.classList.add('hide');
});
