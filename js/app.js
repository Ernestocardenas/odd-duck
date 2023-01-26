'use strict';

let totalVotes = 25
let allProducts = []

function Product(name, photoExt = 'jpg') {
  this.name = name;
  this.photo = 'img/$(name).$(photoExt)';
  this.view = 0
  this.votes= 0

  allProducts.push(this);
}

Product.allProducts = []

function getRandomNumber() {
  return Math.floor(Math.random() * allProducts.length)
}

let testInt1 = 0;
let testInt2 = 0;
let testInt3 = 0;

function randomProduct() {
  let imgOneIndex = getRandomNumber();
  let imgTwoIndex = getRandomNumber();
  let imgThreeIndex = getRandomNumber();

  while ((imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex || imgOneIndex === testInt1 || imgOneIndex === testInt2 || imgOneIndex === testInt3 || imgTwoIndex === testInt1 || imgTwoIndex === testInt2 || imgTwoIndex === testInt3 || imgThreeIndex === testInt1 || imgThreeIndex === testInt2 || imgThreeIndex === testInt3));
    imgOneIndex = getRandomNumber();
    imgTwoIndex = getRandomNumber();
    imgThreeIndex = getRandomNumber();


imgOne.alt = allProducts[imgOneIndex].name;
  imgOne.src = allProducts[imgOneIndex].photo;
  allProducts[imgOneIndex].views++;
  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  allProducts[imgTwoIndex].views++;
  imgThree.alt = allProducts[imgThreeIndex].name;
  imgThree.src = allProducts[imgThreeIndex].photo;
  allProducts[imgOneIndex].views++;
  testInt1 = imgOneIndex;
  testInt2 = imgTwoIndex;
  testInt3 = imgThreeIndex;
}

function handleClick(event) {
  if (event.target === imgContainer) {
    alert('Please click on an image');
  }
  totalVotes--;
  let imgClicked = event.target.alt;
  for (let i = 0; i < allProducts.length; i++) {
    if (imgClicked === allProducts[i].name) {
      allProducts[i].votes++;
      break;
    }
  }
  if (totalVotes === 0) {
    renderChart();
    imgContainer.removeEventListener('click', handleClick);

    let stringedProducts = JSON.stringify(allProducts);
    
    console.log(stringedProducts); 'yah it works'
  
    localStorage.setItem('myThings', stringedProducts);

  } else {
    renderProducts();
  }
}

let gotProducts = localStorage.getItem('myProducts');

let parsedProducts = JSON.parse(gotProducts);
console.log(parsedProducts);

if(gotProducts){
  console.log('parsed products', parsedProducts);
  allThings = parsedThings;

  for (let i=0; i < parsedThings.length; i++){
    if(parsedProducts[i].name === 'sweep'){
      let reconProduct = new Thing(parsedProducts[i].name, 'png');
      reconProduct.views = parsedProducts[i].views;
      reconProduct.votes = parsedProducts[i].votes;
    } else {
      let reconProduct = new Thing(parsedProducts[i].name);
      reconProduct.views = parsedProducts[i].views;
      reconProduct.votes = parsedProducts[i].votes;
    }
  }
} else {
  new Product('bag');
  new Product('banana');
  new Product('bathroom');
  new Product('boots');
  new Product('breakfast');
  new Product('bubblegum');
  new Product('chair');
  new Product('cthulhu');
  new Product('dog-duck');
  new Product('dragon');
  new Product('pen');
  new Product('pet-sweep');
  new Product('scissors');
  new Product('shark');
  new Product('sweep', 'png');
  new Product('tauntaun');
  new Product('unicorn');
  new Product('water-can');
  new Product('wine-glass');
}
