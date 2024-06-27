class Album {
    id:number;
    titulo:string;
    capa:string;
    dataDeLancamento:string;
    artistasPrincipais:string[];
    artistasSecundarios:string[] | undefined;
    duracao:number;
    generos:string[];
    faixas:Faixa[];

    constructor() {
        this.id = 0;
        this.titulo = "Indefinido";
        this.capa = "https://m.media-amazon.com/images/I/71cc++bXDiL._UF1000,1000_QL80_.jpg";
        this.dataDeLancamento = "Indefinido";
        this.artistasPrincipais = [];
        this.duracao = 0;
        this.generos = [];
        this.faixas = [];
    }
}