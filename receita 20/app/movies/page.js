export default async function Home({searchParams}){
    const {titleSearchKey='bagdad', type='movie', year}= await searchParams
    const res = await fetch(`https://www.omdbapi.com/?apikey=eb4996a5&s=${titleSearchKey}&type=${type}&y=${year || ''}`)
    const data = await res.json()
    return (
        <div className="container mx-auto my-4 px-4">
            <h1 className="text-2xl font-semibold mb-4">Resultados da Busca</h1>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.Search.map((m) => (
                <div className="mb-4" key={m.imdbID}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                        src={m.Poster}
                        alt={`Poster de ${m.Title}`}
                        className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                        <h5 className="text-lg font-medium">{m.Title}</h5>
                        <p className="text-sm text-gray-600">
                            <strong>Ano:</strong> {m.Year}
                        </p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

    )

}