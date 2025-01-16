export default async function Home({searchParams}){
    const {titleSearchKey='bagdad', type='movie', year}= await searchParams
    const res = await fetch(`https://www.omdbapi.com/?apikey=eb4996a5&s=${titleSearchKey}&type=${type}&y=${year || ''}`)
    const data = await res.json()
    return (
        <div className="container my-4">
            <h1 className="mb-4">Resultados da Busca</h1>

            <div className="row">

                {data.Search.map((m) => 
                <div className="col-md-4 mb-4" key={m.imdbID}>
                    <div className="card">
                        <img
                            src={m.Poster}
                            alt={`Poster de ${m.Title}`}
                            className="card-img-top"
                            style={{ objectFit: 'cover', height: '300px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{m.Title}</h5>
                            <p className="card-text">
                                <strong>Ano:</strong> {m.Year}
                            </p>
                        </div>
                    </div>
                </div>
                )}          

            </div>

        </div>

    )

}