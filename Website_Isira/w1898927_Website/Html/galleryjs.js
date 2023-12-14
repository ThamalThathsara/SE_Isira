//declaring bg to change the background colour of body
let bg=document.querySelector('body');

//pop up images (modal images)
const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const caption = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const dropdowns=document.querySelectorAll('.dropdown');

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    caption.innerHTML = image.alt;
    modal.classList.add("appear");

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
   });
});

//dropdown menu
dropdowns.forEach(dropdown =>{
	const select= dropdown.querySelector('.displaying');
	const caret= dropdown.querySelector('.caret');
	const menu= dropdown.querySelector('.menu');
	const colour= dropdown.querySelectorAll('.menu li');
	const selected= dropdown.querySelector(".selected");
	select.addEventListener('click',() =>{
		select.classList.toggle('select-clicked');
		caret.classList.toggle('caret-rotate');
		menu.classList.toggle('menu-open');
	});
	colour.forEach(option =>{
		option.addEventListener('click',()=>{
			selected.innerText = option.innerText;
			select.classList.remove('select-clicked');
			caret.classList.remove('caret-rotate');
			menu.classList.remove('menu-open');
			colour.forEach(option=> {
				option.classList.remove('active');
			});	
			option.classList.add('active');
		});
	});
});
//changing text colour
document.getElementById("blacktext").addEventListener("click",()=>{
	document.getElementById("main").style.color = "black";
	document.getElementById("modaltext").style.color="black";
});
document.getElementById("bluetext").addEventListener("click",()=>{
	document.getElementById("main").style.color = "blue";
	document.getElementById("modaltext").style.color="blue";
});
document.getElementById("whitetext").addEventListener("click",()=>{
	document.getElementById("main").style.color = "white";
	document.getElementById("modaltext").style.color="white";
});
document.getElementById("redtext").addEventListener("click",()=>{
	document.getElementById("main").style.color = "red";
	document.getElementById("modaltext").style.color="red";
});
document.getElementById("greentext").addEventListener("click",()=>{
	document.getElementById("main").style.color = "green";
	document.getElementById("modaltext").style.color="green";
});
//changing background colour
document.getElementById("blackbg").addEventListener("click",()=>{
	bg.style.background="black";
});
document.getElementById("whitebg").addEventListener("click",()=>{
	bg.style.background="white";
});
document.getElementById("bluebg").addEventListener("click",()=>{
	bg.style.background="blue";
});
document.getElementById("redbg").addEventListener("click",()=>{
	bg.style.background="red";
});
document.getElementById("greenbg").addEventListener("click",()=>{
	bg.style.background="green";
});