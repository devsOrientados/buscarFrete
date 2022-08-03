let open_popup = document.querySelector('.open-popup');
let popup = document.querySelector('.popup')

function abrirCadstro(){
	let popupCadastro = document.querySelector('.popup_cadastro');
    popupCadastro.classList.add('open_popup')
}

function abrirLogin(){
	let popupLogin = document.querySelector('.popup_login');
    popupLogin.classList.add('popup')
}

popup.addEventListener("click", function(){
    let popupCadastro = document.querySelector('.popup_cadastro');
    popupCadastro.classList.remove('open_popup')
})



