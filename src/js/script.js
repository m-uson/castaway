const navBurger = document.getElementById("burger");
const activeItems = document.querySelectorAll("li a");
const navActive = document.getElementById("nav-active");
const ul = document.querySelectorAll("li a");
const body = document.querySelector("body");

navBurger.addEventListener("click", function () {
	navBurger.classList.toggle("active");
	navActive.classList.toggle("menu-active");
	body.classList.toggle("body-lock");
});

ul.forEach((a) => {
	a.addEventListener("click", function () {
		navBurger.classList.remove("active");
		navActive.classList.remove("menu-active");
	});
});

activeItems.forEach((a) => {
	a.addEventListener("click", function () {
		activeItems.forEach((item) => {
			item.classList.remove("is-active");
		});
		a.classList.add("is-active");
	});
});
