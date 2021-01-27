// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer in the input

let form = document.querySelector('#myForm')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let answer = document.querySelector('#answer')

let myForm = form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (answer.value == 'multiply') {
        alert (num1.textContent * num2.textContent)
    }

})

// Q2:
// update #box to the background color green when
// myBtn is clicked

let green = document.querySelector('#box')
let myBtn = document.querySelector('#myBtn')

myBtn.addEventListener('click', () => {
    return (box.style.backgroundColor = 'green')
})



