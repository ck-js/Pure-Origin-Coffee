import {
    headerComponent,
    section1Component,
    section2Component,
    section3Component,
    section4Component,
    section5Component,
} from './page-load'
import './style.css'

const content = document.getElementById('content')
content.appendChild(headerComponent())
content.appendChild(section1Component())
content.appendChild(section2Component())
content.appendChild(section3Component())
content.appendChild(section4Component())
content.appendChild(section5Component())
