
class page_functionality{
    constructor(){
        this.elements= document.querySelectorAll('a[href^="#"]')
        //this.link= document.querySelector(this.getAttribute('href'))
        this.heading=document.querySelector('.section_1 h1 ')
        this.paragraph=document.querySelector('.section_1 p');
        this.init()
    }
    init(){
        this.scroll()
        this.fade_in()
    }
    scroll(){
        this.elements.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
                this.link.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    fade_in(){
        document.addEventListener('DOMContentLoaded', ()=>{
        const heading=document.querySelector(this.getAttribute('href'))
        console.log(heading)
        heading.classList.add('fade-in');
        this.paragraph.classList.add('fade-in_1')
        });
    }
}

const app=new page_functionality()






