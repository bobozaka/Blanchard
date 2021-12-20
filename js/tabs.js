
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-catalog__button').forEach(function(catalogBtn) {
      catalogBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
  
  
        document.querySelectorAll('.catalog-content').forEach(function(catalogContent) {
          catalogContent.classList.remove('catalog-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content-active')
      })
      
    })
})


  
document.querySelectorAll('.section-catalog__button').forEach(function(catalogBtn) {
    catalogBtn.addEventListener('click', function(event) {

    document.querySelectorAll('.section-catalog__button').forEach(function(catalogButton) {
        catalogButton.classList.remove('section-catalog__button-active')
    })
    event.currentTarget.classList.add('section-catalog__button-active')
    })
})



