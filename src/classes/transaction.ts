export class transaction {
    valor: number
    id1: string
    id2: string
    date = new Date
    constructor(
        valorFornecido: number,
        id1Fornecido: string,
        id2Fornecido: string,

      ) {
        this.valor = valorFornecido;
        this.id1 = id1Fornecido;           
        this.id2 = id2Fornecido;

      }
    }
