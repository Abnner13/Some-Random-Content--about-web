function ajax(configObj) {
    const xhr = new XMLHttpRequest();
    xhr.open(configObj.method, configObj.url, true);

    xhr.onload = e => {
        if (xhr.status === 200) {
            configObj.sucesso(xhr.response);
        } else if (xhr.status >= 400) {
            configObj.erro({
                code: xhr.status,
                text: xhr.statusText
            })
        }
    }
    xhr.send();
}



function createTable(estados) {
    const linhas = estados.map(estado => {
        const tdId = document.createElement("td");
        tdId.innerHTML = estado.id;

        const tdNome = document.createElement("td");
        tdNome.innerHTML = estado.nome;

        const tdSigla = document.createElement("td");
        tdSigla.innerHTML = estado.sigla;

        const tr = document.createElement("tr");
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdSigla);
        return tr;
    })

    const table = document.createElement("table");
    linhas.forEach(linha => table.appendChild(linha));
    document.body.appendChild(table);
}


ajax({
    url: "dados/estados.json",
    method: "GET",

    sucesso(resposta) {
        const estados = JSON.parse(resposta);
        createTable(estados);
    },

    erro(err) {
        const msg = document.createTextNode(`${err.code}: ${err.text}`);
        document.body.appendChild(msg);
    }
})
