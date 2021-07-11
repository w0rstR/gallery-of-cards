
function slidesPlugin(slideIndex){
    const slides=document.querySelectorAll('.slide')


    slides[slideIndex].classList.add('active')

    slides.forEach(slide=>{
        slide.addEventListener('click',(event)=>{
            clearActiveClasses()
            slide.classList.add('active')
        })
    })

    clearActiveClasses=()=>{
        slides.forEach(slide=>{
            slide.classList.remove('active')
        })
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    slidesPlugin(0)
})