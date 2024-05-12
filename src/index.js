import {
    headerComponent,
    section10Component,
    section1Component,
    section2Component,
    section3Component,
    section4Component,
    section5Component,
    section6Component,
    section7Component,
    section8Component,
    section9Component,
} from './page-load'
import './style.css'

const content = document.getElementById('content')
content.appendChild(headerComponent())
content.appendChild(section1Component())
content.appendChild(section2Component())
content.appendChild(section3Component())
content.appendChild(section4Component())
content.appendChild(section6Component())
content.appendChild(section5Component())
content.appendChild(section9Component())
content.appendChild(section7Component())
content.appendChild(section8Component())
content.appendChild(section10Component())




