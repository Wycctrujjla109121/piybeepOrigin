const textAnim = "Создаем конверсионные сайты для стартапов и растущих компаний.";
const options = {
    threshold: 0
}
const callback = function(entries, observer){
    entries.forEach(entry => {

        anim()

    });

}

const intersection = new IntersectionObserver(callback, options);

const projectLabel = document.querySelector('.project__label');
intersection.observe(projectLabel);