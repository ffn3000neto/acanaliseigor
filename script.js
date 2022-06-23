class lanches{
    #nome
    constructor(preço,nome,combo, hamburguer, alface, picles, queijo){
    this.preço = preço;}
}
class atributos{
    constructor(batatap,batatam,fruta,colaglue)
}
class combos extends lanches,atributos{
    constructor(mclanchealegre,biglanche,mchen)
}

class mclanchealegre extends lanches{
    constructor(hamburguerv,queijo,)
    hamburguer = true
    alface = false
    queijo = true
    picles = false
}

class biglanche extends lanches{
    constructor(hamburguerv,alface,queijo,molhob,cebola,picles,pão)
    hamburguer = true
    alface = true
    queijo = true
    picles = true
    cebola = true
}
class mchen extends lanches{
    constructor(hamburguerf,alface,queijo,picles)
}
//essa materia eh dificil pra krl






// ignora, so estavamos usando de base

/*//user story em classe
class Veiculo{
    #chassi;
    //parâmetros
    constructor(peso,cor,modelo,placa,chassi){
        this.peso = peso;
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.#chassi = chassi;
        this.pos = [0,0];
        this.velo;
    }
    anda(dir, velo){
        //erros para programadores, não para usuários
        if (dir ==! "x" || dir ==! "y"){
            console.error(`Digite apenas "x" ou "y"`);
            return;
        }
        else if (typeof (dir) ==! "String"){
            console.error(`Digite apenas String em dir`);
            return;
        }
        if (dir === "x"){
            pos[0] += velo;
        }
        else if (dir === "y"){
            pos[1] += velo;
        }
    }
}
class Caminhao extends Veiculo{
    constructor(peso,cor,modelo,placa,chassi,eixos){
        this.eixos = eixos;
        this.peso = peso;
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.#chassi = chassi;
        this.pos = [0,0];
        this.velo;
    }
}
const mercedez = new Caminhao()
//ambos são carros mas instancias diferentes
const fiat = new Carro(4, "#ff0000", "Uno", "abc-2222", 536748576);
const nissan = new Carro(3, "#0000ff", "versa", "bbb-6666", 532747646);
nissan.anda("0", 5)





----------------------------------------------------




class Funcionario{
    //CTPS é a carteira de trabalho
    #ctps;
    constructor(nome, cpf, ctps, rg, ID, idade, nascimento, endereco, onJob){
        this.nome = nome;     
        this.cpf = cpf;
        this.ctps = ctps;
        this.rg = rg;
        this.id = id;
        this.idade = idade;
        this.nascimento = nascimento;
        this.endereco = endereco;
        this.onJob = onJob;
    }
    recebimento(conta, valor){
        if (cpf === conta.cpf) {
            //Essa função envia os valores ao banco do funcionário
            //já chequei os parâmetros de envio e estão certos
            bankApi.addValueBank(conta, valor);
        }
    }
    demissao(status){
        if (status === true || status === false) {
            this.onJob = status;
        }
        else{
            // Fiquei em dúvida do que colocar aqui...
        } 
    }
}
class Gerente extends Funcionario{
    acesso(id){
        if (this.id === id) {
            // Essa função libera a área de administração
            accessMenagerArea()
        }
    }
}



*/
