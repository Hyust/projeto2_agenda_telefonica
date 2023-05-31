const form = document.getElementById("form-agenda");
let linhas = '';
const nomeAgenda = [];
const numeroAgenda = [];



form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela ();
    total();
})


function adicionaLinha (){

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    if(nomeAgenda.includes(inputNomeAgenda.value)){
        alert(`O nome: ${inputNomeAgenda.value}  já encontra-se presente na agenda`);
    }else {

    nomeAgenda.push(inputNomeAgenda.value);
    numeroAgenda.push(parseInt(inputNumeroAgenda.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value}</td>`;
    //linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
    linha += '</tr>';

    linhas += linha;

    }


    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
}


function atualizaTabela () {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 

}


function total (){
    let quantidadeNumeros = nomeAgenda.length
    console.log(quantidadeNumeros);
    document.getElementById('total').innerHTML = quantidadeNumeros;
}


    function mask(o, f) {
        setTimeout(function() {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
        }, 1);
    }
    
    function mphone(v) {
        var r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
        r = r.replace(/^(\d*)/, "($1");
        }
        return r;
    }

