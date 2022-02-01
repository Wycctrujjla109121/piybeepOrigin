function animReset() {
    document.querySelectorAll('.anim').forEach(currentAnim => {
        currentAnim.style.webkitAnimation = 'none'
    });
}

function animAdd() {
    document.querySelectorAll('.anim').forEach(currentAnim =>{
        currentAnim.style.webkitAnimation = ''
    })
}

setInterval(() => {
        animReset();
    setTimeout(() => {
        animAdd()
    }, 50);
}, 14150);