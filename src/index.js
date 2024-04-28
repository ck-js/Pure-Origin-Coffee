import {
    headerComponent,
    section1Component,
} from './page-load'
import './style.css'

const content = document.getElementById('content')
content.appendChild(headerComponent())
content.appendChild(section1Component())



