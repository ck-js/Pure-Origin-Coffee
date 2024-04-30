import mobileMenuIcon from './mobile-menu-icon.jpg'
import section1Image from './bolaven-plateau.png'

import section3Image1 from './section3.svg'

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
title.textContent = "connecting local coffee artisans with the world"

wrapWordInSpan('coffee', 'artisans', title)
// wrapWordInSpan('artisans', title)




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
function section2Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-2-parent-container'
parentContainer.classList.add('section-parents')

const title = document.createElement('h2')
title.id = 'section-2-title'
title.classList.add('titles')
title.textContent = "discover the hidden gems of laos";

const paragraphContainer = document.createElement('div');
paragraphContainer.id = 'section-2-paragraph-container';
const p1Wrapper = document.createElement('div');
p1Wrapper.classList.add('section-2-p-wrapper');

createParagraphsFromObject(section2ParagraphsObj1, p1Wrapper)

const p3Wrapper = document.createElement('div');
p3Wrapper.classList.add('section-2-p-wrapper')

createParagraphsFromObject(section2ParagraphsObj2, p3Wrapper)

const p5Wrapper = document.createElement('div');
p5Wrapper.classList.add('section-2-p-wrapper');
createParagraphsFromObject(section2ParagraphsObj3, p5Wrapper)


paragraphContainer.appendChild(p1Wrapper)
paragraphContainer.appendChild(p3Wrapper)
paragraphContainer.appendChild(p5Wrapper)
// paragraphContainer.appendChild(p3)
// paragraphContainer.appendChild(p4)
// paragraphContainer.appendChild(p5)
// paragraphContainer.appendChild(p6)

parentContainer.appendChild(title)
parentContainer.appendChild(paragraphContainer)





return parentContainer;
}

function section3Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-3-parent-container'
parentContainer.classList.add('section-parents')

const title = document.createElement('h2')
title.id = 'section-3-title'
title.classList.add('titles')
title.textContent = "sustainable farming practices";

const cardsContainer = document.createElement('div');
cardsContainer.id = 'section-3-card-containers';

createCardItemsFromObject(section3CardItemsArray, cardsContainer)



// const card1Item = document.createElement('div');
// card1Item.classList.add('card-items');
// const image1 = new Image();
// image1.src = card1Image;
// image1.alt = 'blueish green screen icon with settings icon on top right'
// const card1Title = document.createElement('h2');
// card1Title.classList.add('card-titles');
// card1Title.textContent = 'product web development'
// const card1Paragraph = document.createElement('p');
// card1Paragraph.classList.add('card-paragraphs');
// card1Paragraph.textContent ="Revolutionizing lifestyles, Nutranation crafts brands from the essence of women's everyday realities. Our real-time development process fosters dynamism, creativity, and personalized solutions."; 

// const card2Item = document.createElement('div');
// card2Item.classList.add('card-items');
// const image2 = new Image();
// image2.src = card2Image;
// image2.alt = 'blueish green screen icon with settings icon on top right'
// const card2Title = document.createElement('h2');
// card2Title.classList.add('card-titles');
// card2Title.textContent = 'branding & design'
// const card2Paragraph = document.createElement('p');
// card2Paragraph.classList.add('card-paragraphs');
// card2Paragraph.textContent ="As our brand evolves, our creative team springs into action, unlocking the latent potential of our products to sculpt captivating brands. From conception to completion, it's all made from us."; 

// const card3Item = document.createElement('div');
// card3Item.classList.add('card-items');
// const image3 = new Image();
// image3.src = card3Image;
// image3.alt = 'blueish green screen icon with settings icon on top right'
// const card3Title = document.createElement('h2');
// card3Title.classList.add('card-titles');
// card3Title.textContent = 'performance marketing'
// const card3Paragraph = document.createElement('p');
// card3Paragraph.classList.add('card-paragraphs');
// card3Paragraph.textContent ="In anticipation of the product and brand launch, we meticulously craft our marketing strategy. Our continuous process of performance marketing optimisation fuels the creation of impactful advertising campaigns."; 


// card1Item.appendChild(image1)
// card1Item.appendChild(card1Title)
// card1Item.appendChild(card1Paragraph)

// card2Item.appendChild(image2)
// card2Item.appendChild(card2Title)
// card2Item.appendChild(card2Paragraph)

// card3Item.appendChild(image3)
// card3Item.appendChild(card3Title)
// card3Item.appendChild(card3Paragraph)



// cardsContainer.appendChild(card1Item)
// cardsContainer.appendChild(card2Item)
// cardsContainer.appendChild(card3Item)

parentContainer.appendChild(title)
parentContainer.appendChild(cardsContainer)





return parentContainer;
}




function wrapWordInSpan(word1, word2, h1Element) {
    const words = h1Element.textContent.split(' ');
  
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1 || words[i] === word2) {
            const span = document.createElement('span');
            span.textContent = words[i];
            span.id = 'span-' + i;
            words[i] = span.outerHTML;
        }
    }
        
    h1Element.innerHTML = words.join(' ');
  }


let section2ParagraphsObj1 = {
    paragraph1: '1000 - 1350 M',
    paragraph2: 'altitude'
};
let section2ParagraphsObj2 = {
    paragraph1: '83,000 hectares+',
    paragraph2: 'area'
};
let section2ParagraphsObj3 = {
    paragraph1: '20,000 tons annual',
    paragraph2: 'production'
};



// get object key values and set as text content of p elements
// and append to a parent container
function createParagraphsFromObject(obj, parentContainer) {
    for (let key in obj) {
        let paragraph = document.createElement('p');
        paragraph.textContent = obj[key];
        parentContainer.appendChild(paragraph);
    }
}
const section3CardItemsArray = [
{image: section3Image1,
    title: 'hello card 1',
    description: 'blah blah blah'
},
{image: section3Image1,
    title: 'hello card 2',
    description: 'blah blah blah'
},

]
function createCardItemsFromObject(obj, parentContainer) {
    for (let key in obj) {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-items');

        const image = new Image();
        image.src = obj[key].image;
        image.alt = 'blueish green screen icon with settings icon on top right';
        cardItem.appendChild(image);

        const title = document.createElement('h2');
        title.classList.add('card-titles');
        title.textContent = obj[key].title;
        cardItem.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('card-paragraphs');
        description.textContent = obj[key].description;
        cardItem.appendChild(description);

        parentContainer.appendChild(cardItem);
    }
}






export {
    headerComponent,
    section1Component,
    section2Component,
    section3Component,
    
    

} 
