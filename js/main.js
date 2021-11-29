// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS




// VARIABLES

let selectAll 		= document.querySelectorAll('.select');
let buttonAll 		= document.querySelectorAll('button');
let popupAll 		= document.querySelectorAll('.popup');
let headerMenu 		= document.querySelector('.header__menu');
let headerBurger 	= document.querySelector('.header__burger');

// VARIABLES




// SELECT

selectAll.forEach((select) => {

	select.querySelector('.select__head').onclick = function () {

		this.closest('.select').classList.toggle('select_open')

	}

	select.querySelectorAll('li').forEach((selectLi) => {

		selectLi.onclick = function (e) {
			
			let thisHtml = this.innerHTML

			this.closest('.select').querySelector('.select__head').innerHTML = thisHtml


			this.closest('.select').classList.remove('select_open')

		}

	})

})

// SELECT





// POPUP

buttonAll.forEach((button) => {

	button.onclick = function () {

		let btnAttr = this.getAttribute('data-popup')

		document.querySelector('.popup-' + btnAttr).classList.add('popup_open')

	}

})

document.querySelectorAll('.popup__close, .popup__bgd').forEach((close) => {

	close.onclick = function () {

		document.querySelector('.popup').classList.remove('popup_open')

	}

})

// POPUP





// MENU

headerBurger.onclick = function () {
	document.querySelector('.header').classList.toggle('header_open')
}

// MENU































