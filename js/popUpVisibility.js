// Появление popUp
document.querySelector('.feedback__button').addEventListener('click', clickFeedback, true)

function clickFeedback(){
    if (document.querySelector('.eye').classList.contains('eye__display') != true)
    {
        document.querySelector('.eye').classList.add('eye__display')
    }
}

document.querySelector('.eye__quit').addEventListener('click', clickPopQuit, true)

function clickPopQuit(){
    if(document.querySelector('.eye').classList.contains("eye__display"))
    {
        document.querySelector('.eye').classList.remove('eye__display');
        document.querySelector('.feedback__input__name').value = ''
        document.querySelector('.feedback__input__email').value = ''
    }
}