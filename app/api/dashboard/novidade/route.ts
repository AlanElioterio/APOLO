export async function GET() {

    let novidade:Novidade = {
        id: "1",
        titulo: "Kendrick Did Everything He Needed to on 'Euphoria'",
        capa: "https://www.rollingstone.com/wp-content/uploads/2024/04/kendrick-v-drake-euphoria.jpg?w=1581&h=1054&crop=1"
    }

    return Response.json(novidade)
  }