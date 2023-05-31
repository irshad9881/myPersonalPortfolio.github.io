//........................................ Scticky Header............... ............................//
window.addEventListener('scroll',function() //window ko scrll ka rahe to uper event laga diya scrll
{                                           //The Window pageYOffset property is used for returning the pixels of the current document which  scrolled vertically. 
    let navbar=this.document.getElementById('menu-bar');
    if(window.pageYOffset>=153)
    {
     navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})