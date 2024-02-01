document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("finish").addEventListener("click", finish);
const choice = document.querySelector(".choice");
const main = document.querySelector("main");
const imprevisto = document.querySelector(".imprevisto");
const secondary = document.querySelector("#secondary");
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
function calculate() {
  document.querySelector("main").style.display = "none";
  document.querySelector(".imprevisto").style.display = "none";
  document.getElementById("result").style.display = "block";
  const totalCaixa = Number(document.getElementById("totalCaixa").value);
  const multibanco = Number(document.getElementById("multibanco").value);
  const excluded = Number(document.getElementById("excluded").value);
  const mistake = Number(document.getElementById("mistake").value);
  const fora = excluded - mistake;

  const showDiv = document.getElementById("result");
  const newRow = document.createElement("h4");
  const d = new Date();
  let day = d.getDate();
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

  const secondary = document.querySelector("#secondary");
  secondary.textContent = `${(totalCaixa - multibanco + fora).toFixed(
    2
  )} € no saquinho`;

  secondary.style.display = "flex";
}

function finish() {
  const result = document.querySelector("#result");
  const totalMB = Number(document.getElementById("value").value);
  const equal = Number(document.getElementById("equalizer").value);
  const mesafora = Number(document.getElementById("mesafora").value);
  const cancelations = Number(document.getElementById("cancelations").value);
  const fora = mesafora - cancelations - equal;
  document.querySelector("main").style.display = "none";
  document.querySelector(".imprevisto").style.display = "none";
  document.querySelector("#result").style.display = "block";

  const newRow = document.createElement("h4");
  const d = new Date();
  let day = d.getDate();
  let Month = month[d.getMonth()];
  result.appendChild(newRow);

  newRow.innerText = `Caixa Duque: ${day}/${Month}`;

  const finalResult = {
    MB: `${totalMB.toFixed(2).replace(",", ".")} €`,
    Cash: `0.00 €`,
    total: `${totalMB.toFixed(2).replace(",", ".")} €`,
    Fora: `${fora.toFixed(2).replace(",", ".")} €`,
    TOTAL: `${(totalMB + fora).toFixed(2).replace(",", ".")} €`,
  };

  for (var key in finalResult) {
    const newLine = document.createElement("p");
    newLine.className = "newLine";
    const newDiv = document.createElement("div");
    newDiv.className = "amostra";
    const newKey = document.createElement("p");
    const newValue = document.createElement("p");
    newValue.className = "newValue";
    newKey.innerHTML = key;
    newValue.innerHTML = finalResult[key];
    newDiv.append(newKey, newValue);

    result.appendChild(newDiv);
    if (key === "Cash" || key === "Fora") {
      result.append(newLine);
    }
  }

  const secondary = document.getElementById("secondary");
  secondary.textContent = `${fora.toFixed(2)} € no saquinho`;
  secondary.style.display = "flex";
}

const higher = document.getElementById("higher");
higher.addEventListener("click", maiorQue);

function maiorQue() {
  main.style.display = "block";
  choice.style.display = "none";
}

const lower = document.getElementById("lower");
lower.addEventListener("click", menorQue);

function menorQue() {
  imprevisto.style.display = "block";
  choice.style.display = "none";
}
