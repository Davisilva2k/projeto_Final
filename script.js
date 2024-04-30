document.addEventListener("DOMContentLoaded", function () {
  const projetos = [
    {
      titulo: "Projeto 1",
      descricao: "Um gerenciador de Números para lotoFácil usando Html e css",
      imagem: "/Imagem/Imagem_projeto1.png",
    },
    {
      titulo: "Projeto 2",
      descricao: "foi criado uam tela de login podendo usar em qualquer sistema , html,css e javaScript",
      imagem: "/Imagem/Imagem_projeto2.png",
    },
    {
      titulo: "Projeto 3",
      descricao: "Projeto de Calculadora sendo desenvolvido.",
      imagem: "/imagem/imagem_projeto3.png",
    },
    {
      titulo: "Volte para pagina principal",
      descricao: "você está de volta na pagina principal",
    
    }
  
  ];

  const listaProjetos = document.getElementById("lista-projetos");
  const conteudoExibido = document.getElementById("conteudo-exibido");

  projetos.forEach((projeto) => {
    const button = document.createElement("button");
    button.textContent = projeto.titulo;

    button.addEventListener("click", function () {
      const tituloProjeto = document.createElement("h2");
      tituloProjeto.textContent = projeto.titulo;

      const descricaoProjeto = document.createElement("p");
      descricaoProjeto.textContent = projeto.descricao;

      const imagemProjeto = document.createElement("img");
      imagemProjeto.setAttribute("src", projeto.imagem);



      conteudoExibido.innerHTML = ''; // Limpa o conteúdo anterior
      conteudoExibido.appendChild(tituloProjeto);
      conteudoExibido.appendChild(descricaoProjeto);
      conteudoExibido.appendChild(imagemProjeto);


      conteudoExibido.style.display = "block"; // Exibe a section
    });

    listaProjetos.appendChild(button);
  });

  // Adiciona um evento para ocultar a section ao clicar fora dela
  window.onclick = function (event) {
    if (event.target == conteudoExibido) {
      conteudoExibido.style.display = "none";
    }
  };
});