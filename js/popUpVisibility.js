// Появление popUp
document.querySelector('.feedback__button').addEventListener('click', clickFeedback, true)

function clickFeedback(event) {
    let name = document.querySelector('.feedback__input__name').value
    let email = document.querySelector('.feedback__input__email').value
    let checkbox = document.querySelector(".feedback__checkbox").checked

    if (name != '' && email != '' && checkbox == true){
        if (document.querySelector('.eye').classList.contains('eye__display') != true) {
            document.querySelector('.eye').classList.add('eye__display')
        }
    }
    else{
        event.preventDefault()
    }
}

document.querySelector('.eye__quit').addEventListener('click', clickPopQuit, true)

function clickPopQuit() {
    if (document.querySelector('.eye').classList.contains("eye__display")) {
        document.querySelector('.eye').classList.remove('eye__display');
        document.querySelector('.feedback__input__name').value = ''
        document.querySelector('.feedback__input__email').value = ''
        document.querySelector(".feedback__checkbox").checked = false
    }
}