import Form from "next/form"

export default async function MovieForm(){

    return (
        <form action="/movies" className="flex items-center gap-2 p-2">
            <input
                id="idTitleSearchKey"
                name="titleSearchKey"
                className="border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="Título"
                required
                style={{ width: "150px" }}/>
            <input
                id="idTypeKey"
                name="type"
                className="border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                placeholder="Tipo"
                style={{ width: "150px" }}/>
            <button type="submit" className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Pesquisar
            </button>
        </form>

    )

}