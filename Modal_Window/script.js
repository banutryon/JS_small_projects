const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");

const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelectorAll(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};
const openModal2 = function () {
	modal2.classList.remove("hidden");
	overlay.classList.remove("hidden");
};
const openModal3 = function () {
	modal3.classList.remove("hidden");
	overlay.classList.remove("hidden");
};
const closeModal = function () {
	modal.classList.add("hidden");
	modal2.classList.add("hidden");
	modal3.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
	if (btnsOpenModal[i] === btnsOpenModal[0]) {
		btnsOpenModal[i].addEventListener("click", openModal);
	} else if (btnsOpenModal[i] === btnsOpenModal[1]) {
		btnsOpenModal[i].addEventListener("click", openModal2);
	} else {
		btnsOpenModal[i].addEventListener("click", openModal3);
	}
}
for (let i = 0; i < btnsCloseModal.length; i++) {
	btnsCloseModal[i].addEventListener("click", closeModal);
}
// btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	console.log(e.key);
	if (
		(e.key === "Escape" && !modal.classList.contains("hidden")) ||
		!modal2.classList.contains("hidden") ||
		!modal3.classList.contains("hidden")
	) {
		closeModal();
	}
});
