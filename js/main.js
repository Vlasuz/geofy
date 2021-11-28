// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS




// VARIABLES

let selectAll = document.querySelectorAll('.select')

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


































