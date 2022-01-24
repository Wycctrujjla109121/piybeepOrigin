function anim() {
    const textAnim = document.querySelector('.project__label').textContent;
    const textAminMass = Array.from(textAnim)
    document.querySelector('.project__label').textContent = '';
    k = 0;
    if (k < textAminMass.length)
    {
        const interval = setInterval(() => {
            if (k < textAminMass.length)
            {
                document.querySelector('.project__label').textContent += textAminMass[k];
                k++;
            }
            else{clearInterval(interval)}
        }, 50);
    }
}
anim();