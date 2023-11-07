class vovóRicas{
    nome: string;
    banco:number;
    idade:number;
    imovel:number;
    constructor(nome: string, banco: number, idade: number, imovel: number) {
        this.nome = nome;
        this.banco = banco;
        this.idade = idade;
        this.imovel = imovel;
    }
}

const vo = new vovóRicas ("Madalena",1000000000,69,20);

class vovomilhonarias extends vovóRicas{
    numerosDeIdosas: number

    constructor(nome: string, banco: number, idade: number, imovel: number){
     super (nome,banco,idade,imovel);   
     
    }

}

vovóNova ()