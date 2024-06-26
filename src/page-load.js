import mobileMenuIcon from './mobile-menu-icon.jpg'
import section1Image from './bolaven-plateau.png'
import section3Image1 from './section3.svg'
import section4Image from './section4image.jpg'
import section5Image from './section5image.jpg'
import lineImage from './line.svg'
import whatsappImage from './square-whatsapp.svg'
import messengerImage from './facebook-messenger.svg'


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
a1.href = '#section-1-parent-container';
a1.textContent = 'mission';
li1.appendChild(a1)
const li2 = document.createElement('li');
const a2 = document.createElement('a')
a2.href = '#section-2-parent-container';
a2.textContent = 'about';
li2.appendChild(a2)
const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = '#section-10-parent-container';
a3.textContent = 'product';
li3.appendChild(a3)
const li4 = document.createElement('li');
const a4 = document.createElement('a');
a4.href = '#section-8-parent-container';
a4.textContent = 'tours';
li4.appendChild(a4)

const li5 = document.createElement('li');
const a5 = document.createElement('a');
a5.href = '#section-11-parent-container';
a5.textContent = 'contact';
li5.appendChild(a5)


ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)

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
anchorButton.href = '#section-4-parent-container';
anchorButton.textContent = 'Grab coffee with us';


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

// function that creates elements and append to container
createCardItemsFromObject(section3CardItemsArray, cardsContainer)

parentContainer.appendChild(title)
parentContainer.appendChild(cardsContainer)

return parentContainer;
}
function section4Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-4-parent-container'
parentContainer.classList.add('section-parents')

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-4-mobile-image-wrapper';
imageWrapper.classList.add('mobile-image-wrappers')

const image = new Image();
image.src = section4Image;
image.alt = 'close up of hands scooping handful of green coffee beans from brown sack'

// const image2 = new Image();
// image2.id = 'section-1-image-2'
// image2.src = section1Image2;

imageWrapper.appendChild(image)
// imageWrapper2.appendChild(image2)

const textContainer = document.createElement('div');
textContainer.id = 'section-4-text-container';
textContainer.classList.add('column-text-containers')

const title = document.createElement('h2')
title.classList.add('titles')
title.textContent = "Sourcing & distributing the best coffee beans from South East Asia"

// wrapWordInSpan('coffee', 'artisans', title)
// wrapWordInSpan('artisans', title)

const p1 = document.createElement('p');
p1.classList.add('paragraphs')
p1.textContent = "Our sourcing methods is a meticulous process driven by a quest for exceptional quality and unique flavor profiles. With countries like Vietnam, Indonesia, Thailand, and Laos renowned for their award winning coffee production.";
const p2 = document.createElement('p');
p2.classList.add('paragraphs')
p2.textContent = "Are you as curious and adventurous as us?";

// wrapWordInSpan('Nutranation', paragraph)
// const anchorButton = document.createElement('a');
// anchorButton.classList.add('anchor-buttons')
// anchorButton.textContent = 'meet us';


parentContainer.appendChild(imageWrapper)
// parentContainer.appendChild(imageWrapper2)
textContainer.appendChild(title)
textContainer.appendChild(p1)
textContainer.appendChild(p2)
// textContainer.appendChild(anchorButton)
parentContainer.appendChild(textContainer)

