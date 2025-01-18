import prisma from '@/lib/prisma';
export async function GET(request) {
    try {
      const url = new URL(request.url);
      const titleSearchKey = url.searchParams.get('titleSearchKey');
  
      let movies;
  
      if (titleSearchKey) {
        // Busca por título, ignorando maiúsculas e minúsculas
        movies = await prisma.movie.findMany({
          where: {
            title: {
              contains: titleSearchKey.toLowerCase(), 
            },
          },
        });
      } else {
        // Retorna todos os filmes se nenhum título for informado
        movies = await prisma.movie.findMany();
      }
      console.log("Filmes retornados:", movies); 
      return new Response(JSON.stringify(movies), { status: 200 });
    } catch (error) {
      console.error('Erro ao consultar o banco de dados:', error);
      return new Response(
        JSON.stringify({
          error: 'Erro ao buscar filmes.',
          details: error.message,
        }),
        { status: 500 }
      );
    }
  }


export async function POST(req) {
  const body = await req.json();
  const newMovie = await prisma.movie.create({ data: body });
  return new Response(JSON.stringify(newMovie), { status: 201 });
}