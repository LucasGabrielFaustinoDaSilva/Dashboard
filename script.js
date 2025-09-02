const input = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const tarefaGrid = document.getElementById("tarefaGrid");

function adicionarTarefa() {
  const texto = input.value.trim();
  
  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }
  const card = document.createElement("div");
  card.classList.add("card");
  
  const span = document.createElement("span");
  span.textContent = texto;
  
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.onclick = () => {
    tarefaGrid.removeChild(card); 
  };
  

  card.appendChild(span);
  card.appendChild(btnRemover);
  
  tarefaGrid.appendChild(card);
  
  input.value = "";
}

addBtn.addEventListener("click", adicionarTarefa);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
