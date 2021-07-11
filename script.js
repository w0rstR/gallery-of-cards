const slides=document.querySelectorAll('.slide')


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