function anim() {
    const textAnim = document.querySelector('.site_content_text h3').textContent;
    const textAminMass = Array.from(textAnim)
    document.querySelector('.site_content_text h3').textContent = '';
    k = 0;
    if (k < textAminMass.length)
    {
        const interval = setInterval(() => {
            if (k < textAminMass.length)
            {
                document.querySelector('.site_content_text h3').textContent += textAminMass[k];
                k++;
            }
            else{clearInterval(interval)}
        }, 100);
    }
}
anim();

const clickTypeSite = document.querySelectorAll('.type_site_text .type_site_info_text_arrow').forEach((site)=>{
    site.addEventListener('click', clickSite);
})

function clearTypeSite(){
    document.querySelectorAll('.type_site_text .type_site_info_text_arrow').forEach((clearSite)=>{
        clearSite.children[1].src = 'bgImage/TypeSiteArrowRight.svg'
        clearSite.children[1].classList.remove('type_site_info_text_arrow_opacity')
        clearSite.children[1].classList.add('animation_arrow_white')
    })
}

clearTypeSite()

function clickSite(e){
    currentSite = e.currentTarget;
    if (currentSite.children[1].classList.contains('type_site_info_text_arrow_opacity')){
        currentSite.children[1].classList.remove('type_site_info_text_arrow_opacity');
        currentSite.children[1].classList.add('animation_arrow_white');
            clearTypeSite();
    }
    else{
            clearTypeSite();
        currentSite.children[1].classList.add('type_site_info_text_arrow_opacity');
        currentSite.children[1].classList.remove('animation_arrow_white');
        currentSite.children[1].src = 'bgImage/TypeSiteArrowGreen.svg'
    }
}