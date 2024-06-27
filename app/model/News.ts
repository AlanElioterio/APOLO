class News {
    titulo: string = "Indefinido";
    subtitulo: string = "Indefinido";
    newsId:number = 0;
    texto!: string;
    capa: string = "https://m.media-amazon.com/images/I/71cc++bXDiL._UF1000,1000_QL80_.jpg";
    autor:string = "Indefinido";
    data!:Date;
    idMusicasRelacionadas:number[] = [];
    idAlbunsRelacionados:number[] = [];
}