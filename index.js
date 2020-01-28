
const button = document.getElementsByClassName('but');
const container = document.querySelector('.container');

function toggler() {
    console.log(container.style.display)
    if(container.style.display == "flex"){
        container.style.display = "none";
    } else {
        container.style.display = "flex";
    }
}
toggler();
// console.log(button.style.display)