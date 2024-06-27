export async function GET() {

    let album:AlbumRecomendado = {
        id: "1",
        titulo: "After Hours",
        artista: "The Weeknd",
        capa: "https://m.media-amazon.com/images/I/813XseYNw1L._UF1000,1000_QL80_.jpg"
    }

    return Response.json(album)
  }