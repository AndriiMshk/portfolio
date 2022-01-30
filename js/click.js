const button = document.querySelectorAll("button")
console.log(button);

button.forEach((button) => {
button.addEventListener('click', function (e) {
    console.log('click');
})
})