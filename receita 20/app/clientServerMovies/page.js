"use client"

import {searchMovies} from "../actions/movieAction.js"
import Form from "next/form"

import {useState} from "react" 



export default function Home(){
    const [data, setData] = useState({})
    async function handleAction(formData){
        const res = await searchMovies(formData)
        setData(res)       

    }
    return (

        <div>

            <MovieForm actionHandler={handleAction}/>

            {data.Search && <MovieTable movies={data.Search}/>}

        </div>

    )

}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler} className="flex flex-col gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Digite o título do filme" className="p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"/>
            <input id="idYearSearchKey" name="yearSearchKey" placeholder="Digite o ano (opcional)" className="p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"/>
            <button type="submit" className="bg-blue-600 text-white text-lg py-3 px-12 rounded-lg shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                Pesquisar
            </button>
        </Form>
    );
}



export function MovieTable({ movies }) {
    return (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados da Pesquisa</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {movies.map((m) => (
                    <div
                        key={m.imdbID}
                        className="border p-4 rounded-md bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="text-lg font-semibold text-gray-800">{m.Title}</p>
                        <p className="text-sm text-gray-600">Ano: {m.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
