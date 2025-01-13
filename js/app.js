
class page_functionality{
    constructor(){
        this.elements= document.querySelectorAll('a[href^="#"]')
        //this.link= document.querySelector(this.getAttribute('href'))
        this.heading=document.querySelector('.section_1 h1 ')
        this.paragraph=document.querySelector('.section_1 p');
        this.init()
        this.treemenu=new treemenu()
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
        console.log(this.heading)
        this.heading.classList.add('fade-in');
        this.paragraph.classList.add('fade-in_1')
        });
    }
}

class treenode{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class BST{

}

const menuTree = {
    name: "Home",
    children: [
      {
        name: "Projects",
        children: [
          { name: "Web Development" },
          { name: "Machine Learning" },
          { name: "Open Source" },
        ],
      },
      {
        name: "Blog",
        children: [
          { name: "Programming" },
          { name: "Career" },
        ],
      },
      { name: "Contact" },
    ],
};
class treemenu{
    constructor(){
        this.tree= {
            name: "Home",
            children: [
            {
                name: "Projects",
                children: [
                    { name: "Web Development" },
                    { name: "Machine Learning" },
                    { name: "Open Source" },
                ],
            },
            {
                name: "Blog",
                children: [
                    { name: "Programming" },
                    { name: "Career" },
                ],
            },
            { name: "Contact" },
            ],
        };
        this.ul=document.createElement('ul')
        this.li=document.createElement('li')
        
        this.init()
    }
    init(){
        
        this.createMenu(this.tree)
    }
    createMenu(tree){
        this.li.textContent=tree.name;

        this.li.addEventListener('click',(e)=>{
            e.stopPropagation();
            this.li.classList.toggle('collapsed')
        })
        this.ul.appendChild(this.li)

        if(tree.children){
            const childrenContainer=document.createElement('ul')
            tree.children.forEach((child)=>{
                childrenContainer.appendChild(this.createMenu(child))
            })
            this.ul.appendChild(childrenContainer)

            return this.ul;
        }
    }
}




const app=new page_functionality()






