document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-catalog__accordion-artist').forEach(function(catalogArt) {
      catalogArt.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
  
  
        document.querySelectorAll('.section-catalog__left').forEach(function(catalogLeft) {
          catalogLeft.classList.remove('catalog-left-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left-active')
      })
    })
})
  
  
document.querySelectorAll('.section-catalog__accordion-artist').forEach(function(catalogArt) {
    catalogArt.addEventListener('click', function(event) {

    document.querySelectorAll('.section-catalog__accordion-artist').forEach(function(catalogArtist) {
        catalogArtist.classList.remove('section-catalog__accordion-artist-active')
    })
    event.currentTarget.classList.add('section-catalog__accordion-artist-active')
    })
})


