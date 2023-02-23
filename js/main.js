const button = document.querySelector('.header_label')
const moon = document.querySelector('#moon')
const sun = document.querySelector('#sun')
const body = document.querySelector('body')

// text 
const text = document.querySelector('.header_text')
text.textContent = '<home/>'

const mainText = document.querySelector('.main_text')
mainText.textContent = '<orangeMode/>'

const title = document.querySelector('title')
title.textContent = '<switchYourself/>'

sun.classList.remove('fa-sun')

// check
moon.addEventListener('click', (e) => {
	e.preventDefault()
	body.classList.add('dark')
	body.classList.remove('default')
	moon.classList.remove('fa-moon')
	sun.classList.add('fa-sun')
	mainText.textContent = '<darkMode/>'
})

sun.addEventListener('click', (e) => {
	e.preventDefault()
	body.classList.add('default')
	body.classList.remove('dark')
	sun.classList.remove('fa-sun')
	moon.classList.add('fa-moon')
	mainText.textContent = '<orangeMode/>'
})
