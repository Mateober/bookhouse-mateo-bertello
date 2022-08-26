
//MENU
    let burgerIcon = document.querySelector('#burger-icon');
    let burgerMenu = document.querySelector('#burger-menu');
    let crossIcon = document.querySelector('#cross-icon');

    //  ABRIR MENU
    burgerIcon.onclick = () => {
        burgerMenu.classList.add('active');
        burgerIcon.classList.add('hide');
        crossIcon.classList.add('active');
    };

    //  CERRAR MENU
    crossIcon.onclick = () => {
        burgerMenu.classList.remove('active');
        crossIcon.classList.remove('active');
        burgerIcon.classList.remove('hide');
    };      
  
