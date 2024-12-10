function sortearPares() {
  const participantes = [
    "Wanessa",
    "Wellington",
    "Nadja",
    "Gabriel",
    "Eduarda",
    "Rafael",
    "Martô",
    "Josilene",
  ];

  for (let i = participantes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [participantes[i], participantes[j]] = [participantes[j], participantes[i]];
  }

  const pares = [];
  for (let i = 0; i < participantes.length; i += 2) {
    if (i + 1 < participantes.length) {
      pares.push(`${participantes[i]} e ${participantes[i + 1]}`);
    } else {
      pares.push(`${participantes[i]} (sem par)`);
    }
  }

  const resultadoDiv = document.getElementById("sorteados");
  resultadoDiv.innerHTML = "<h2>Pares Sorteados:</h2><ul>";
  pares.forEach((par) => {
    resultadoDiv.innerHTML += `<li>${par}</li>`;
  });
  resultadoDiv.innerHTML += "</ul>";
}

function iniciarContagemRegressiva() {
  const resultadoDiv = document.getElementById("sorteados");
  let contagem = 3;
  resultadoDiv.innerHTML = `<h2>${contagem}</h2>`;

  const intervalId = setInterval(() => {
    contagem--;
    if (contagem >= 0) {
      resultadoDiv.innerHTML = `<h2>${contagem}</h2>`;
    } else {
      clearInterval(intervalId);
      sortearPares();
    }
  }, 1000);
}

document
  .getElementById("sortear")
  .addEventListener("click", iniciarContagemRegressiva);
