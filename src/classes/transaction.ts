export class transaction {
    valor:number
    id1:string
    id2:string
    date = new Date
    constructor(
        valorFornecido: number,
        idFornecido: string,
      ) {
        this.valor = valorFornecido;
        this.id1 = idFornecido;           
        this.id2 = idFornecido;

      }
    }

console.log(transaction)