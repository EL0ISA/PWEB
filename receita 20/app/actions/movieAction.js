'use server'
export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey")
    if (!titleSearchKey || titleSearchKey=='') return {Search: []}
    try{
        const url = new URL("http://www.omdbapi.com/")
        url.searchParams.append("apikey", "eb4996a5")
        url.searchParams.append("s", titleSearchKey)
        if (yearSearchKey && yearSearchKey.trim() !== '') {
            url.searchParams.append("y", yearSearchKey)
        }
        const httpRes = await fetch(url.toString())
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }
}