return parentContainer;
}
function section5Component() {
    {
        const parentContainer = document.createElement('div');
    parentContainer.id = 'section-5-parent-container'
    parentContainer.classList.add('section-parents')
    
    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'section-5-mobile-image-wrapper';
    imageWrapper.classList.add('mobile-image-wrappers')
    
    const image = new Image();
    image.src = section5Image;
    image.alt = 'close up of hands scooping handful of green coffee beans from brown sack'
    
    // const image2 = new Image();
    // image2.id = 'section-1-image-2'
    // image2.src = section1Image2;
    
    imageWrapper.appendChild(image)
    // imageWrapper2.appendChild(image2)
    
    const textContainer = document.createElement('div');
    textContainer.id = 'section-5-text-container';
    textContainer.classList.add('column-text-containers')
    
    const title = createTitleElement('h2', "Our dedication and passion to bring you the best value")
    
    
    // wrapWordInSpan('coffee', 'artisans', title)
    // wrapWordInSpan('artisans', title)
    
    const p1 = document.createElement('p');
    p1.classList.add('paragraphs')
    p1.textContent = "Our expert buyers and roasters embark on a year round journey to discover the finest beans.";
    const p2 = document.createElement('p');
    p2.classList.add('paragraphs')
    p2.textContent = "They wonder lush mountains, visit local farms, and engage with passionate farmers and their communities that are crucial to the coffee production process.";
    
    // wrapWordInSpan('Nutranation', paragraph)
    // const anchorButton = document.createElement('a');
    // anchorButton.classList.add('anchor-buttons')
    // anchorButton.textContent = 'meet us';
    
    
    parentContainer.appendChild(imageWrapper)
    // parentContainer.appendChild(imageWrapper2)
    textContainer.appendChild(title)
    textContainer.appendChild(p1)
    textContainer.appendChild(p2)
    // textContainer.appendChild(anchorButton)
    parentContainer.appendChild(textContainer)
    
    return parentContainer;
    }

}
function section6Component() {
    const parentContainer = document.createElement('div');
    parentContainer.id = 'section-6-parent-container';
    parentContainer.classList.add('section-parents');

    const button = document.createElement('button');
    button.classList.add('call-to-action-buttons')
    button.textContent = 'Roast Us on socials  ↓';

    const socialsContainer = document.createElement('div');
    socialsContainer.classList.add('socials-container');
    
    createSocialMediaElement(lineImage,"https://line.me/ti/p/K6b7kw42yF", "Chat using LINE",socialsContainer)
    createSocialMediaElement(whatsappImage,"https://wa.me/66842531557?text=I'm%20interested%20in%20your%20coffee%20for%20sale", "Chat on Whatsapp",socialsContainer)
    createSocialMediaElement(messengerImage,"https://www.facebook.com/cliffton.kaewkarn", "Chat on Messenger",socialsContainer)



    button.addEventListener('click', (event) => {
        
        if (button.textContent === 'Roast Us on socials  ↓') {
            button.textContent = 'thanks for dark roasting us  ↑';
        } else {
            button.textContent = 'Roast Us on socials  ↓';
        }
        
        const socialLinkItems = document.querySelector('.socials-container');
        socialLinkItems.classList.toggle('social-items-open');

    const socialLinksOpen = document.querySelector('.social-items-open');

    if (socialLinksOpen) {
        socialLinksOpen.addEventListener('click', () => {
            socialLinkItems.classList.remove('social-items-open');
            
        });
        
    }



});

    parentContainer.appendChild(button);
    parentContainer.appendChild(socialsContainer);

    return parentContainer;
}

function createSocialMediaElement(imageSrc, link, anchorTextContent,  parentContainer) {
    const socialWrapper = document.createElement('div');
    socialWrapper.classList.add('social-wrappers');

    const socialLink = document.createElement('a');
    socialLink.href = link;
    socialLink.target = "_blank";

    const socialImage = new Image();
    socialImage.src = imageSrc;
    socialImage.alt = anchorTextContent;

    socialLink.appendChild(socialImage);

    const anchorLink = document.createElement('a');
    anchorLink.href = link;
    anchorLink.target = "_blank";
    anchorLink.textContent = anchorTextContent;

    socialWrapper.appendChild(socialLink);
    socialWrapper.appendChild(anchorLink);

    parentContainer.appendChild(socialWrapper);
}

function section7Component() {
    {
        const parentContainer = document.createElement('div');
    parentContainer.id = 'section-7-parent-container'
    parentContainer.classList.add('section-parents')
    
    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'section-7-mobile-image-wrapper';
    imageWrapper.classList.add('mobile-image-wrappers')
    
    const image = new Image();
    image.src = section5Image;
    image.alt = 'close up of hands scooping handful of green coffee beans from brown sack'
    
    // const image2 = new Image();
    // image2.id = 'section-1-image-2'
    // image2.src = section1Image2;
    
    imageWrapper.appendChild(image)
    // imageWrapper2.appendChild(image2)
    
    const textContainer = document.createElement('div');
    textContainer.id = 'section-7-text-container';
    textContainer.classList.add('column-text-containers')
    
    const title = document.createElement('h2')
    title.classList.add('titles')
    title.textContent = "We provide full service from sourcing to worldwide logistics and distribution"
    
    const p1 = document.createElement('p');
    p1.classList.add('paragraphs')
    p1.textContent = "Let us know your needs";
    const p2 = document.createElement('p');
    p2.classList.add('paragraphs')
    p2.textContent = "We guarantee you the best quality and service";
    
const ulElement = createList('Sourcing', 'Roasting', 'Packaging', 'Logistics', 'Distribution')

    // const anchorButton = document.createElement('a');
    // anchorButton.classList.add('anchor-buttons')
    // anchorButton.textContent = 'meet us';
    
    
    parentContainer.appendChild(imageWrapper)
    // parentContainer.appendChild(imageWrapper2)
    textContainer.appendChild(title)
    textContainer.appendChild(p1)
    textContainer.appendChild(p2)
    textContainer.appendChild(ulElement)
    // textContainer.appendChild(anchorButton)

    parentContainer.appendChild(textContainer)
    
    return parentContainer;
    }
}
function section8Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-8-parent-container'
parentContainer.classList.add('section-parents')

