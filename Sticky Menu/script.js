window.addEventListener('scroll', function(){
    let navbar=document.getElementById('nav-bar')
    if(window.pageYOffset >=254){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})