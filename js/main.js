const button = document.querySelector('.header_label')
const moon = document.querySelector('#moon')
const sun = document.querySelector('#sun')
const body = document.querySelector('body')

// text 
const text = document.querySelector('.header_text')
text.textContent = 'Home'

sun.classList.remove('fa-sun')

// check
moon.addEventListener('click', (e) => {
	e.preventDefault()
	body.classList.add('dark')
	body.classList.remove('default')
	moon.classList.remove('fa-moon')
	sun.classList.add('fa-sun')

})

sun.addEventListener('click', (e) => {
	e.preventDefault()
	body.classList.add('default')
	body.classList.remove('dark')
	sun.classList.remove('fa-sun')
	moon.classList.add('fa-moon')

})
