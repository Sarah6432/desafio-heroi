const heroiNome = 'Paladino'

let XP = 10000 

console.log('Ola '+ heroiNome + ' Bem vindo!');

if ( XP < 1000){
    console.log('você é ferro, pode melhorar!')
}
if ( XP >= 1001 && XP <= 2000){
   console.log('você é bronze, pode melhorar!')
}
if (XP >= 2001 && XP <= 5000){
    console.log('você é prata, pode melhorar!')
}
if (XP >= 6001 && XP <= 7000){
    console.log('você é ouro, está no caminho..mas pode melhorar!')
}
if (XP >= 7001 && XP <=8000){
    console.log('você é platina, está no caminho..Parabéns!')
}
if (XP >= 8001 && XP <=9000){
    console.log('você é ascendente, está no caminho..Parabéns!')
}
if (XP >= 9001 && XP <10000){
    console.log('você é IMORTAL Parabéns!')
}
if (XP >=10000){
    console.log('você é RADIANTE o mestre da jornada!')
}

