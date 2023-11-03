let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// Automatic slideshow
let autoSlideInterval; // Variable to store the interval ID

function startAutoSlide() {
  autoSlideInterval = setInterval(function() {
    plusSlides(1); // Move to the next slide every few seconds
  }, 3000); // Change slide every 3 seconds (adjust the duration as needed)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//  Start the automatic slideshow when the page loads
startAutoSlide();
// section2
const items = [
  {
    imageSrc: "images/diwali-store.webp",
    linkURL: "your-link-url",
    altText: "Diwali Store",
    text: "Diwali Store",
  },
  {
    imageSrc: "images/festive-store.webp",
    linkURL: "your-link-url",
    altText: "Festive Decor",
    text: "Festive Decor",
  },
  {
    imageSrc: "images/pooja-accessories.webp",
    linkURL: "your-link-url",
    altText: "Pooja Accessories",
    text: "Accessories",
  },
  {
    imageSrc: "images/light-diya.webp",
    linkURL: "your-link-url",
    altText: "T-Light, Diya and Candles",
    text: "T-Light, Diya",
  },
  {
    imageSrc: "images/festive-lighting.avif",
    linkURL: "your-link-url",
    altText: "Festive Lighting",
    text: "Festive Lighting",
  },
  {
    imageSrc: "images/diwali-gifts.webp",
    linkURL: "your-link-url",
    altText: "Diwali Gifts",
    text: "Diwali Gifts",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid-container");

  items.forEach((item) => {
    const column = document.createElement("div");
    column.classList.add("column");

    const link = document.createElement("a");
    link.href = item.linkURL;

    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = item.altText;
    image.classList.add("img-round");

    link.appendChild(image);

    const text = document.createElement("a");
    text.href = "#";
    text.classList.add("image-text");
    text.textContent = item.text;

    column.appendChild(link);
    column.appendChild(text);

    gridContainer.appendChild(column);
  });
});


// section4
const categories = [
  {
    link: "your-link-url",
    imageSrc: "images/category1.webp",
    alt: "Diwali Store",
    text: "coffee Mugs",
  },
  {
    link: "your-link-url",
    imageSrc: "images/category2.webp",
    alt: "Festive Decor",
    text: "Hanging Platers",
  },
  {
    link: "your-link-url",
    imageSrc: "images/category3.webp",
    alt: "Pooja Accessories",
    text: "Oils Bottles",
  },
  {
    link: "your-link-url",
    imageSrc: "images/category4.webp",
    alt: "Light, Diya and Candle",
    text: "Wall Hangings",
  },
  {
    link: "your-link-url",
    imageSrc: "images/category5.avif",
    alt: "Festive Lighting",
    text: "Showpieces",
  },
  {
    link: "your-link-url",
    imageSrc: "images/category6.webp",
    alt: "Diwali Gifts",
    text: "Spice Boxes",
  },
];

// Get the container element
const container = document.getElementById("category-row");

// Loop through the categories array and generate the HTML structure
categories.forEach((category) => {
  const column = document.createElement("div");
  column.className = "column";

  const imageLink = document.createElement("a");
  imageLink.href = category.link;

  const image = document.createElement("img");
  image.src = category.imageSrc;
  image.className = "img-round";
  image.alt = category.alt;

  imageLink.appendChild(image);

  const textLink = document.createElement("a");
  textLink.href = "#";
  textLink.className = "image-text";
  textLink.textContent = category.text;

  column.appendChild(imageLink);
  column.appendChild(textLink);

  container.appendChild(column);
});


// section7
// Define an array of data for your items
const itemsData = [
    { link: 'your-link-url', imageSrc: 'images/pooja-accessories.webp', altText: 'brass', text: 'Brass' },
    { link: 'your-link-url', imageSrc: 'images/category3.webp', altText: 'hanging platers', text: 'Hanging Platers' },
    { link: 'your-link-url', imageSrc: 'images/category4.webp', altText: 'Pooja Accessories', text: 'Oils Bottles' },
    { link: 'your-link-url', imageSrc: 'images/category6.webp', altText: 'wall hanging', text: 'Wall Hangings' },
    { link: 'your-link-url', imageSrc: 'images/iron.webp', altText: 'iron', text: 'Showpieces' },
    { link: 'your-link-url', imageSrc: 'images/steel.webp', altText: 'steel', text: 'Spice Boxes' }
];

// Get the parent container element
const containerElement = document.querySelector('#material');

// Loop through the itemsData and create elements dynamically
itemsData.forEach((itemData, index) => {
    const columnElement = document.createElement('div');
    columnElement.classList.add('column');

    const imageLinkElement = document.createElement('a');
    imageLinkElement.href = itemData.link;

    const imageElement = document.createElement('img');
    imageElement.src = itemData.imageSrc;
    imageElement.alt = itemData.altText;
    imageElement.classList.add('img-round');
    imageLinkElement.appendChild(imageElement);

    const textLinkElement = document.createElement('a');
    textLinkElement.href = '#';
    textLinkElement.classList.add('image-text');
    textLinkElement.textContent = itemData.text;

    columnElement.appendChild(imageLinkElement);
    columnElement.appendChild(textLinkElement);

    containerElement.appendChild(columnElement);
});
// readmore button
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
// 
document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach((container) => {
        container.addEventListener("click", function () {
            if (container.classList.contains("clicked")) {
                container.classList.remove("clicked");
            } else {
                // Remove "clicked" class from all other containers
                imageContainers.forEach((otherContainer) => {
                    otherContainer.classList.remove("clicked");
                });

                container.classList.add("clicked");
            }
        });
    });
});

