class page_functionality{
    constructor(){
        this.elements= document.querySelectorAll('a[href^="#"]')
        //this.link= document.querySelector(this.getAttribute('href'))
        this.heading=document.querySelector('.section_1 h1 ')
        this.paragraph=document.querySelector('.section_1 p');
        this.init()
        //this.treemenu=new TreeMenu(menuTree)
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

class TreeMenu {
    constructor(tree) {
        this.tree = tree;
        this.ul = document.createElement('ul');
        this.init();
    }

    init() {
        this.createMenu(this.tree, this.ul);
    }

    createMenu(tree, parentElement) {
        const li = document.createElement('li');
        li.textContent = tree.name;

        li.addEventListener('click', (e) => {
            e.stopPropagation();
            li.classList.toggle('collapsed');
        });
        parentElement.appendChild(li);

        if (tree.children) {
            const childrenContainer = document.createElement('ul');
            tree.children.forEach((child) => {
                this.createMenu(child, childrenContainer);
            });
            parentElement.appendChild(childrenContainer);
        }

        return li;
    }
}

// Example usage
const treeData = {
    name: "Root",
    children: [
        { name: "Home" },
        { name: "About" },
        { name: "Projects" },
        { name: "Contact" },
    ],
};

const menu = new TreeMenu(treeData);
document.body.appendChild(menu.ul);

const app=new page_functionality()
