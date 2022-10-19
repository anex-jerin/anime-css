const observer = new IntersectionObserver((entries)=>{
    entries.forEach((enrty)=> {
        if(enrty.isIntersecting){
            enrty.target.classList.add('show')
        }else{
            enrty.target.classList.remove('show')
        }
    })
})


const hidden = document.querySelectorAll('.hidden') 
hidden.forEach((el)=>observer.observe(el))


//regex to match all numbers
