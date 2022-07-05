let dados_img = document.querySelector('.dados_img');
let selecionar_img = document.querySelector('.selecionar_img');


dados_img.addEventListener('click', () => {
 selecionar_img.click()
})

function displayImagem(){
    dados_img.innerHTML = `<img class="img_dados_inputs" src=${URL.createObjectURL(selecionar_img.files[0])} />`
}