import mobileMenuIcon from './mobile-menu-icon.jpg'
import section1Image from './bolaven-plateau.png'

function headerComponent() {
    const headerContainer = document.createElement('header');
const nav = document.createElement('nav');

const wrapper = document.createElement('div');
wrapper.id = 'wrapper'
const logoContainer = document.createElement('div');
logoContainer.id = 'nav-logo-container'
const h1 = document.createElement('h1')
h1.textContent = 'Pure Origin'
// const image = new Image();
// image.src = logoImage1;
// image.alt = 'turquoise and black bold Nutra Nation logo in capital letters'
// logoContainer.appendChild(image)
logoContainer.appendChild(h1)

const menuButton = document.createElement('button');
menuButton.classList.add('menu-icon')
menuButton.ariaLabel = 'click to open navigation menu'
const image2 = new Image();
image2.src = mobileMenuIcon;
menuButton.appendChild(image2)

wrapper.appendChild(logoContainer)
wrapper.appendChild(menuButton)

const ul = document.createElement('ul');
ul.classList.add('nav-items')
const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = '#section-2-parent-container';
a1.textContent = 'process';
li1.appendChild(a1)
const li2 = document.createElement('li');
const a2 = document.createElement('a')
a2.href = '#section-3-parent-container';
a2.textContent = 'about';
li2.appendChild(a2)
const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = '#section-4-parent-container';
a3.textContent = 'team';
li3.appendChild(a3)
const li4 = document.createElement('li');
const a4 = document.createElement('a');
a4.href = '#section-6-parent-container';
a4.textContent = 'contact';
li4.appendChild(a4)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)

menuButton.addEventListener('click',(event) => {
    
const navItems = document.querySelector('.nav-items');


navItems.classList.toggle('nav-items-open');

const navItemsOpen = document.querySelector('.nav-items-open');

if (navItemsOpen) {
    navItemsOpen.addEventListener('click', () => {
        navItems.classList.remove('nav-items-open');
      });

}

})

const anchorButton = document.createElement('a');
anchorButton.id = 'nav-anchor-button'
anchorButton.classList.add('anchor-buttons')
anchorButton.textContent = 'lets connect'


wrapper.appendChild(logoContainer)
wrapper.appendChild(menuButton)
nav.appendChild(wrapper)
nav.appendChild(ul)
nav.appendChild(anchorButton)



headerContainer.appendChild(nav)

    return headerContainer;
}

function section1Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-1-parent-container'
parentContainer.classList.add('section-parents')

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-1-mobile-image-wrapper';
imageWrapper.classList.add('mobile-image-wrappers')

const image = new Image();
image.src = section1Image;
image.alt = 'landscape image with backdrop of mountains and misty clouds with green coffee plantations'

// const image2 = new Image();
// image2.id = 'section-1-image-2'
// image2.src = section1Image2;

imageWrapper.appendChild(image)
// imageWrapper2.appendChild(image2)

const textContainer = document.createElement('div');
textContainer.id = 'section-1-text-container';
textContainer.classList.add('column-text-containers')

const title = document.createElement('h1')
title.classList.add('titles')
title.textContent = "connecting local artisans with the world"

// wrapWordInSpan('innovative', title)

const p1 = document.createElement('p');
p1.classList.add('paragraphs')
p1.textContent = "we believe in sourcing the freshest, top grade and sustainable coffee beans";
const p2 = document.createElement('p');
p2.id = 'section-1-p2';
p2.classList.add('paragraphs')
p2.textContent = "Our mission is to provide the highest quality products to the international market";

// wrapWordInSpan('Nutranation', paragraph)
const anchorButton = document.createElement('a');
anchorButton.classList.add('anchor-buttons')
anchorButton.textContent = 'meet us';


parentContainer.appendChild(imageWrapper)
// parentContainer.appendChild(imageWrapper2)
textContainer.appendChild(title)
textContainer.appendChild(p1)
textContainer.appendChild(p2)
textContainer.appendChild(anchorButton)
parentContainer.appendChild(textContainer)

return parentContainer;
} 






export {
    headerComponent,
    section1Component,



}; 