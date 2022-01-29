function anim() {
    document.querySelector('.project__label').textContent = '';
    const textAminMass = Array.from(textAnim)
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