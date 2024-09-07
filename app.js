function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string vazia
  if (!campoPesquisa) {
    section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome ou alguma característica sobre o escritor! ";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Cria uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada escritor na lista de escritores
  for (let escritor of escritores) {
    nome = escritor.nome.toLowerCase();
    descricao = escritor.descricao.toLowerCase();
    tags = escritor.tags.toLowerCase();
    //se nome includes campoPesquisa
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento para cada item de resultado
      resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${escritor.nome}</a>
              </h2>
              <p class="descricao-meta">${escritor.descricao}</p>
              <a href="${escritor.link}" target="_blank">Mais informações</a>
            </div>
          `;
    }
  }
  if (!resultados) {
    resultados = "Nada foi encontrado"
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
