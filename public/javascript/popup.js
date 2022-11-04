let popup_cadastro = document.querySelector('.popup_cadastro');
let popupLogin = document.querySelector('.popup_login');


function abrirCadastro(){
    popup_cadastro.classList.add('open_popup')

    closePopup(popup_cadastro)
}

function abrirLogin(){
    popup_cadastro.classList.remove('open_popup')
    popupLogin.classList.add('open_popup')

    closePopup(popupLogin)
}

function closePopup(ListenerPopup){
    ListenerPopup.addEventListener("click", function(close){

       if(close.target.classList == 'popup'){
        ListenerPopup.classList.remove('open_popup')
        }

    })
};