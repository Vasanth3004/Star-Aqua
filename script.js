var sidenav = document.querySelector(".side-navbar")
sidenav.computedStyleMap.display="none"

function showNavbar()
{
  sidenav.style.display="block"
}
function closeNavbar()
{
  sidenav.style.display="none"
}