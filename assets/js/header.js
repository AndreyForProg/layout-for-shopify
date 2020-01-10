const headerLinks = document.querySelectorAll('.link')
const headerSection = document.querySelector('.header_section')
const headerSubProd = document.querySelector('.header_subproduct')
const headerProd = document.querySelectorAll('.header_product-main')
const headerTest = document.querySelector('.header_test')
const headerSectionProduct = document.querySelector('.header_section-product')

for (let i = 0; i<headerLinks.length; i++) {
  headerLinks[i].addEventListener('mouseover', (e) => {
    let interval = 0;
    let timer = setInterval(() => {
      if (interval == 2) {
        headerSection.style.display = 'flex'
        clearInterval(timer)
      }
      interval += 1
    }, 100)
    headerTest.addEventListener('mouseleave', () => {
      headerSection.style.display = 'none'
      clearInterval(timer)
    })
  })
}

for (let i = 0; i<headerProd.length; i++) {
  headerProd[i].addEventListener('mouseover', () => {
    headerSubProd.style.display = 'block'
    headerSectionProduct.addEventListener('mouseleave', () => {
      headerSubProd.style.display = 'none'
    })
  })
}

// for mobile
const burgerBtn = document.querySelector('#menu__toggle')
const burgerMenu = document.querySelector('.header-mobile_link')

burgerBtn.addEventListener('click', () => {
  if (burgerMenu.style.display === 'flex') {
    burgerMenu.style.display = 'none'
  } else {
    burgerMenu.style.display = 'flex'
  }
})