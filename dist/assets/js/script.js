// js enabled

document.documentElement.classList.add( 'js' );

// hamburger

const menuBtn = document.querySelector( '#nav-btn' );
const menu = document.querySelector( '#nav-menu' );

function openMenu() {
  menuBtn.setAttribute( 'aria-expanded', 'true' );
  menu.classList.add( 'open' );
}

function closeMenu() {
  menuBtn.setAttribute( 'aria-expanded', 'false' );
  menu.classList.remove( 'open' )
}

menuBtn.addEventListener( 'click', () => {
  const expanded = menuBtn.getAttribute( 'aria-expanded' ) === 'true' ? true : false;

  console.log(expanded);

  if ( expanded ) 
    closeMenu();
  else 
    openMenu();
} )