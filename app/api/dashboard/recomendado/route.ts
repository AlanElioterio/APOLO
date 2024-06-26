export async function GET() {

  let recomendados:Album[] = [
    {
      id: "1",
      titulo: "Piece of Mind",
      artista: "Iron Maiden",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvNh16OgmK_8ERroHWChmvOTrUFR6gMj3dg&s"
    },
    {
      id: "5",
      titulo: "Euphoria",
      artista: "Kendrick Lamar",
      capa: "https://media.pitchfork.com/photos/6631526fb6e691a3ef87849b/1:1/w_450%2Cc_limit/%25E2%2580%259Ceuphoria%25E2%2580%259D.jpeg"
    },
    {
      id: "2",
      titulo: "All Eyez On Me",
      artista: "2Pac",
      capa: "https://s2-gshow.glbimg.com/LH1MPWXWv816MMJU6JjHcbBoCLU=/0x0:1000x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/g/j/UkDszpTLuTeqIp6TtA2A/all-eyez-on-me.jpeg"
    },
    {
      id: "3",
      titulo: "Appetite for Destruction",
      artista: "Guns N' Roses",
      capa: "https://cdns-images.dzcdn.net/images/cover/75c0f08e23dca1c8e25b298ee67a41d1/1900x1900-000000-80-0-0.jpg"
    },
    {
      id: "4",
      titulo: "The Dark Side of the Moon",
      artista: "Pink Floyd",
      capa: "https://upload.wikimedia.org/wikipedia/pt/3/3b/Dark_Side_of_the_Moon.png"
    },
    
    {
      id: "6",
      titulo: "Rumours",
      artista: "Fleetwood Mac",
      capa: "https://m.media-amazon.com/images/I/71HWqbh0BLL._UF1000,1000_QL80_.jpg"
    },
    {
      id: "8",
      titulo: "Jazz",
      artista: "Queen",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF0kvEUAwnhBBVGQyAGZVNQmu_VUAHAREaw&s"
    },
    {
      id: "9",
      titulo: "Charlie Brown Jr.",
      artista: "Charlie Brown Jr.",
      capa: "https://s.glbimg.com/jo/g1/f/original/blog/36dace16-0220-4b4a-b336-0f1d52304ed6_charliebrown20anoscapa.jpg"
    },
  ]
  return Response.json(recomendados)
}