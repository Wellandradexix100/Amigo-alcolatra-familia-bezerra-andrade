const participantes = [
  "Martô",
  "Eduarda",
  "Wanessa",
  "Wellington",
  "Nadja",
  "Gabriel",
  "Rafael",
  "Josilene",
];

let jaSorteou = [];
let jaFoiSorteado = [];
let sorteanteAtual = 0;

function sortear() {
  const sorteadosSection = document.getElementById("sorteados");

  if (jaSorteou.length === participantes.length) {
    sorteadosSection.innerHTML = `
      <p>🎉 Sorteio concluído!🎉</p>
      <p>Partiu encher o cu de cana 🍻</p>
    `;
    return;
  }

  const sorteante = participantes[sorteanteAtual];
  let sorteado;

  do {
    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    sorteado = participantes[indiceSorteado];
  } while (sorteado === sorteante || jaFoiSorteado.includes(sorteado));

  jaSorteou.push(sorteante);
  jaFoiSorteado.push(sorteado);

  sorteadosSection.innerHTML = `
    <p><strong>${sorteante}</strong> sorteou: <strong>${sorteado}</strong>!</p>
    <p>Agora é a vez de <strong>${sorteado}</strong> sortear!</p>
  `;

  sorteanteAtual = participantes.indexOf(sorteado);
}

document.getElementById("sortear").addEventListener("click", sortear);
