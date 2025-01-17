"use client"
import {useState} from "react"

export default function Home(){
    const [resultMovies,setResultMovies]=useState([])
    const [searchK,setSearchK]=useState("")
    const [loading, setLoading] = useState(false);
    async function handleAction(formData) {
        setLoading(true)
        const titleSearchKey=formData.get("titleSearchKey")
        const httpRes= await fetch(`https://www.omdbapi.com/?apikey=eb4996a5&s=${titleSearchKey}`)
        const jsonRes=await httpRes.json()
        setResultMovies(jsonRes.Search || [])
        setLoading(false)
    }
    return (
        <div>
            <MovieForm searchK={searchK} setSearchK={setSearchK} loading={loading} handleAction={handleAction}/>
            <MovieTable movies={resultMovies}/>
        </div>
    )
}

export function MovieForm({searchK, setSearchK, loading, handleAction}){
    const handleSubmit = (e) => {
        e.preventDefault() // faz com que o não haja o envio padrao
        const formData = new FormData(e.target)  //cria instancia de FormData a partir do form
        handleAction(formData)
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-sm">
            <label htmlFor="idTitleSearchKey" className="text-sm font-medium text-gray-700">
                Título:
            </label>
            <input id="idTitleSearchKey" name="titleSearchKey" value={searchK}
                onChange={(e) => setSearchK(e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Digite o título do filme..."/>
            <button type="submit" disabled={loading} className={`px-4 py-2 font-medium text-sm text-white rounded-md ${
                loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}>
                {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
        </form>
    )
}

export function MovieTable({movies}){
    return (
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                <div className="space-y-2">
                    {movies.map((m) => (
                        <div
                        key={m.imdbID}
                        className="flex justify-between items-center border-b border-gray-200 py-2"
                        >
                        <span className="font-medium text-gray-700">{m.Title}</span>
                        <span className="text-sm text-gray-500">{m.Year}</span>
                        </div>
                    ))}
                </div>
        </div>
    )
}