const imageWrapper = document.createElement('div');
imageWrapper.id = 'section-8-mobile-image-wrapper';
imageWrapper.classList.add('mobile-image-wrappers')

const image = new Image();
image.src = section5Image;
image.alt = 'close up of hands scooping handful of green coffee beans from brown sack'

// const image2 = new Image();
// image2.id = 'section-1-image-2'
// image2.src = section1Image2;

imageWrapper.appendChild(image)
// imageWrapper2.appendChild(image2)

const textContainer = document.createElement('div');
textContainer.id = 'section-8-text-container';
textContainer.classList.add('column-text-containers')

const title = createTitleElement('h2', "one life to experience it all")

const p1 = createParagraphElement("Join us on a journey to the Bolaven Plateau in Southern Laos, where you can witness the beauty of coffee cultivation and processing first-hand. Experience the sights, sounds, and aromas of the coffee farms, and learn about the rich history and culture of the region.")
const p2 = createParagraphElement("We organize guided tours 4 times a year for coffee enthusiasts.")
const p3 = createParagraphElement("Private tours can be arranged upon request from any part of the world. We can also organize virtual tours for those who are unable to travel to Laos.")
const p4 = createParagraphElement("* Accomadations for disabled & special needs can be arranged.")
// const anchorButton = document.createElement('a');
// anchorButton.classList.add('anchor-buttons')
// anchorButton.textContent = 'meet us';

parentContainer.appendChild(imageWrapper)
// parentContainer.appendChild(imageWrapper2)
textContainer.appendChild(title)
textContainer.appendChild(p4)
textContainer.appendChild(p1)
textContainer.appendChild(p2)
textContainer.appendChild(p3)

// textContainer.appendChild(anchorButton)

parentContainer.appendChild(textContainer)

return parentContainer;
}
function section9Component() {
const parentContainer = document.createElement('div');
parentContainer.id = 'section-9-parent-container';
parentContainer.classList.add('section-parents');

const form = createEmailForm();

parentContainer.appendChild(form);
return parentContainer;
}
function section10Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-10-parent-container'
parentContainer.classList.add('section-parents')

const title = createTitleElement('h2', "Wholesale Products");

const cardsContainer = document.createElement('div');
cardsContainer.id = 'section-10-card-containers';

// function that creates elements and append to container
createCardItemsFromObject(section10CarddItemsArray, cardsContainer)

parentContainer.appendChild(title)
parentContainer.appendChild(cardsContainer)

return parentContainer;
}
function createTitleElement(headingLevel, text) {
    const title = document.createElement(headingLevel);
    title.classList.add('titles');
    title.textContent = text;
    return title;
}



const section10CarddItemsArray = [
    {
    image: section3Image1,
    title: '☕️ 1KG Washed Arabica Bolaven Green Beans', 
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation.",
    price: "$06.25 / per KG",
    priceRegular: "$06.88 / per KG",
},
{
    image: section3Image1,
    title: '☕️ 5KG Washed Arabica Bolaven Green Beans', 
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation.",
    price: "$31.28 / $06.25 per KG",
    priceRegular: "$34.41 / $06.88 per KG",
},
{
    image: section3Image1,
    title: '☕️ 10KG Washed Arabica Bolaven Green Beans', 
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation.",
    price: "$61.18 / $06.12 per KG",
    priceRegular: "$67.30 / $06.73 per KG",
},
{
    image: section3Image1,
    title: '☕️ 25KG Washed Arabica Bolaven Green Beans', 
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation.",
    price: "$149.48 / $05.98 per KG",
    priceRegular: "$164.43 / $06.58 per KG"
},
{
    image: section3Image1,
    title: '☕️ 50KG Washed Arabica Bolaven Green Beans', 
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation.",
    price: "$285.56 / $05.71 per KG",
    priceRegular: "$314.12 / $06.28 per KG"
},
{
    image: section3Image1,
    title: '☕️ 100KG Washed Arabica Bolaven Green Beans', 
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation.",
    price: "$543.63 / $05.44 per KG",
    priceRegular: "$597.99 / $05.98 per KG"
},
]
function section11Component() {
    const parentContainer = document.createElement('div');
    parentContainer.id = 'section-11-parent-container';
    parentContainer.classList.add('section-parents');
    
const title = createTitleElement("h2", "Order / Enquiries Form")

    const form = createOrderForm();

    parentContainer.appendChild(title);
        parentContainer.appendChild(form);
    return parentContainer;
    }
