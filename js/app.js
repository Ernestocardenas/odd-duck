'use strict';

// delcaring a products array
let productsArr = [];
// console.log(productsArr);

// creating a queue (for later use)
let uniqueProducts = [];

// setting a counter to keep track of number of clicks
let clickCounter = 0;

// on page load: loading users click counter from LS with an if statement. if the users clicks are less than or equal to 24, the clicks from LS will be loaded and the user can continue. If clicks exceed 24, this if statement is ignored and users click counter starts at 0.
if (localStorage.getItem('userClicks') <= 24) {
  let loadedClickCounter = localStorage.getItem('userClicks');
  clickCounter = JSON.parse(loadedClickCounter);
} else {
  localStorage.removeItem('products');
}

let results = document.getElementById('result');

// Assigning HTML img elements to 3 separate image variables, will be manipulated to add src and alt attributes
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child');

// creating a contructor named Products with various properties
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.viewed = 0;
  this.clicked = 0;
  productsArr.push(this);
}

// creating new products with the Products constructor
let product1 = new Product ('R2D2 Bags', './img/bag.jpg');
let product2 = new Product ('Banana Cutter', './img/banana.jpg');
let product3 = new Product ('Tablet TP', './img/bathroom.jpg');
let product4 = new Product ('Breakfast Machine', './img/breakfast.jpg');
let product5 = new Product ('Meatball BG', './img/bubblegum.jpg');
let product6 = new Product ('Uncomfortable Chair', './img/chair.jpg');
let product7 = new Product ('Cthulhu', './img/cthulhu.jpg');
let product8 = new Product ('Dog Duck', './img/dog-duck.jpg');
let product9 = new Product ('Dragon Meat', './img/dragon.jpg');
let product10 = new Product ('Weird Pens', './img/pen.jpg');
let product11 = new Product ('Pet Sweep', './img/pet-sweep.jpg');
let product12 = new Product ('Pizza Cutter', './img/scissors.jpg');
let product13 = new Product ('Shark Bed', './img/shark.jpg');
let product14 = new Product ('Baby Sweep', './img/sweep.png');
let product15 = new Product ('Tauntaun', './img/tauntaun.jpg');
let product16 = new Product ('Unicorn Meat', './img/unicorn.jpg');
let product17 = new Product ('Water Can', './img/water-can.jpg');
let product18 = new Product ('Wine Glass', './img/wine-glass.jpg');
let product19 = new Product ('Useless Boots', './img/boots.jpg');


if (localStorage.getItem('products')) {
  let loadedProductsArr = localStorage.getItem('products');
  // console.log(loadedProductsArr);
  productsArr = JSON.parse(loadedProductsArr);
  // console.log(productsArr);
}
// console.log(productsArr);

// creating a function to generate a random index from the productsArr
function generateRandomProdIndex () {
  return Math.floor(Math.random() * productsArr.length);
}

// creating a function that renders 3 randomly generated product images

function renderProductImages () {

  while (uniqueProducts.length < 6 ) {

    let randomIndex = generateRandomProdIndex();
    // console.log(`The random product is: ${productsArr[randomIndex].name}`);

    if(!uniqueProducts.includes(productsArr[randomIndex])) {
      uniqueProducts.push(productsArr[randomIndex]);
      // console.log('the unique products are: ', uniqueProducts);
    }
  }

  let firstImageObject = uniqueProducts.shift();
  let secondImageObject = uniqueProducts.shift();
  let thirdImageObject = uniqueProducts.shift();

  image1.src = firstImageObject.src;
  image1.alt = firstImageObject.name;
  image1.title = firstImageObject.name;

  image2.src = secondImageObject.src;
  image2.alt = secondImageObject.name;
  image2.title = secondImageObject.name;

  image3.src = thirdImageObject.src;
  image3.alt = thirdImageObject.name;
  image3.title = thirdImageObject.name;

  firstImageObject.viewed++;
  secondImageObject.viewed++;
  thirdImageObject.viewed++;
}

// creating an event handler that records how many times each image is clicked. afterwards, increments the amount of times the image has been clicked and re-renders each image. Finally, an if statement to keep track of the click counter, once the click counter exceeds 25 clicks, the event listeners for each image is removed.
function handleClickedProduct(event) {
  clickCounter++;
  let selection = event.target;

  for (let i = 0; i < productsArr.length; i++) {
    if (selection.alt.includes(productsArr[i].name)) {
      productsArr[i].clicked++;
      // console.log(productsArr[i]);
    }
  }

  // Saving productArr to localStorage after every click

  // declaring new variable and assigning it a stringified productsArr and console logging for testing
  let productsArrConvertedForLS = JSON.stringify(productsArr);
  let clickCounterConvertedForLS = JSON.stringify(clickCounter);


  // setting productsArr into local storage with the name products as the key and console logging for testing
  localStorage.setItem('products', productsArrConvertedForLS);
  localStorage.setItem('userClicks', clickCounterConvertedForLS);
 
  renderProductImages();

  if (clickCounter > 24) {
    image1.removeEventListener('click', handleClickedProduct);
    image2.removeEventListener('click', handleClickedProduct);
    image3.removeEventListener('click', handleClickedProduct);
  }
}

// Event handler for button to view results of how many times each image has been viewed and clicked.
function handleViewResults() {
  let prodUL = document.querySelector('ul');

  for (let i = 0; i < productsArr.length; i++ ) {
    let prodLI = document.createElement('li');
    prodLI.innerText = `${productsArr[i].name} was viewed ${productsArr[i].viewed} times and was clicked on ${productsArr[i].clicked} times!`;
    prodUL.appendChild(prodLI);
  }

  // creating empty arrays for names, views and clicks
  let names = [];
  let views = [];
  let clicks = [];

  // for loop to iterate through each item in the productsArr array, each iteration pushes the current indices name, views, and clicks into their corresponding array.
  for (let i = 0; i < productsArr.length; i++) {
    names.push(productsArr[i].name);
    views.push(productsArr[i].viewed);
    clicks.push(productsArr[i].clicked);
  }

  // Chart sourced from "https://www.chartjs.org/docs/latest/getting-started/"
  // This chart will render the results of each images views and clicks in a bar graph
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Views',
        data: views,
        borderWidth: 1
      },
      {
        label: 'Clicks',
        data: clicks,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  if (clickCounter > 24) {
    results.removeEventListener('click', handleViewResults);
  }
}

// image render (on page load)
renderProductImages();

// event listeners
image1.addEventListener('click', handleClickedProduct);
image2.addEventListener('click', handleClickedProduct);
image3.addEventListener('click', handleClickedProduct);
results.addEventListener('click', handleViewResults);
