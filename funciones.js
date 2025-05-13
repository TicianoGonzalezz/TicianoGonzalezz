document.getElementById("formEstudiante").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const grado = document.getElementById("grado").value.trim();
    const edad = document.getElementById("edad").value.trim();
  
    if (!nombre || !grado || !edad) {
      alert("Por favor, completá todos los campos.");
      return;
    }
  
    const lista = document.getElementById("listaEstudiantes");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = `${nombre} | ${grado} | ${edad} años`;
  
    lista.appendChild(nuevoItem);
  
    // Resetear el formulario
    this.reset();
  });
  