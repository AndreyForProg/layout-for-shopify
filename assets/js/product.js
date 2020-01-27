//quantity
const quantBtn = document.querySelectorAll('.product-quant_btn');
const quantInp = document.querySelector('#quantityField');
let quant = 1;

for (let i = 0; i < quantBtn.length; i++) {
  quantBtn[i].addEventListener('click', (e) => {
    if(quantBtn[i].textContent === '+') {
      quant += 1;
      quantInp.value = quant
    } else if (quantBtn[i].textContent === '-') {
      if (quantInp.value <= 1) {
        quantInp.value = 1
      } else {
        quant -= 1;
        quantInp.value = quant
      }
    }
  })
}
// tabs (click)
const reviewsFild = document.querySelector('#reviewsFild');
const reviewsAsk = document.querySelector('#reviewsAsk');
const reviewsTitle = document.querySelector('#reviewsTitle');
const reviewsTabs = document.querySelector('#reviewsTabs');


reviewsTabs.addEventListener('click', () => {
  console.log('mob')
  reviewsTitle.classList.remove('product-tabs_title')
  reviewsTabs.classList.add('product-tabs_title')
  reviewsTitle.classList.add('product-tabs')
  reviewsAsk.style.display = "flex";
  reviewsFild.style.display = "none";

});
reviewsTitle.addEventListener('click', () => {
  reviewsTabs.classList.remove('product-tabs_title')
  reviewsTitle.classList.add('product-tabs_title')
  reviewsTitle.classList.remove('product-tabs')
  reviewsTabs.classList.add('product-tabs')
  reviewsFild.style.display = "flex";
  reviewsAsk.style.display = "none";
});

// mobile tabs
const reviewsTabsM = document.querySelector('#reviewsTabs_mob');
const reviewsTitleM = document.querySelector('#reviewsTitle_mob');

reviewsTabsM.addEventListener('click', (e) => {
  activMobTab(e)
  reviewsTitleM.classList.remove('active_mob_tab')
  reviewsAsk.style.display = "flex";
  reviewsFild.style.display = "none";
})
reviewsTitleM.addEventListener('click', (e) => {
  activMobTab(e)
  reviewsTabsM.classList.remove('active_mob_tab')
  reviewsFild.style.display = "flex";
  reviewsAsk.style.display = "none";
})

function activMobTab(e) {
  e.target.classList.toggle('active_mob_tab')
}
// утв mobile tabs


$('.easyzoom').easyZoom();

// products slider
$('.slider_content.desctop').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4
});

$('.slider_content.mobile').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2
});
