let rightBtn=document.querySelector(".fa-chevron-right");
let leftBtn=document.querySelector(".fa-chevron-left");

rightBtn.addEventListener('click', function(){
    let activeImage=document.querySelector(".active");
    if(activeImage.nextElementSibling!= null){
        activeImage.nextElementSibling.classList.add("active");

    }
    else{
        activeImage.parentNode.firstElementChild.classList.add("active");

    }

    activeImage.classList.remove("active");

})

leftBtn.addEventListener('click', function(){
    let activeImage=document.querySelector(".active");
    if(activeImage.previousElementSibling!= null){
        activeImage.previousElementSibling.classList.add("active");

    }
    else{
        activeImage.parentNode.lastElementChild.classList.add("active");

    }

    activeImage.classList.remove("active");

})