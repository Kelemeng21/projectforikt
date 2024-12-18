const SITE = document.querySelector('.site');
console.log(SITE)
const TRIGGER = document.querySelector('.trigger');
console.log(TRIGGER)

function revealMenu() {
    SITE.classList.toggle('reveal');
   TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
}

TRIGGER.addEventListener('click', revealMenu, false);

console.log(TRIGGER.innerHTML == 'Close menu')

if(TRIGGER.innerHTML == 'Close menu'){
    TRIGGER.innerHTML == 'Open menu';
}else{
    TRIGGER.innerHTML == 'Close menu'
}

