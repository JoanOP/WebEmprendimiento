(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();


window.onscroll=function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.go-top-container')
        .classList.add('show');

    }
    else{
        document.querySelector('.go-top-container')
        .classList.remove('show');

    }
}

document.querySelector('.go-top-container')
.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});