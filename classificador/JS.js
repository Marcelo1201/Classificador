function botaoclick(){
    var botaoclicado = document.getElementById('avaliar')
    botaoclicado.style.background = '#942807'
}

function entrar(){
    var entrou = document.getElementById('idenviar')
    entrou.style.background = 'var(--cor-principal)'
    entrou.style.color = 'var(--cor-vermelho-site)'
}

function sair(){
    var saiu = document.getElementById('idenviar')
    saiu.style.background = 'var(--cor-vermelho-site)'
    saiu.style.color = 'var(--cor-principal)'
}

function clicar(){
    var clicou = document.getElementById('conteudo-avalie')
    var clicouum = document.getElementById('conteudo')
    clicou.style.display = 'block'
    clicouum.style.display = 'none'
}
