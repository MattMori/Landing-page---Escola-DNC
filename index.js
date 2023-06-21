var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("Samantha")
var bruna = window.document.getElementById("Bruna")

function rolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:35px"
    
}
function rolarParaEsquerda(){
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex margin-top:35px"
}