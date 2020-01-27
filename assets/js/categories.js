document.addEventListener("DOMContentLoaded", function() {

  //filters
  const categoryFilters = document.querySelectorAll('.categoryF')
  const categoryFTitle = document.querySelectorAll('.categoryF h3')

  for (let i = 0; i < categoryFilters.length; i++) {
    if (categoryFilters[0]) {
      categoryFilters[0].style.border = 'none'
    }
  }

  const filterItems = document.querySelectorAll('.filter-item')
  const checboxColor = document.querySelectorAll('.check-box')
  const checkBoxHidden = document.querySelectorAll('.check-box-hidden')
  const selectedFilters = document.querySelector('.selected-filters')
  const arreyFilters = [];

  //change input and title filter. add selected filters
  for (let i = 0; i < checboxColor.length; i++) {
    checkBoxHidden[i].addEventListener ('click', (e) => {
      if (e.target.checked) {
        checboxColor[i].style.background = '#e89ba1'
        filterItems[i].style.color = '#e89ba1'
        arreyFilters.push(i)
      } else {
        checboxColor[i].style.background = ''
        filterItems[i].style.color = '#333'
        arreyFilters.shift()
      }
      console.log(arreyFilters.length)
      if (arreyFilters.length > 0) {
        selectedFilters.style.display = 'flex'
      } else {
        selectedFilters.style.display = 'none'
      }
    })
  }

  //show quick view good
  const goodImg = document.querySelectorAll('.good-img')
  const showQuickView = document.querySelectorAll('.quick')
  console.log(goodImg, showQuickView)

  for (let i = 0; i < goodImg.length; i++) {
    goodImg[i].addEventListener('mouseover', () => {
      console.log(showQuickView[0])
      showQuickView[i].style.display = 'block'
    })
    goodImg[i].addEventListener('mouseout', () => {
      showQuickView[i].style.display = 'none'
    })
  }

  //btn go top
  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }
})

// for mobile
const mobileFilterBtn = document.querySelector('.mobile_filter')
const mobileFilters = document.querySelector('.filters')
const mobileBtnBack = document.querySelector('.mobile_Btn')

mobileFilterBtn.addEventListener('click', () => {
  mobileFilterBtn.classList.toggle('activeFilterMobile')
  mobileFilters.classList.toggle('filters_left')
})

mobileBtnBack.addEventListener('click', () => {
  mobileFilterBtn.classList.toggle('activeFilterMobile')
  mobileFilters.classList.toggle('filters_left')
})