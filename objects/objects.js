const carro = {
    marca: "Toyota",
    modelo: "Nadia",
    ano: 2015,
    cor: 'Cinza',
    matricula: "CMCL-2025",
    andar: function(){
        return "O carro esta andando";
    },
    informe_se: function(){
        return ("A marca eh: " + this.marca + " a matricula eh " + this.matricula);
    }
}

console.log(carro.ano);
console.log(carro['cor']);

alert(carro.andar());
alert(carro.informe_se());