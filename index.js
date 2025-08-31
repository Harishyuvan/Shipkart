var sidenav = document.querySelector(".side-navbar")
 

function  showNavbar() 
{
     sidenav.style.left="0";
     sidenav.style.display = "inline-block";
    
}

function closeNavbar() 
{
    sidenav.style.left="-60%"
}