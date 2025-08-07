const URL = "";

async function connectAPI() {
  try {
    const tarea = await fetch(URL);
    const datos = await tarea.json();

    console.log("API conectada exitosamente");
    mostrarTarea();
  } catch (error) {
    console.error(error);
  }
}

function mostrarTarea(date) {
  const container = document.getElementById("mostrarTareas");
  container.innerHTML = "";

  date.forEach((element) => {
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = element.title;

    const p = document.createElement("p");
    p.textContent = element.description;

    div.appendChild(h1);
    div.appendChild(p);
    container.appendChild(div);
  });
}
