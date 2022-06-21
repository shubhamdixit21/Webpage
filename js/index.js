function scrollValue(){
	var navbar = document.getElementById('navbar');
	var scroll = window.scrollY;
	if (scroll < 20) {
		navbar.classList.remove('BgColour');
	}else{
		navbar.classList.add('BgColour');
	}
}

window.addEventListener('scroll',scrollValue);

const mobile_nav = document.querySelector(".hamburger");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());