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

//header nav
const links = document.querySelectorAll('nav a');
const navLinks = Array.from(links);

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

navLinks.forEach(n => n.className = 'italic');

//cta
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

//main content
const mainContentTitles = document.querySelectorAll('.text-content h4');
const mainContentTitlesArray = Array.from(mainContentTitles);

const mainContentBody = document.querySelectorAll('.text-content p');
const mainContentBodyArray = Array.from(mainContentBody);

mainContentTitlesArray[0].textContent = siteContent['main-content']['features-h4'];
mainContentTitlesArray[1].textContent = siteContent['main-content']['about-h4'];
mainContentTitlesArray[2].textContent = siteContent['main-content']['services-h4'];
mainContentTitlesArray[3].textContent = siteContent['main-content']['product-h4'];
mainContentTitlesArray[4].textContent = siteContent['main-content']['vision-h4'];

mainContentBodyArray[0].textContent = siteContent['main-content']['features-content'];
mainContentBodyArray[1].textContent = siteContent['main-content']['about-content'];
mainContentBodyArray[2].textContent = siteContent['main-content']['services-content'];
mainContentBodyArray[3].textContent = siteContent['main-content']['product-content'];
mainContentBodyArray[4].textContent = siteContent['main-content']['vision-content']

//contact
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

const contactNav = document.querySelectorAll('.contact p');
const contactNavArray = Array.from(contactNav);

contactNavArray[0].textContent = siteContent['contact']['address'];
contactNavArray[1].textContent = siteContent['contact']['phone'];
contactNavArray[2].textContent = siteContent['contact']['email']


//footer
const footerText = document.querySelector('footer a');
footerText.textContent = siteContent['footer']['copyright'];
footerText.className = 'bold';

//images
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent['images']['logo-img'];

const ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent['images']['cta-img'];

const accentImg = document.querySelector('.middle-img');
accentImg.src = siteContent['images']['accent-img'];


