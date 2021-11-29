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
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

//header nav
const links = document.querySelectorAll('nav a');
const navLinks = Array.from(links);

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];



//cta
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

//main content
const featuresH4 = document.querySelector('');
featuresH4.textContent = siteContent['main-content']['features-h4'];

const featuresContent = document.querySelector('');
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('');
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutContent = document.querySelector('');
aboutContent.textContent = siteContent['main-content']['about-content'];

const servicesH4 = document.querySelector('');
servicesH4.textContent = siteContent['main-content']['services-h4'];

const servicesContent = document.querySelector('');
servicesContent.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('');
productH4.textContent = siteContent['main-content']['product-h4'];

const productContent = document.querySelector('');
productContent.textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector('');
visionH4.textContent = siteContent['main-content']['vision-h4'];

const visionContent = document.querySelector('');
visionContent.textContent = siteContent['main-content']['vision-content'];
//contact
const contactH4 = document.querySelector('');

const address = document.querySelector('');

const phone = document.querySelector('');

const email = document.querySelector('');

//footer
const copyright = document.querySelector('');

const footerNav = document.querySelector('footer nav a');
footerNav.className = 'bold';

//images
const logoImg = document.querySelector('');

const ctaImg = document.querySelector('');

const accentImg = document.querySelector('');

//general 
const italicNav = document.querySelectorAll('nav a');
italicNav.className = 'italic';