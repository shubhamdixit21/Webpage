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