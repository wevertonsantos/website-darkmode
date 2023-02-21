const button = document.querySelector('.header_toggle-button')
const icon = document.querySelector('i')
const active = document.querySelector('.active')

// text 
const text = document.querySelector('.header_text')
text.textContent = 'Home'

// button
button.addEventListener('click', (e) => {
	e.preventDefault()
	button.classList.toggle('active')
	showIcon()
})

// icon

function showIcon(){
	if (active === active){
		console.log(active)
	}
}



