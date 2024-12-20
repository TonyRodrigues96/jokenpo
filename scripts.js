
const resultado = document.getElementById('resultado')
const minhaJogada = document.getElementById('minhaJogada')
const jogadaPc = document.getElementById('jogadaPc')    
const pontuacao1 = document.getElementById('ponto1')
const pontuacao2 = document.getElementById('ponto2')

let meuspontos = 0
let pontosPC = 0

//
const escolhaDoUsuario = (minhaescolha) => {
   playTheGame(minhaescolha, escolhaDoPc())}


//
const escolhaDoPc = () => {
    const jogadas = ['pedra', 'papel', 'tesoura']
    const random = Math.floor(Math.random() * 3) 

   return jogadas [random]}

//
const playTheGame = (humano, computador) => {
    minhaJogada.innerHTML = `VOCÊ JOGOU: <br>${humano}`;
    jogadaPc.innerHTML = `O PC JOGOU: <br>${computador}`;
   

    if(humano === computador){
        resultado.innerHTML = 'Empatou'; 
        resultado.style.backgroundColor = 'green'}else if 
        
    (humano === 'pedra' && computador === 'tesoura') {
        resultado.innerHTML = 'Você ganhou'; 
        resultado.style.color = 'white'; 
        resultado.style.backgroundColor = 'blue';
        meuspontos++
        pontuacao1.innerHTML= meuspontos}else if

    (humano === 'tesoura' && computador === 'papel') {
        resultado.innerHTML = 'Você ganhou'; 
        resultado.style.color = 'white';
        resultado.style.backgroundColor = 'blue';
        meuspontos++
        pontuacao1.innerHTML= meuspontos}else if
        
    (humano === 'papel' && computador === 'pedra') {
        resultado.innerHTML = 'Você ganhou'; 
        resultado.style.color = 'white';
        resultado.style.backgroundColor = 'blue';
        meuspontos++
        pontuacao1.innerHTML= meuspontos}else 

                {resultado.innerHTML = 'Você perdeu';
                    resultado.style.color = 'white'; 
                    resultado.style.backgroundColor = 'red'
                    pontosPC++
                    pontuacao2.innerHTML= pontosPC}}