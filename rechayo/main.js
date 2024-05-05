const navBar = document.querySelector('nav');
const menu = document.getElementById('menu');

document.addEventListener("scroll", () => {
    const rect = navBar.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
	menu.classList.remove('show');
    } else {
	menu.classList.add('show');
    }
})
