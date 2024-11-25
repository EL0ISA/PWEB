export const carregarTabela=(cs,colunas, propriedades)=> {
    
    //const div = document.getElementById("cervejasDiv")
    const colHtml=colunas.map(col=>`<th>${col}</th>`)
    const itensHtml = cs.map(item=>`<tr>${propriedades.map(pro=>`<td>${item[pro]}</td>`).join("")}</tr>`)
    const tabela = `
    <table id="customers">
        <tr>
            ${colunas.map(col=>`<th>${col}</th>`).join("\n")}
        </tr>
        
        ${cs.map(item=>`<tr>${propriedades.map(pro=>`<td>${item[pro]}</td>`).join("")}</tr>`).join("\n")}

    </table>`
    return tabela
}