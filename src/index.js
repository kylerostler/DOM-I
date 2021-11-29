const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


const navItem1 = document.querySelector('.nav-item-1');
navItem1.textContent = siteContent['nav']['nav-item-1'];

const navItem2 = document.querySelector('.nav-item-2');
navItem2.textContent = siteContent['nav']['nav-item-2'];

const navItem3 = document.querySelector('.nav-item-3');
navItem3.textContent = siteContent['nav']['nav-item-3'];

const navItem4 = document.querySelector('.nav-item-4');
navItem4.textContent = siteContent['nav']['nav-item-4'];

const navItem5 = document.querySelector('.nav-item-5');
navItem5.textContent = siteContent['nav']['nav-item-5'];

const navItem6 = document.querySelector('.nav-item-6');
navItem6.textContent = siteContent['nav']['nav-item-6'];


const cta = document.querySelector('cta');
const mainContent = document.querySelector('main-content');
const contact = document.querySelector('contact');
const footer = document.querySelector('footer');
const images = document.querySelector('images');

const title = document.querySelector('title');
title.textContent = 'Great Idea!';

//header
const headerNav = document.querySelector('header nav');

const italicNav = document.querySelectorAll('nav a');
italicNav.className = 'italic';




//footer
const footerNav = document.querySelector('footer nav a');
footerNav.className = 'bold';