function iniciarEstadosCidades (cidadesEstados){
    const estadoSelect = document.getElementById ('estado');
    const cidadeSelect = document.getElementById ('cidade');

    estadoSelect.onchange = function(){
    cidadeSelect.innerHTML ="";
    const estadoSelecionado = estadoSelect.value;
    const estado = cidadesEstados.find(estado => estado.sigla === estadoSelecionado);
console.log (estadoSelect);

    estado.cidades.map(cidade => {
    const opcao = document.createElement('option');
    opcao.value = cidade;
    opcao.text = cidade;
    cidadeSelect.appendChild(opcao);
        })
    }
};