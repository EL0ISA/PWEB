import Form from "next/form"

export default async function MovieForm(){

    return (
        <Form action="/movies" className="d-flex align-items-center gap-2 p-2">
            <input id="idTitleSearchKey"name="titleSearchKey"className="form-control form-control-sm" placeholder="Título" required style={{ width: "150px" }}/>
            <input id="idTypeKey" name="type" className="form-control form-control-sm" placeholder="Tipo" style={{ width: "150px" }}/>

            <button type="submit" className="btn btn-outline-primary btn-sm">
                Pesquisar
            </button>
        </Form>
    )

}