let minicartDrawer = document.querySelector('.minicart_drawer')
let main = document.querySelector('main')

function openMinicart(){

    minicartDrawer.classList.toggle('open_popup')

   main.addEventListener("mouseover", function(){

    setTimeout(() => {
        minicartDrawer.classList.remove('open_popup')
    }, 1000);

})
};