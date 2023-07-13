document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
  const info = document.querySelector("main");
  info.style.display = "none";
  const result = document.getElementById("result");
  result.style.display = "block";
  const totalCaixa = Number(document.getElementById("totalCaixa").value);
  const multibanco = Number(document.getElementById("multibanco").value);
  const excluded = Number(document.getElementById("excluded").value);
  const mistake = Number(document.getElementById("mistake").value);
  const fora = excluded - mistake;

  const showDiv = document.getElementById("result");
  const newRow = document.createElement("h4");
  const d = new Date();
  let day = d.getDate();
  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let Month = month[d.getMonth()];

  newRow.innerText = `Caixa Duque: ${day}/${Month}`;
  showDiv.appendChild(newRow);

  const finalResult = {
    MB: `${multibanco.toFixed(2).replace(".", ",")} €`,
    Cash: `${(totalCaixa - multibanco).toFixed(2).replace(".", ",")} €`,
    Total: `${totalCaixa.toFixed(2).replace(".", ",")} €`,
    Fora: `${fora.toFixed(2).replace(".", ",")} €`,
    TOTAL: `${(totalCaixa + fora).toFixed(2).replace(".", ",")} €`,
  };
  for (var key in finalResult) {
    const newLine = document.createElement("div");
    newLine.className = "newLine";
    const newDiv = document.createElement("div");
    const newkey = document.createElement("p");
    const newValue = document.createElement("p");
    newValue.className = "newValue";
    newkey.innerText = key;
    newValue.innerText = finalResult[key];
    newDiv.append(newkey, newValue);
    newDiv.className = "amostra";
    showDiv.appendChild(newDiv);
    if (key === "Cash" || key === "Fora") {
      showDiv.appendChild(newLine);
    }
  }

  const secondary = document.getElementById("secondary");
  secondary.textContent = `${(totalCaixa - multibanco + fora).toFixed(
    2
  )} € no saquinho`;
  secondary.className = "secondary";
}
