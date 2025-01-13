document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', ()=>{
    const heading = document.querySelector('.section_1 h1 ');
    const paragraph = document.querySelector('.section_1 p');
    heading.classList.add('fade-in');
    paragraph.classList.add('fade-in_1')
});
