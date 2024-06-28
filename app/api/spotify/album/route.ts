export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const albumId:string | null = searchParams.get('albumId')

    const albums = [
        {
            id: 1,
            titulo: "After Hours",
            capa: "https://m.media-amazon.com/images/I/813XseYNw1L._UF1000,1000_QL80_.jpg",
            dataDeLancamento: new Date(2019, 8, 28),
            artistasPrincipais: ["The Weeknd"],
            nota:4.3.toFixed(1),
            artistasSecundarios: undefined,
            duracao: "1h20min",
            generos: ['Pop', 'Eletrônica'],
            faixas: [{
                titulo: "Alone Again",
                numero: 1,
                artistasPrincipais: ["The Weeknd"],
                artistasSecundarios: [],
                duracao: "4:20",
                nota: 4.0
            },
            {
                titulo: "Alone Again",
                numero: 2,
                artistasPrincipais: ["The Weeknd"],
                artistasSecundarios: [],
                duracao: "4:20",
                nota: 4.0
            },
            {
                titulo: "Alone Again",
                numero: 3,
                artistasPrincipais: ["The Weeknd"],
                artistasSecundarios: [],
                duracao: "4:20",
                nota: 4.0
            },
            {
                titulo: "Alone Again",
                numero: 4,
                artistasPrincipais: ["The Weeknd"],
                artistasSecundarios: [],
                duracao: "4:20",
                nota: 4.0
            },
            {
                titulo: "Alone Again",
                numero: 5,
                artistasPrincipais: ["The Weeknd"],
                artistasSecundarios: [],
                duracao: "4:20",
                nota: 4.0
            },
            ],
        }
    ]

    if (albumId !== null){
        const album = albums.find((album)=> album.id == Number(albumId?.toString()));

        if (album !== undefined) return Response.json(album);
    }

    return Response.json({});
  }