function footerComponent() {
const parentContainer = document.createElement('footer');
parentContainer.classList.add('section-parents')

const title = createTitleElement('h1', "Pure Origin")
const p1 = createParagraphElement("Pure Origin Coffee Lab ©")
const p2 = createParagraphElement("All Rights Reserved")

parentContainer.appendChild(title)
parentContainer.appendChild(p1)
parentContainer.appendChild(p2)

return parentContainer;
}



function createList(...items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
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
    paragraph1: '20,000 tons',
    paragraph2: 'annual'
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
{
    image: section3Image1,
    title: '☕️ excellent growing conditions',
    description: "The Bolaven Plateau is a fertile region with a temperate climate, perfect for growing coffee plants. The high altitude and volcanic soil provide the ideal conditions for coffee cultivation."
},
{
    image: section3Image1,
    title: '☕️ organic farming practices',
    description: 'Many coffee farms on the Bolaven Plateau practice organic farming methods. These farmers prioritize sustainable and environmentally friendly practices, avoiding the use of synthetic fertilizers and pesticides.'
},
{
    image: section3Image1,
    title: '☕️ Diverse Distintc Flavors',
    description: "Diversity of Flavors: Coffee beans from the Bolaven Plateau exhibit a diverse range of flavors. The region's unique microclimate and soil composition contribute to the distinct taste profiles of its coffee. You can find flavor notes such as chocolate, floral, fruity, and nutty in Bolaven coffee."
},





]
function createCardItemsFromObject(obj, parentContainer) {
    for (let key in obj) {
        const cardItem = document.createElement('div');
        cardItem.classList.add('section-3-card-items');

        const image = new Image();
        image.src = obj[key].image;
        image.alt = obj[key].alt;
        cardItem.appendChild(image);

        const title = document.createElement('h3');
        title.classList.add('section-3-card-titles');
        title.textContent = obj[key].title;
        cardItem.appendChild(title);

        if (obj[key].price) {
        const price = document.createElement('p');
        price.classList.add('card-paragraphs');
        price.textContent = obj[key].price;
        cardItem.appendChild(price);
        }
        if (obj[key].priceRegular) {
            const priceRegular = document.createElement('p');
            priceRegular.classList.add('card-paragraph-regular-prices');
            priceRegular.textContent = obj[key].price;
            cardItem.appendChild(priceRegular);
            }


        const description = document.createElement('p');
        description.classList.add('card-paragraphs');
        description.textContent = obj[key].description;
        cardItem.appendChild(description);

        parentContainer.appendChild(cardItem);
    }
}
function createParagraphElement(text) {
    const p = document.createElement('p');
    p.classList.add('paragraphs');
    p.textContent = text;
    return p;
}
function createEmailForm() {
    const form = document.createElement('form');
    form.method = 'post';
    
    // form.action = '/api/submit';
    form.action = "https://formspree.io/f/xnqekwjy"
    form.classList.add('mobile-forms');
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.textContent = 'Email:';

    const emailInput = document.createElement('input');
    emailInput.id = 'email';
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'stay in touch';
    
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(submitButton);
    return form;
}
function createOrderForm() {
    const form = document.createElement('form');
    form.method = 'post';
    // form.action = '/api/submit';
    form.action = "https://formspree.io/f/xnqekwjy";
    form.classList.add('mobile-forms');

    const p1 = createParagraphElement("A coffee loving human will get back to you within 12 hours!")
    form.appendChild(p1)

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Name:';

    const nameInput = document.createElement('input');
    nameInput.id = 'name';
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;

    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.textContent = 'Email:';

    const emailInput = document.createElement('input');
    emailInput.id = 'email';
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    const subjectLabel = document.createElement('label');
    subjectLabel.htmlFor = 'subject';
    subjectLabel.textContent = 'Subject:';

    const subjectInput = document.createElement('input');
    subjectInput.placeholder = "1000KG Russia"
    subjectInput.id = 'subject';
    subjectInput.type = 'text';
    subjectInput.name = 'subject';
    subjectInput.required = true;

    form.appendChild(subjectLabel);
    form.appendChild(subjectInput);

    const messageLabel = document.createElement('label');
    messageLabel.htmlFor = 'message';
    messageLabel.textContent = 'Message:';

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.rows = 10;
    messageInput.name = 'message';
    messageInput.required = true;
messageInput.placeholder = "I love coffee so much I want to order 10,000KG!"
    form.appendChild(messageLabel);
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Lets build a coffee empire!';
form.appendChild(submitButton);

    return form;
}




export {
    headerComponent,
    section1Component,
    section2Component,
    section3Component,
    section4Component,
    section5Component,
    section6Component,
    section7Component,
    section8Component,
    section9Component,
    section10Component,
    section11Component,
    footerComponent,


    

} 
