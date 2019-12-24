const headerLinks = document.querySelectorAll('.link')
const headerSection = document.querySelector('.header_section')
const headerSubProd = document.querySelector('.header_subproduct')
const headerProd = document.querySelectorAll('.header_product-main')
const headerTest = document.querySelector('.header_test')
console.log(headerTest)

for (let i = 0; i<headerLinks.length; i++) {
  headerLinks[i].addEventListener('mouseover', () => {
    headerSection.style.display = 'flex'
    headerTest.addEventListener('mouseleave', () => {
      headerSection.style.display = 'none'
    })
  })
}
