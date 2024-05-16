let screen = document.querySelector('.carousel-window');
let stripe = document.querySelector('.slides');
let tile = document.querySelector('.item');

// elements necessary to determine the slider behavior
let fullWidth = stripe.offsetWidth;
let screenWidth = screen.offsetWidth;
let tileWidth = tile.offsetWidth;
let scrollWidth = tileWidth;

// determining the maximum number of scrolls before returning to the beginning of the stripe
let currentItem = 0;
let stripeWidth = stripe.offsetWidth;
let tilesNumber = Math.round(stripeWidth / tileWidth);
let maxScrollItem = tilesNumber - Math.round(screenWidth / tileWidth) + 1;

// next and previous behavior
function next() {
  currentItem++;
  currentItem > maxScrollItem ? currentItem = 0 : '';
  screen.scrollTo({ top: 0, left: scrollWidth * currentItem, behavior: 'smooth' })
}

function previous() {
  currentItem--;
  screen.scrollTo({ top: 0, left: scrollWidth * currentItem, behavior: 'smooth' })
}

//item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item 2 item

let screen2 = document.querySelector('.carousel-window2');
let stripe2 = document.querySelector('.slides2');
let tile2 = document.querySelector('.item2');

// elements necessary to determine the slider behavior
let fullWidth2 = stripe2.offsetWidth;
let screenWidth2 = screen2.offsetWidth;
let tileWidth2 = tile2.offsetWidth;
let scrollWidth2 = tileWidth2;

// determining the maximum number of scrolls before returning to the beginning of the stripe
let currentItem2 = 0;
let stripeWidth2 = stripe2.offsetWidth;
let tilesNumber2 = Math.round(stripeWidth2 / tileWidth2);
let maxScrollItem2 = tilesNumber2 - Math.round(screenWidth2 / tileWidth2) + 1;

// next and previous behavior
function next2() {
  currentItem2++;
  currentItem2 > maxScrollItem2 ? currentItem2 = 0 : '';
  screen2.scrollTo({ top: 0, left: scrollWidth2 * currentItem2, behavior: 'smooth' })
}

function previous2() {
  currentItem2--;
  screen2.scrollTo({ top: 0, left: scrollWidth2 * currentItem2, behavior: 'smooth' })
}

