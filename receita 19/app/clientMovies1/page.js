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
        <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-sm">
        <label htmlFor="idTitleSearchKey" className="text-sm font-medium text-gray-700">
          Título:
        </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          value={searchK}
          onChange={(e) => setSearchK(e.target.value)}
          className="flex-1 rounded-lg border-2 border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          placeholder="Digite o título do filme..."/>
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 font-medium text-sm text-white rounded-lg border-2 ${
            loading
              ? "bg-gray-400 cursor-not-allowed border-gray-400"
              : "bg-indigo-600 hover:bg-indigo-700 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          }`}
        >
          {loading ? "Pesquisando..." : "Pesquisar"}
        </button>
      </form>
      
    )
}

export function MovieTable({movies}){
    return (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-2">
                {movies.map((m) => (
                <div key={m.imdbID} className="flex justify-between items-center border-b-2 border-gray-300 py-3">
                    <span className="font-medium text-gray-700">{m.Title}</span>
                    <span className="text-sm text-gray-500">{m.Year}</span>
                </div>
                ))}
            </div>
        </div>
    )
}